import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TeamForm from './pages/TeamForm';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-squad-management-tool">
        <Header />
        <div className="app-content">
          <div className="__content">
            <Switch>
              <Route path="/create-team">
                <TeamForm />
              </Route>
              <Route path="/edit-team/:id">
                <TeamForm />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
