import React from 'react';
import UserList from './UserList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', paddingBottom: '50px' }}>
      <Container className="pt-5">
        <h1 className="text-center mb-5 text-primary fw-bold">User Directory</h1>
        <UserList />
      </Container>
    </div>
  );
}

export default App;
