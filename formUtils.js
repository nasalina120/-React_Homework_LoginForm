export const INITIAL_VALUES = {
  fullName: "",
  email: "",
  password: "",
  passwordConf: "",
};

export const SIGNUPFORM_REG = {
  fullName: /^[a-zA-Zа-яА-ЯёЁ']+(?:[-'\s][a-zA-Zа-яА-ЯёЁ']+)*$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  passwordConf: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
