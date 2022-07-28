/* eslint-disable no-else-return */
/* eslint-disable react/jsx-fragments */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';

const BetCard = (props) => {
  const gameDetails = props.game.attributes;
  const bet = props.bet;

  if (gameDetails.winner === null) {
    return (
      <Fragment>
        <tr>
          <td>{gameDetails.match_date}</td>
          <td>{gameDetails.match_name}</td>
          <td>{bet.bet_type}</td>
          <td>{bet.odds}</td>
          <td>
            $
            {bet.wager}
          </td>
          <td>Game not yet played</td>
        </tr>
      </Fragment>
    );
  } else if (bet.bet_type === gameDetails.winner) {
    return (
      <Fragment>
        <tr className="greenBet">
          <td>{gameDetails.match_date}</td>
          <td>{gameDetails.match_name}</td>
          <td>{bet.bet_type}</td>
          <td>{bet.odds}</td>
          <td>
            $
            {bet.wager}
          </td>
          <td>{gameDetails.winner}</td>
        </tr>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <tr className="redBet">
          <td>{gameDetails.match_date}</td>
          <td>{gameDetails.match_name}</td>
          <td>{bet.bet_type}</td>
          <td>{bet.odds}</td>
          <td>
            $
            {bet.wager}
          </td>
          <td>{gameDetails.winner}</td>
        </tr>
      </Fragment>
    );
  }
};

export default BetCard;
