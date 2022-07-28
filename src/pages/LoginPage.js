/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/loginSignup/Login';

const SignupPage = (props) => (
  <>
    <Navbar />
    <Login {...props} />
  </>
);

export default SignupPage;
