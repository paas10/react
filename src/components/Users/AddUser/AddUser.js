import styles from './AddUser.module.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const AddUser = () => {

  return(
    <Card>
      <div className={styles.input}>
        <label>Username</label>
        <input></input>
        <label>Age (Years)</label>
        <input></input>
        <Button text='Add User' />
      </div>
    </Card>
  )
}

export default AddUser;