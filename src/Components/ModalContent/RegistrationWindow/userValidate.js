export const userValidate = (formData) => {
  console.log('formdata', formData)
  const errorObj = {};
  let isFormValid = true;
  const emailReg =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (!formData.login) {
    errorObj.login = 'Please input your login';
    isFormValid = false;
  } else if (formData.login.length < 4) {
    errorObj.login = 'Your login must be at least 4 characters';
    isFormValid = false;
  }

  if (!formData.email) {
    errorObj.email = 'Please input your email address';
    isFormValid = false;
  } else if (emailReg.test(formData.email) == false) {
    errorObj.email = 'Your email adress is not valid';
    isFormValid = false;
  }
  if (!formData.password) {
    errorObj.password = 'Please input your password';
    isFormValid = false;
  } else if (formData.password.length < 6) {
    errorObj.password = `Your password is not valid. Password must be at least 6 characters`;
    isFormValid = false;
  }
  return isFormValid ? null : errorObj;
};
