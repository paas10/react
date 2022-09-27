import { useState } from "react";

const useOwnInput = (validFunc) => {
  const [input, setInupt] = useState({ value: "", touched: false, valid: false, showError: false });

  const setValue = (event) => {
    const valid = validFunc(event.target.value)
    setInupt({ value: event.target.value, touched: true, valid: valid, showError: !valid })
  }

  const setBlur = async () => {
    await setInupt((prevState) => {
      const valid = validFunc(prevState.value)
      return { ...prevState, touched: true, valid: valid, showError: !valid }
    })
  }

  const reset = () => {
    setInupt({ value: "", touched: false, valid: false, showError: false  })
  }

  return {
    value: input.value,
    valid: input.valid,
    showError: input.showError,
    setValue,
    setBlur,
    reset
  }
};

export default useOwnInput;
