// import { useState } from "react";
import { useRef } from "react";

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  const nameInputRef = useRef();
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    console.log(enteredName)
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        {/* <input type="text" id="name" onChange={nameInputChangeHandler} /> */}
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
