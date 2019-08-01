const regexp = {
  format: {
    email: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3,4}[-\s\.]{0,1}[0-9]{4}$/,
    password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
  }
};

const RegExpUtil = {
  validateFormat: (fieldValue, regExpField) => {
    const regExp = new RegExp(regexp.format[regExpField]);
    return regExp.test(fieldValue);
  },
  validate: (fieldValue, regExpField) => {
    const regExp = new RegExp(regexp[regExpField]);
    return regExp.test(fieldValue);
  }
};
export default RegExpUtil;
