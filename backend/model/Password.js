const mongoose = require("mongoose");

const PasswordSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
});

// const PasswordSchema = mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   passwords: {
//     type: Array,
//   },
// });

module.exports = mongoose.model("Password", PasswordSchema);
