import { useReducer } from "react";

const inputStateReducer = (state, action) => {
  if (action.type === "setValue") return { value: action.newState.value, touched: true, valid: action.newState.valid, showError: !action.newState.valid }
  if (action.type === "setTouched") return { value: state.value, touched: true, valid: action.newState.valid, showError: !action.newState.valid }
  return { value: "", touched: false, valid: false, showError: false }
}

const useOwnInput = (validFunc) => {
  const [input, dispatch] = useReducer(inputStateReducer, { value: "", touched: false, valid: false, showError: false })

  const setValue = (event) => {
    const valid = validFunc(event.target.value)
    dispatch({ type: "setValue", newState: { value: event.target.value, valid: valid }})
  }

  const setBlur = () => {
    const valid = validFunc(input.value)
    dispatch({ type: "setTouched", newState: { valid: valid }})
  }

  const reset = () => {
    dispatch({ type: "reset" })
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
