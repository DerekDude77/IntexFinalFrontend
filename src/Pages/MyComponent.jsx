import React, { useState } from 'react';
import axios from 'axios';


function MyComponent() {
    const [UserId, setuserID] = useState('');
    const [Username, setuserName] = useState('');
    const [Password, setpassword] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');
    const [Email, setemail] = useState('');
    const [Firstname, setfirstName] = useState('');
    const [Lastname, setlastName] = useState('');
    const [Role, setrole] = useState(false);
  
    const postData = async () => {
      if (Password !== PasswordConfirm) {
        window.alert('Error: Passwords do not match');
        return;
      }
  
      if (Password.length < 16) {
        window.alert('Error: Password must be longer than 16 characters');
        return;
      }
  
      try {
        const response = await axios.post('https://localhost:7183/auth', {
          UserId: UserId,
          Username: Username,
          Password: Password,
          Email: Email,
          Firstname: Firstname,
          Lastname: Lastname,
          Role: Role,
        });
        console.log('Data saved successfully', response.data);

        window.location.href = '/Login';
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    const loginUser = async () => {
      try {
        const response = await axios.post('https://localhost:7183/auth/login', {
          Email: Email,
          Password: Password,
        });
        console.log('Login successful:', response.data);
    
        // Redirect the user to a different page or perform other actions
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
    return (
      <div>
        <input
          type="number"
          value={UserId}
          onChange={(e) => setuserID(e.target.value)}
          placeholder="Enter userID"
        />
        <input
          type="text"
          value={Username}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="Enter userName"
        />
        <input
          type="password"
          value={Password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter password"
        />
        <input
          type="password"
          value={PasswordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirm password"
        />
        <input
          type="email"
          value={Email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="text"
          value={Firstname}
          onChange={(e) => setfirstName(e.target.value)}
          placeholder="Enter firstName"
        />
        <input
          type="text"
          value={Lastname}
          onChange={(e) => setlastName(e.target.value)}
          placeholder="Enter lastName"
        />
  
        <input
          type="checkbox"
          checked={Role}
          onChange={(e) => setrole(e.target.checked)}
          placeholder="Role"
        />
        <button onClick={postData}>Submit</button>
    </div>
  );

}

export default MyComponent;


