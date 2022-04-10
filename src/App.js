import { useState } from 'react';
import styled from 'styled-components';
import AddUser from './components/Users/AddUser/AddUser';

const Div = styled.div`
  height: 100vh;
  background-color: #000;
  padding: 40px;
`;

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
    <Div>
      <AddUser handleSetUsers={handleSetUsers} />
    </Div>
  );
}

export default App;
