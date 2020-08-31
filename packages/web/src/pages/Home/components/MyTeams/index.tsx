import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './MyTeams.scss';
import FloatingIconButtonPlus from '../../../../components/FloatingIconButtonPlus';
import ButtonOrderBy from '../../../../components/ButtonOrderBy';
import IconButton from '../../../../components/IconButton';
import { Team, teamService } from '../../../../services/teamService';
import { useSortedList } from './hooks/useSortedList';
import Swal from 'sweetalert2'

const SHOW_DESCRIPTION = false;
const SHOW_SHARE_ACTION = false;


type TTeamFieldName = 'name' | 'description';

function MyTeams({className}:{className?: string}) {
  const history = useHistory();
  const [teams, setTeams] = useState<Team[]>([]);
  const [sortedTeams, order, changeOrder] = useSortedList<TTeamFieldName, Team>(teams);

  useEffect(()=>{
    teamService.getAll().then(list => {
      setTeams(list);
    });
  }, []);
  const removeTeam = useCallback((id: string)=>{
    teamService.remove(id)
      .then(()=>{
        setTeams(oldTeams => oldTeams.filter(team => team.id !== id));
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: error?.response?.data?.message || error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
  },[])

  return (
    <div className={`my-teams ${className || ''}`}>
      <header className="__header">
        <h1>My Teams</h1>
        <FloatingIconButtonPlus onClick={()=>{
          history.push('/create-team')
        }} />
      </header>
      <div className={`__table ${SHOW_DESCRIPTION?'--show-description':''}`}>
        <div className="__row-header">
          <div className="__cell">
            <div className="__text-with-button">
              <div className="__text">Name</div>
              <ButtonOrderBy
                direction={order && order.field === 'name' && order.direction}
                onClick={()=> changeOrder('name')} />
            </div>
          </div>
          {SHOW_DESCRIPTION && <div className="__cell --description">Description</div>}
          {SHOW_DESCRIPTION && 
          <div className="__cell">
            <div className="__text-with-button">
              <ButtonOrderBy
                direction={order && order.field === 'description' && order.direction}
                onClick={()=> changeOrder('description')} />
            </div>
          </div>}
        </div>
        {sortedTeams.map(team => (
          <div key={team.id} className="__row">
            <div className="__cell">{team.name}</div>
            {SHOW_DESCRIPTION && <div className="__cell --description">{team.description}</div>}
            <div className="__cell --buttons">
              <IconButton onClick={()=>removeTeam(team.id)} icon='delete' />
              {SHOW_SHARE_ACTION && <IconButton onClick={()=>alert('todo: create action')} icon='share' />}
              <IconButton onClick={()=>{
                history.push(`/edit-team/${team.id}`)
              }} icon='edit' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTeams;
