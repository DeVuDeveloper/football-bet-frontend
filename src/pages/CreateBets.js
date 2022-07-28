/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import BetsForm from '../components/Bets/BetsForm';

const CreateBets = (props) => {
  return (
    <Fragment>
      <Navbar />
      <BetsForm {...props} />
    </Fragment>
  );
};

export default CreateBets;
