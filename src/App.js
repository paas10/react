import React from 'react';
import styled from 'styled-components';
import AddUser from './components/Users/AddUser/AddUser';

const Div = styled.div`
  height: 100vh;
  background-color: #000;
  padding: 40px;
`;

function App() {
  return (
    <Div>
      <AddUser />
    </Div>
  );
}

export default App;
