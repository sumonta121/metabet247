const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateAgentInput(data) {
    let errors = {};
  
    data.handle = validText(data.handle) ? data.handle : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.mobile = validText(data.mobile) ? data.mobile : "";
    data.ref_percentage = validText(data.ref_percentage) ? data.ref_percentage : "";
    data.deposit_percentage = validText(data.deposit_percentage) ? data.deposit_percentage : "";
  
    if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
      errors.handle = "Length must be between 2 and 30 alphanumeric charactars";
    }
    if (Validator.isEmpty(data.handle)) {
      errors.handle = "Username cannot be empty";
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email cannot be empty";
    }
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email must be formatted correctly";
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password cannot be empty";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must between 6 and 30 chars";
    }
    if (Validator.isEmpty(data.mobile)) {
      errors.mobile = "mobile cannot be empty";
    }
    if (Validator.isEmpty(data.ref_percentage)) {
      errors.ref_percentage = "Ref Percentage cannot be empty";
    }
    if (Validator.isEmpty(data.deposit_percentage)) {
        errors.deposit_percentage = "Deposit Percentage cannot be empty";
      }
    
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };