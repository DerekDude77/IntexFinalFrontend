import React, { useState } from 'react';
import axios from 'axios';

function LoginComponent() {
  const [Email, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const authenticateUser = async () => {
    try {
      const response = await axios.post('https://localhost:7183/auth', {
        Email: Email,
        Password: Password,
      });

      if (response.data.authenticated) {
        console.log('User authenticated successfully', response.data);
        // Optionally, store the authentication token or user object
      } else {
        alert('Incorrect username or password.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={Email}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={authenticateUser}>Login</button>
    </div>
  );
}

export default LoginComponent;