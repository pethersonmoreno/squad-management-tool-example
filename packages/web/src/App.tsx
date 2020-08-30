import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeamForm from './pages/TeamForm';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app-squad-management-tool">
        <Header />
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
