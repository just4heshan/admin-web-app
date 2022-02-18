const validate = values => {
    const errors = {}
    if (!values.nameInput) {
      errors.nameInput = 'Required'
    }
    if (!values.emailInput) {
      errors.emailInput = 'Required'
    }
    return errors
  }
  
  export default validate;