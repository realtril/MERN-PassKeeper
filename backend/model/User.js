const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 30,
    min: 255,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
    default: null,
  },
  passwordIdsArray: {
    type: Array,
    required: false,
    default: Array,
  },
});

userSchema.statics.updateToken = updateToken;

async function updateToken(id, newToken) {
  return this.findByIdAndUpdate(id, {
    token: newToken,
  });
}

module.exports = mongoose.model("User", userSchema);
