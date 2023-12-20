import React, { useState } from "react";
import { useHistory ,Link} from 'react-router-dom'; // Import useHistory
import axios from 'axios';
import LIttle from '../../assest/LIttle.png'
import './Signup.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Initialize useHistory

  // Function to handle the login button click
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission
    axios.post('https://troubled-shorts-fox.cyclic.cloud/login', { username, password })
      .then(res => {
        alert("Login successfully");
        history.push('/homescreen');
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            alert("Invalid username or password. Please try again.");
          } else {
            alert("An error occurred while logging in.");
          }
        } else {
          alert("Network error. Please check your internet connection.");
        }
      });
  };
  
  return (
    <div class="container">
      <div class="main">
        <div class="img">
          <img src={LIttle} alt="Little" />
        </div> 
        
        <div class="main-2">
            <form onSubmit={handleLogin}>
              <div class="username1">
                Login
              </div>
              <div class="username">
                <label>Username:</label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div class="username">
                <label>Password:</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="username1">
               <button  type="submit">Login</button>
              </div>
              
              <div class="username1">
                <label>you don't have  account</label><br/>
                <Link to="/signup">Sign up</Link>
              </div>
            </form>
        </div>
        

      </div>
    </div>
  );
};

export default Login;
