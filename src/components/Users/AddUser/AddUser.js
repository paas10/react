import styles from './AddUser.module.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const AddUser = props => {
  const user = {
    id: Math.random().toString(),
    username: '',
    age: ''
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.handleSetUsers(user);
    event.target.reset();
  }

  return(
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={(event) => user.username = event.target.value}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={(event) => user.age = event.target.value}></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;