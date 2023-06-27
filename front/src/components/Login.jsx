import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { login } from '../api';
// import { isAuthenticated } from '../auth';
import { Container, Form, FormGroup, Label, Input, ErrorMessage, Button } from '../styles/Login.styled.jsx';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      // const response = await axios.post('/api/login', { username, password });
      // Assuming the API returns an authentication token
      const token = response.token;
      // Set the authentication token in local storage or state
      // For example, you can store it in state using a context provider or Redux
      // Here, we'll use local storage for simplicity
      localStorage.setItem('token', token);
      localStorage.setItem('data', JSON.stringify(response.data))
      if (response.data.role > 2) {
        history.push('/');
      } else {
        history.push('/');
      }
    } catch (err) {
      console.error(err);
      console.log(err)
      // Handle authentication error
      setError('Login failed');
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
        history.push('/')
    }
}, [history])

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>
        <FormGroup>
          <Label>Username:</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
