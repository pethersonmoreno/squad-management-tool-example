import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './TeamForm.scss';
import { teamService, Team } from '../../services/teamService';
import InputText from '../../components/InputText';
import RadioList from '../../components/RadioList';

function TeamForm() {
  const { id: idFromPath } = useParams();
  const [data, setData] = useState<Team>({
    id: '',
    name: '',
    description: '',
    website: '',
    type: 'Fantasy',
  })
  const setDataField = useCallback((fieldName: string, value: string) => {
    setData(oldData => ({
      ...oldData,
      [fieldName]: value,
    }))
  }, []);
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
    <div className="team-form">
      <header className="__header">
        <h1>
          {!idFromPath?'Create':'Update'}
          {' '}your team
          {!!idFromPath?` ${data.name}`:''}
        </h1>
      </header>
      <div className="__content">
        <h2>TEAM INFORMATION</h2>
        <div className="__team-information">
          <div className="__section-left">
            <InputText
              name="teamName"
              label="Team name"
              placeholder="Insert team name"
              value={data.name}
              onChange={e => setDataField('name', e.target.value)}
            />
          </div>
          <div className="__section-right">
            <InputText
              name="teamWebsite"
              label="Team website"
              placeholder="http://myteam.com"
              value={data.website || ''}
              onChange={e => setDataField('website', e.target.value)}
            />
            <RadioList
              label="Team type"
              options={['Real', 'Fantasy']}
              value={data.type}
              onChange={value => setDataField('type', value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamForm;