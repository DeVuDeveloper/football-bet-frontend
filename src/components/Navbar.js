/* eslint-disable no-else-return */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const logMeOut = () => {
    localStorage.removeItem('token');
  };
  if (localStorage.getItem('token')) {
    return (
      <div className="nav">
        <img
          className="navLogo"
          src="https://www.pngkey.com/png/full/213-2133429_empty-spaces-emptyspaces7-premier-league-logo-png.png"
          alt="Logo"
        />

        <div className="links">
          <ul>
            <NavLink className="navLink" to="/dashboard">
              HOME
            </NavLink>

            <NavLink className="navLink" to="/games">
              BETS
            </NavLink>

            <NavLink className="navLink" to="/bets">
              MY TICKETS
            </NavLink>

            <NavLink className="navLink" to="/addFunds">
              PAYMENTS
            </NavLink>

            <NavLink className="navLink" to="/" onClick={logMeOut}>
              LOGOUT
            </NavLink>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <a href="/">
          <img
            className="navLogo"
            src="https://www.pngkey.com/png/full/213-2133429_empty-spaces-emptyspaces7-premier-league-logo-png.png"
            alt="Logo"
          />
        </a>

        <div className="homeLinks">
          <ul>
            <NavLink className="navLink" to="/login">
              LOGIN
            </NavLink>

            <NavLink className="navLink" to="/signup">
              SIGN UP
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(Navbar);
