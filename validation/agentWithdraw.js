const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateAgentWithdraw(data) {
    let errors = {};
  
    data.receiver_user_id = validText(data.receiver_user_id)
      ? data.receiver_user_id
      : "";
    data.amount = validText(data.amount) ? data.amount : "";
    data.payment = validText(data.payment) ? data.payment : "";
    data.acc_number = validText(data.acc_number) ? data.acc_number : "";
    data.s_key = validText(data.s_key) ? data.s_key : "";
  
    if (Validator.isEmpty(data.receiver_user_id)) {
      errors.receiver_user_id = "Receiver user_id cannot be empty";
    }
  
    if (Validator.isEmpty(data.amount)) {
      errors.amount = "Amount cannot be empty";
    }
  
    if (Validator.isEmpty(data.payment)) {
      errors.payment = "payment cannot be empty";
    }
  
    if (Validator.isEmpty(data.acc_number)) {
      errors.acc_number = "Account Number cannot be empty";
    }
  
    if (Validator.isEmpty(data.s_key)) {
      errors.s_key = "Account Number cannot be empty";
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };