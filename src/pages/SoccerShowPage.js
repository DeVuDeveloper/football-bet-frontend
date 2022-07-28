/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import SoccerTeamShow from '../components/Teams/Soccer/SoccerTeamShow/SoccerTeamShow';

const SoccerShowPage = (props) => {
  return (
    <Fragment>
      <Navbar />
      <SoccerTeamShow {...props} />
    </Fragment>
  );
};

export default SoccerShowPage;
