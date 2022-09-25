import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChange,
    inputBlurHandler: nameBlur,
    reset: nameReset,
  } = useInput((name) => name.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChange,
    inputBlurHandler: emailBlur,
    reset: emailReset,
  } = useInput((email) => email.trim() !== "" && email.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid && !emailIsValid) return;
    nameReset();
    emailReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* Name Input */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChange}
          onBlur={nameBlur}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
        <br />
      </div>

      {/* Email Input */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChange}
          onBlur={emailBlur}
        />
        {emailHasError && <p className="error-text">Email is not valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
