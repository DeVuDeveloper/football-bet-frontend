/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import FutureGames from '../Games/FutureGames';

const DashGames = (props) => {
  const today = new Date();
  const getFutureGames = () => {
    return props.games.filter((game) => {
      return new Date(game.attributes.match_date) >= today;
    });
  };
  const limitGames = getFutureGames().slice(0, 3);

  return (
    <Fragment>
      <button className="button" onClick={() => props.history.push('/games')}>
        Matches
      </button>
      <div className="gamesList">
        <FutureGames {...props} futureGames={limitGames} {...props} />
      </div>
    </Fragment>
  );
};

export default DashGames;
