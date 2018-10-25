const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.linkedinId = !isEmpty(data.linkedinId) ? data.linkedinId : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.formattedName = !isEmpty(data.formattedName) ? data.formattedName : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  if (Validator.isEmpty(data.linkedinId)) {
    errors.linkedinId = "linkedinId is required, please check permissions.";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "firstName is required, please check permissions.";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "lastName is required, please check permissions.";
  }
  if (Validator.isEmpty(data.formattedName)) {
    errors.formattedName =
      "formattedName is required, please check permissions.";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email is required, please check permissions.";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Your email is invalid.";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
