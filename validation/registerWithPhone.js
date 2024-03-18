const Validator = require('validator')
const validText = require('./valid-text')

module.exports = function validateRegisterWithPhoneInput(data){
  let errors = {}
 

  data.mobile = validText(data.mobile) ? data.mobile : ''
  data.password = validText(data.password) ? data.password : ''
  data.password2 = validText(data.password2) ? data.password2 : ''

  if (Validator.isEmpty(data.mobile)){
    errors.mobile = "mobile cannot be empty"
  }

  if (Validator.isEmpty(data.password)){
    errors.password = "Password cannot be empty"
  }
  if (!Validator.isLength(data.password, {min: 6, max: 30})){
    errors.password = "Password must between 6 and 30 chars"
  }

  if (!Validator.equals(data.password, data.password2)){
    errors.password2 = "Passwords must match"
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0,

  }
}

