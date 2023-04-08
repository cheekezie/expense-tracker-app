export const emailValidator = (email: string) => {
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

export const dateValidator = (date: string) => {
  const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return pattern.test(date);
};

export const passwordValidator = (password: string) => {
  const hasUpperCase = /[A-Z]+/.test(password);
  const hasLowerCase = /[a-z]+/.test(password);
  const hasNumeric = /[0-9]+/.test(password);
  const hasNoSpace = /\s/.test(password);
  const hasLength = password.length >= 6;
  return hasLength;
  return hasUpperCase && hasLowerCase && hasNumeric && hasLength;
};
