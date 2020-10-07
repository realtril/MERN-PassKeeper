const jwt = require("jsonwebtoken");
const User = require("../model/User");
const authorize = async (req, res, next) => {
  try {
    // extract the user token from the Authorization header
    const authorizationHeader = req.get("Authorization") || "";
    const token = authorizationHeader.replace("Bearer ", "");
    // extract user id from payload or return user error with status code 401
    let userId;
    try {
      userId = await jwt.verify(token, process.env.TOKEN_SECRET).id;
    } catch (err) {
      next(err);
    }
    // extract the corresponding user. If not, throw away an
    // error with status code 401
    // User is a user model in our system
    const user = await User.findById(userId);
    if (!user || user.token !== token) {
      return res.status(401).send("Email or password is wrong");
    }
    // If all went well - pass the user record and token to req
    // and pass the request processing to the next middleware
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    next(err);
  }
};

exports.authorize = authorize;
