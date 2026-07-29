import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spinner, Alert } from 'react-bootstrap';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Consume the API to get the list of users
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger" className="text-center">{error}</Alert>;
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {listOfUser.map(user => (
        <Col key={user.id}>
          <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" 
                  style={{ width: '50px', height: '50px', fontSize: '1.2rem', fontWeight: 'bold' }}
                >
                  {user.name.charAt(0)}
                </div>
                <div>
                  <Card.Title className="mb-0 fw-bold">{user.name}</Card.Title>
                  <Card.Subtitle className="text-muted" style={{ fontSize: '0.9rem' }}>@{user.username}</Card.Subtitle>
                </div>
              </div>
              
              <Card.Text>
                <strong>Email:</strong> {user.email}<br />
                <strong>Phone:</strong> {user.phone}<br />
                <strong>Company:</strong> {user.company.name}<br />
                <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserList;
