import React, { useState } from "react";
import "./Signup.css";
import {Link} from 'react-router-dom';
import axios from 'axios';
import LIttle from '../../assest/LIttle.png'


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignup = (e) => {
    e.preventDefault(); // Prevent the default form submission
    axios.post('https://troubled-shorts-fox.cyclic.cloud/signup', { username, email, password })
      .then(res => {
        alert("User created successfully");
      })
      .catch(err => {
        console.error(err);
        alert("An error occurred while signing up.");
      });
  };

  return (
    <div class="container">
      <div class="main">
        <div class="img">
          <img src={LIttle} alt="Little" />
        </div> 
        
        <div class="main-2">
            <form onSubmit={handlesignup}>
              <div class="username1">
                Sign UP 
              </div>
              <div class="username">
                <label>Username:</label>
                <input type="text"  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div class="username"> 
                <label>Email:</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="username">
                <label>Password:</label>
                <input type="password"  placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="username1">
               <button  type="submit">Sign Up</button>
              </div>
              
              <div class="username1">
                <label>you have already account</label><br/>
                <Link to="/login">Login</Link>
              </div>
            </form>
        </div>
        

      </div>
    </div>
  );
};

export default Signup;
