import useOwnInput from "../hooks/useOwnInput";

const isNotEmpty = value => value.trim() !== ""
const isEmail = value => value.trim() !== "" && value.includes("@")

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    valid: firstNameValid,
    showError: firstNameShowError,
    setValue: setFirstName,
    setBlur: setFirstNameBlur,
    reset: resetFirstName,
  } = useOwnInput(isNotEmpty);

  const {
    value: lastNameValue,
    valid: lastNameValid,
    showError: lastNameShowError,
    setValue: setLastName,
    setBlur: setLastNameBlur,
    reset: resetLastName,
  } = useOwnInput(isNotEmpty);

  const {
    value: emailValue,
    valid: emailValid,
    showError: emailShowError,
    setValue: setEmail,
    setBlur: setEmailBlur,
    reset: resetEmail,
  } = useOwnInput(isEmail);

  const submitForm = async (event) => {
    event.preventDefault();

    setFirstNameBlur()
    setLastNameBlur()
    setEmailBlur()
    
    // Set blur all the inputs and confirm that are valid
    if (!firstNameValid || !lastNameValid || !emailValid) return

    console.log('Sent', firstNameValue, lastNameValue, emailValue)
    resetFirstName()
    resetEmail()
    resetLastName()
  }

  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className={firstNameShowError ? "form-control invalid" : "form-control"}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={firstNameValue} onChange={setFirstName} onBlur={setFirstNameBlur} />
          {firstNameShowError && (<span className="error-text">The <b>First Name</b> is a required field</span>)}
        </div>
        <div className={lastNameShowError ? "form-control invalid" : "form-control"}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lastNameValue} onChange={setLastName} onBlur={setLastNameBlur} />
          {lastNameShowError && (<span className="error-text">The <b>Last Name</b> is a required field</span>)}
        </div>
      </div>
      <div className={emailShowError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={emailValue} onChange={setEmail} onBlur={setEmailBlur} />
        {emailShowError && (<span className="error-text">Please set a <b>valid</b> email</span>)}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
