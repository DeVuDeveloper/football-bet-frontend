/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PlayerShowPage from '../components/Teams/Soccer/SoccerPlayerShow/PlayerShowPage';

const SoccerShowPage = (props) => (
  <>
    <Navbar />
    <PlayerShowPage {...props} />
  </>
);

export default SoccerShowPage;
