import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';
import CartScreen from './components/cart/CartScreen';
import HomeScreen from './components/homescreen/HomeScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/cartscreen" component={CartScreen} />
          <Route path="/homescreen" component={HomeScreen} /> {/* Place this route first */}
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
