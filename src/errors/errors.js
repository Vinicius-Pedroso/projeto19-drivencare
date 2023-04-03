function duplicatedEmailError(email) {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
    email,
  };
}

function duplicatedCRMError(CRM) {
  return {
    name: "DuplicatedCRMError",
    message: "There is already an user with given CRM",
    CRM,
  };
}

function invalidCredentialsError() {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}

export default { duplicatedEmailError, duplicatedCRMError, invalidCredentialsError } 