/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-fragments */
/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

const TeamStadium = (props) => {
  const team = props.team.attributes;

  return (
    <Fragment>
      <div className="teamShowStadiumHeader">
        <div className="teamShowStadiumImage">
          <img
            src={
              team.stadium_thumbnail ||
              'http://localhost:3000/images/standard_stadium.jpg'
            }
            alt="Stadium"
          />
        </div>

        <div className="teamShowStadiumName">
          <h2>
            Stadium: <br />
            {team.home_stadium}
            {' '}
          </h2>
        </div>

        <div className="teamShowStadiumImage">
          <img
            src={
              team.team_jersey ||
              team.stadium_thumbnail ||
              'http://localhost:3000/images/standard_stadium.jpg'
            }
            alt="Stadium"
          />
        </div>
      </div>
      <div className="teamShowStadiumDetails">
        <p>
          <span>Stadium capacity:</span>
          <br />
          {team.stadium_capacity || 'Not provided'} <br /> <br />
          <span>Description:</span> <br />
          {team.stadium_description}
        </p>
      </div>
    </Fragment>
  );
};

export default TeamStadium;
