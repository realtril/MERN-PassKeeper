const { authorize } = require("../helpers/authorize");
const { Router } = require("express");
const router = Router();
const Password = require("../model/Password");
const { passwordValidation } = require("../helpers/validation");
const Cryptr = require("cryptr");
// const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

//get all of the passwords
router.get("/", authorize, async (req, res, next) => {
  try {
    const userId = req.user._id;
    const passwords = await Password.find({ userId });
    res.json(passwords);
  } catch (err) {
    res.json({ message: err });
  }
});
//SUBMIT a Password
router.post("/", authorize, async (req, res) => {
  //validate the data before we make a user
  const { error } = passwordValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const userId = req.user._id;
  const password = new Password({
    username: req.body.username,
    password: req.body.password,
    website: req.body.website,
    name: req.body.name,
    userId: userId,
  });
  try {
    const savedPassword = await password.save();
    res.status(200).json(savedPassword);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete Password
router.delete("/:passwordId", authorize, async (req, res, next) => {
  try {
    const { passwordId } = req.params;
    const removedPassword = await Password.findByIdAndDelete(passwordId);
    if (removedPassword) {
      return res.status(200).send({ message: "Password deleted" });
    }
  } catch (err) {
    res.json({ message: err });
    next(error);
  }
});

//update a Password
router.patch("/:passwordId", authorize, async (req, res, next) => {
  try {
    const { passwordId } = req.params;
    const updatedPassword = await Password.findByIdAndUpdate(
      passwordId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(updatedPassword);
  } catch (err) {
    res.json({ message: err });
    next(error);
  }
});

module.exports = router;
