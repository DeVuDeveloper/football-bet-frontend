/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import { dispatchBet } from '../../actions/betActions';

const BetButton = (props) => {
  const handleClick = () => {
    props.createBet(props.game);
    props.history.push('/bets/new');
  };

  return (
    <button type="button" onClick={handleClick}>
      Bet
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBet: (betInfo) => dispatchBet(dispatch, betInfo),
  };
};

export default connect(null, mapDispatchToProps)(BetButton);
