import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/create-team">Create team</Link>
    </div>
  );
}

function TeamForm() {
  return (
    <div>
      <h2>Team Form</h2>
      <Link to="/">Home</Link>
    </div>
  );
}


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/create-team">
          <TeamForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
