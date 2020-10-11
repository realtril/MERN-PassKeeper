//validation
const Joi = require("@hapi/joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(7).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
//login validation

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
//password manager validation

const passwordValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    website: Joi.string().required(),
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.passwordValidation = passwordValidation;
