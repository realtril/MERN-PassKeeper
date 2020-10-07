const router = require("express").Router();
const User = require("../model/User");
const Password = require("../model/Password");
const { authorize } = require("../helpers/authorize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  registerValidation,
  loginValidation,
} = require("../helpers/validation");

router.post("/register", async (req, res) => {
  //validate the data before we make a user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //check if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists.");
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  //create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN_SECRET, {
      expiresIn: 2 * 24 * 60 * 60,
    });
    const tokenedUser = await User.findByIdAndUpdate(
      savedUser._id,
      { token: token },
      {
        new: true,
      }
    );
    res.status(201).send({ userId: savedUser._id, token: token });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

//login
router.post("/login", async (req, res) => {
  //validate the data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //check if the user is already in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({ message: "Email or password is wrong" });
  //password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ message: "Invalid password" });
  //create and assign a token
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: 2 * 24 * 60 * 60,
  });
  const tokenedUser = await User.findByIdAndUpdate(
    user._id,
    { token: token },
    {
      new: true,
    }
  );
  res
    .header("auth-token", token)
    .status(200)
    .send({
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
        token: token,
      },
    });
});

//logout
router.post("/logout", authorize, async (req, res) => {
  try {
    const user = req.user;
    await User.updateToken(user._id, null);
    return res.status(204).send();
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
