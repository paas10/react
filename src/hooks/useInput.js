import { useState } from "react";

const useInput = (validateValue) => {
  const [input, setInput] = useState({ value: "", touched: false });

  const inputIsValid = validateValue(input.value);
  const hasError = !inputIsValid && input.touched;

  const inputChangeHandler = (event) => {
    setInput((prevValue) => ({ ...prevValue, value: event.target.value }))
  };

  const inputBlurHandler = (event) => {
    setInput((prevValue) => ({ ...prevValue, touched: true }))
  };

  const reset = () => {
    setInput({ value: "", touched: false })
  }

  return {
    value: input.value,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput;
