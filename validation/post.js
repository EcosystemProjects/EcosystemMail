const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.message = !isEmpty(data.message) ? data.message : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";

  if (!Validator.isLength(data.message, { min: 1, max: 30000 })) {
    errors.message = "Post must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = "Text field is required";
  }
  if (!Validator.isLength(data.subject, { min: 1, max: 45000 })) {
    errors.subject = "subject must be between 10 and 45 characters";
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "subject field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
