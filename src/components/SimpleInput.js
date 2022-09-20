import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  // const [enteredName, setEnteredName] = useState("");

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {/* <input type="text" id="name" onChange={nameInputChangeHandler} /> */}
        <input ref={nameInputRef} type="text" id="name" />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
