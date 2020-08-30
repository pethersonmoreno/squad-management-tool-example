import React from 'react';
import MyTeams from './components/MyTeams';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <MyTeams className="section-left" />
      <div className="section-right">
        &nbsp;
      </div>
    </div>
  );
}

export default Home;
