/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Games from '../components/Games/Games';

const GamesPage = (props) => (
  <>
    <Navbar />
    <Games {...props} />
  </>
);

export default GamesPage;
