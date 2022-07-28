/* eslint-disable no-else-return */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable react/sort-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../../../actions/user';
import AllBetsCards from './AllBetsCards';
import '../../../styles/AllBets.css';

class MyBets extends Component {
  findGameObject = (id) => {
    return this.props.games.find((game) => {
      return parseInt(game.id) === id;
    });
  };

  mapBetInfoToBetCard = () => {
    return this.props.bets.bets.map((bet) => {
      const game = this.findGameObject(bet.game_id);
      return <AllBetsCards key={bet.id} bet={bet} game={game} />;
    });
  };

  componentDidMount() {
    this.props.getGames();
  }

  render() {
    if (this.props.bets) {
      return (
        <div className="betsContainer">
          <div className="betsList">
            <h1>Your Bets</h1>
            {this.props.games.length === 0 ? (
              <h1>Loading</h1>
            ) : (
              <Fragment>
                <table border="0" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Home vs Away</th>
                      <th>My Pick</th>
                      <th>Odd</th>
                      <th>Bet</th>
                      <th>Win</th>
                    </tr>
                  </thead>
                  <tbody>{this.mapBetInfoToBetCard().reverse()}</tbody>
                </table>
              </Fragment>
            )}
          </div>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    bets: state.currentUser.attributes,
    games: state.games,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGames: () => fetchGames(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBets);
