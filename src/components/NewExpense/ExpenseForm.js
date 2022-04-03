import { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [formActive, setFormActive] = useState(false)
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const titleChangeHandler = (event) => setEnteredTitle(event.target.value)
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value)
  const dateChangeHandler = (event) => setEnteredDate(event.target.value)

  const submitHandler = (event) => {
    // Evita que el navegador se recargue
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    clearFormHandler()
  }

  const activeFormHandler = () => setFormActive(true)
  const clearFormHandler = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    setFormActive(false)
  }

  if (!formActive) {
    return <button onClick={activeFormHandler}>Add New Expense</button>
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={clearFormHandler}>Cancel</button>
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;


// const [userInput, setUserInput] = useState({ enteredTitle: '', enteredAmount: '', enteredDate: '' });

// const titleChangeHandler = (event) => {
//   setUserInput((prevState) => { 
//     return { ...prevState, enteredTitle: event.target.value }
//   })
// }

// const amountChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return { ...prevState, enteredAmount: event.target.value }
//   })
// }

// const dateChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return { ...prevState, enteredDate: event.target.value }
//   })
// }