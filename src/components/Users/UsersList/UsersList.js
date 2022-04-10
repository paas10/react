import Card from '../../UI/Card/Card';
import styles from './UsersList.module.css';

const UsersList = props => {
  return (
    <Card>
      <div className={styles.users}>
        <ul>
          {props.users.map(user => <li key={user.id}>{user.username} ({user.age} years old)</li>)}
        </ul>
      </div>
    </Card>
  );
}

export default UsersList;