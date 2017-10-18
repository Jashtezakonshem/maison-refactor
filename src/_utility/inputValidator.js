
export default class InputValidator {

   static mustNotBeEmpty(fieldValue) {
       return {
           isValid: Boolean(fieldValue),
           errorMsg: 'field must not be empty'
       };
   };

   static mustBeValidEmail(fieldValue)  {
      const regExp = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');
      return {
          isValid : regExp.test(fieldValue),
          errorMsg: 'email must be valid'
      }
   }

   static inputValidatorReducer(validations) {
       let validationResult = {
           isValid: true,
           errorMessages: []
       };

       if (validations.length == 1) {
           validationResult.isVisible = !validations[0].isValid;
           validationResult.isValid = validations[0].isValid;
           validationResult.errorMessages.push(validations[0].errorMsg)
       } else if (validations.length > 1) {
           validationResult = validations.reduce((partialSum, currentEl) => {
               return {
                   isVisible: !partialSum.isValid,
                   isValid: partialSum.isValid && currentEl.isValid,
                   errorMessages: currentEl.isValid ? partialSum.errorMessages : [...partialSum.errorMessages, currentEl.errorMsg]
               }
           }, validationResult);
       }
       return validationResult;
   }
}
