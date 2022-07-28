/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import AllBets from '../components/Bets/AllBets/AllBets';

const AllBet = (props) => {
  return (
    <Fragment>
      <Navbar />
      <AllBets {...props} />
    </Fragment>
  );
};

export default AllBet;
