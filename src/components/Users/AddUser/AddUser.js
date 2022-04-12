import React, { useState } from 'react';
import styles from './AddUser.module.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {
  const [error, setError] = useState();

  const user = {
    id: Math.random().toString(),
    username: '',
    age: ''
  }

  const submitHandler = (event) => {
    event.preventDefault();

    //Validations
    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }
    if (+user.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      })
      return;
    }

    props.handleSetUsers(user);
    event.target.reset();
  }

  const errorHandler = () => {
    setError(null)
  }

  return(
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' onChange={(event) => user.username = event.target.value}></input>
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' onChange={(event) => user.age = event.target.value}></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser;