import React, { useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import './MyTeams.scss';
import FloatingIconButtonPlus from '../../../../components/FloatingIconButtonPlus';
import ButtonOrderBy from '../../../../components/ButtonOrderBy';
import IconButton from '../../../../components/IconButton';

const teams = [
  { name: 'Barcelona', description: 'Barcelona Squad' },
  { name: 'Real Madrid', description: 'Real Madrid Squad' },
  { name: 'Milan', description: 'Milan Squad' },
  { name: 'Liverpool', description: 'Liverpool Squad' },
  { name: 'Bayer Munich', description: 'Bayer Munich Squad' },
  { name: 'Lazio', description: 'Lazio Squad' },
];

const SHOW_DESCRIPTION = false;
const SHOW_SHARE_ACTION = false;

const sortArrayByFieldName = (array: any[], field: string, direction: 'asc'|'desc') => {
  const lessThanResult = direction === 'asc'?-1:1;
  const greaterThanResult = direction === 'asc'?1:-1;
  return array.sort((a, b) => {
    if(a[field] < b[field]){
      return lessThanResult;
    }
    if(a[field] > b[field]){
      return greaterThanResult;
    }
    return 0;
  });
};

type TFieldName = 'name' | 'description';

type TOrder = {
  field: TFieldName;
  direction: 'asc' | 'desc';
}

function MyTeams({className}:{className?: string}) {
  const history = useHistory();
  const [order, setOrder] = useState<TOrder | null>(null);
  const sortedTeams = useMemo(()=>{
    if(!order){
      return teams;
    }
    return sortArrayByFieldName(teams, order.field, order.direction)
  }, [order]);
  const changeOrder = useCallback((field: TFieldName) => {
    if(order && order.field === field){
      setOrder({
        field,
        direction: order.direction === 'asc'?'desc':'asc',
      });
      return;
    }
    setOrder({ field, direction: 'asc' });
  }, [order]);
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
          <div key={team.name} className="__row">
            <div className="__cell">{team.name}</div>
            {SHOW_DESCRIPTION && <div className="__cell --description">{team.description}</div>}
            <div className="__cell --buttons">
              <IconButton onClick={()=>alert('todo: create action')} icon='delete' />
              {SHOW_SHARE_ACTION && <IconButton onClick={()=>alert('todo: create action')} icon='share' />}
              <IconButton onClick={()=>{
                history.push('/create-team')
              }} icon='edit' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTeams;
