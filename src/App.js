import { useState } from 'react';
import styled from 'styled-components';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const handleSetUsers = newUser => {
    setUsers(prevState => 
      [
        ...prevState,
        newUser
      ]
    )
  }

  return (
    <div>
      <AddUser handleSetUsers={handleSetUsers} />
      { users.length > 0 && <UsersList users={users} /> }
    </div>
  );
}

export default App;
