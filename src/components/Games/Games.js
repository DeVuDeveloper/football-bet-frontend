/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import FutureGames from './FutureGames';
import PastGames from './PastGames';

const today = new Date();

const Games = (props) => {
  const getPastGames = () => {
    return props.games.filter((game) => {
      return new Date(game.attributes.match_date) < today;
    });
  };

  const getFutureGames = () => {
    return props.games.filter((game) => {
      return new Date(game.attributes.match_date) >= today;
    });
  };

  return (
    <div className="gamesContainer">
      <div className="gamesList">
        {props.games.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <Fragment>
            <div className="futureGamesList">
              <FutureGames futureGames={getFutureGames()} {...props} />
            </div>
            <div className="pastGamesList">
              <PastGames pastGames={getPastGames()} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Games;
