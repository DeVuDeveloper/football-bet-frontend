/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { autoLogin, fetchGames } from './actions/user';
import { fetchTeams } from './actions/teamsActions';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.autoLogin(token);
    }
    this.props.getTeams();
    this.props.getGames();
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auto_login: (token) => autoLogin(dispatch, token),
    getTeams: () => fetchTeams(dispatch),
    getGames: () => fetchGames(dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
