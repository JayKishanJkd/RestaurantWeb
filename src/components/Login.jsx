import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useHistory ,Link} from 'react-router-dom'; // Import useHistory

const Login = () => {
  const history = useHistory(); // Initialize useHistory

  // Function to handle the login button click
  const handleLogin = () => {
    // Perform login logic here

    // After successful login, navigate to the sign-up page
    history.push('/homescreen');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">Username</label>
          <input type="username" placeholder='Username' className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="button" onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
        <Link to="/signup">SignUp</Link>
      </form>
    </div>
  );
};

export default Login;
