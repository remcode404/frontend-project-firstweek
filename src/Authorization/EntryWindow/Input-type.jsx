function checkEmail(value) {
    const emailRegExp = /\S+@\S+\.\S+/;
    return emailRegExp.test(value);
  }
  
  function InputType(props) {
    const { value, children, ...rest } = props;
  
    const isEmail = checkEmail(value);
    const type = isEmail ? "email" : "phone";
  
    return children({ value, type, isEmail, ...rest });
  }
  
  export default InputType;