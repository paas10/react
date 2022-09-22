import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState({ value: "", touched: false });
  const [email, setEmail] = useState({ value: "", touched: false });

  const nameIsValid = name.value.trim() !== "";
  const nameIsInvalid = !nameIsValid && name.touched;
  const emailIsValid = email.value.trim() !== "" && email.value.includes("@");
  const emailIsInvalid = !emailIsValid && email.touched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) formIsValid = true;

  const inputChangeHandler = (input, event) => {
    if (input === "name") setName((prevValue) => ({ ...prevValue, value: event.target.value }))
    if (input === "email") setEmail((prevValue) => ({ ...prevValue, value: event.target.value }))
  };

  const inputBlurHandler = (input, event) => {
    if (input === "name") setName((prevValue) => ({ ...prevValue, touched: true }))
    if (input === "email") setEmail((prevValue) => ({ ...prevValue, touched: true }))
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setName((prevValue) => ({ ...prevValue, touched: true }))
    setEmail((prevValue) => ({ ...prevValue, touched: true }))

    if (!nameIsValid && !emailIsValid) return;
    setName({ value: "", touched: false })
    setEmail({ value: "", touched: false })
  };

  const nameInputClasses = nameIsInvalid ? "form-control invalid" : "form-control";
  const emailInputClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>

      {/* Name Input */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name.value} onChange={inputChangeHandler.bind(null, "name")} onBlur={inputBlurHandler.bind(null, "name")} />
        {nameIsInvalid && (<p className="error-text">Name must not be empty.</p>)}
        <br/>
      </div>

      {/* Email Input */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="text" id="email" value={email.value} onChange={inputChangeHandler.bind(null, "email")} onBlur={inputBlurHandler.bind(null, "email")} />
        {emailIsInvalid && (<p className="error-text">Email is not valid.</p>)}

      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
