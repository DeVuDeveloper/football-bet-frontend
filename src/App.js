/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { Component, Fragment } from 'react';
import {
  Route, withRouter, Redirect, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { autoLogin, fetchGames } from './actions/user';
import { fetchTeams } from './actions/teamsActions';
import Home from './pages/Home';
import GamesPage from './pages/GamesPage';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AddFunds from './pages/AddFunds';
import TermsOfService from './components/loginSignup/TermsOfService';
import CreateBets from './pages/CreateBets';
import AllBet from './pages/AllBets';
import TeamsPage from './pages/TeamsPage';
import SoccerShowPage from './pages/SoccerShowPage';
import PlayerShowPage from './pages/PlayerShowPage';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.autoLogin(token);
    }
    this.props.getTeams();
    this.props.getGames();
  }

  render() {
    if (localStorage.token) {
      return (
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/addFunds" component={AddFunds} />
          <Route exact path="/betterSportsTerms" component={TermsOfService} />
          <Route exact path="/bets/new" component={CreateBets} />
          <Route exact path="/bets" component={AllBet} />
          <Route exact path="/teams/soccer" component={TeamsPage} />
          <Route exact path="/teams/soccer/:id" component={SoccerShowPage} />
          <Route
            exact
            path="/teams/soccer/players/:id"
            component={PlayerShowPage}
          />
          <Route
            exact
            path="/games"
            render={(routerProps) => (
              <GamesPage {...routerProps} games={this.props.games} />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(routerProps) => (
              <Dashboard {...routerProps} games={this.props.games} />
            )}
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/betterSportsTerms" component={TermsOfService} />
            <Route exact path="/teams/soccer" component={TeamsPage} />
            <Route exact path="/teams/soccer/:id" component={SoccerShowPage} />
            <Route
              exact
              path="/teams/soccer/players/:id"
              component={PlayerShowPage}
            />
            <Redirect to="/login" />
          </Switch>
        </Fragment>
      );
    }
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
