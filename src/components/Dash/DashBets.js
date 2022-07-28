/* eslint-disable no-else-return */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MyBets from '../Bets/MyBets';

const DashBets = (props) => {
  if (props.user.attributes !== undefined) {
    const limitBets = props.user.attributes.bets.slice(0, 9);

    return (
      <div className="dashBets">
        <button className="button" onClick={() => props.history.push('/bets')}>
          Tickets
        </button>
        <MyBets limitBets={limitBets} />
      </div>
    );
  } else {
    return null;
  }
};

export default DashBets;
