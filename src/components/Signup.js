import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlesignup = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('https://troubled-shorts-fox.cyclic.cloud/signup', userData);

      if (response.status >= 200 && response.status < 300) {
        // Signup was successful, you can redirect the user or show a success message.
        console.log('Signup successful');
      } else {
        // Handle errors, e.g., show an error message to the user.
        console.error('Signup failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={handlesignup}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
