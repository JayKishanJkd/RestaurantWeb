import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HomeScreen from './components/HomeScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/homescreen" component={HomeScreen} /> {/* Place this route first */}
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
