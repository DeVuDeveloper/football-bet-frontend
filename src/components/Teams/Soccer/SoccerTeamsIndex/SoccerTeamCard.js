/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const SoccerTeamCard = (props) => {
  const team = props.team.attributes;
  const handleClick = () => {
    props.routerProps.history.push(`/teams/soccer/${team.id}`);
  };
  return (
    <div className="soccerTeamCard" onClick={handleClick}>
      <div className="soccer-card-inner">
        <div className="soccer-card-front">
          <img src={team.team_logo} alt="Avatar" />
        </div>
        <div className="soccer-card-back">
          <h1>{team.name}</h1>
          <h3>{team.league}</h3>
        </div>
      </div>
    </div>
  );
};

export default SoccerTeamCard;
