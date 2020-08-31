import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TeamForm.scss';
import { teamService, Team } from '../../services/teamService';

function TeamForm() {
  const [data, setData] = useState<Team>({
    id: '',
    name: '',
    description: '',
  })
  const { id: idFromPath } = useParams();
  useEffect(()=>{
    if(!idFromPath){
      return;
    }
    teamService.findById(idFromPath)
      .then(team => {
        setData(team);
      });
  }, [idFromPath]);
  console.log(data);
  return (
    <div>
      <h2>Team Form</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default TeamForm;