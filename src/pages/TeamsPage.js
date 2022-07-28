/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import SoccerTeams from '../components/Teams/Soccer/SoccerTeamsIndex/SoccerTeams';

const TeamsPage = (props) => {
  return (
    <Fragment>
      <Navbar />
      <SoccerTeams {...props} />
    </Fragment>
  );
};

export default TeamsPage;
