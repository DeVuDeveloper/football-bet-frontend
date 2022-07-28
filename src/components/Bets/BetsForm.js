/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-else-return */
/* eslint-disable no-alert */
/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeBet } from '../../actions/betActions';
import '../../styles/BetsForm.css';

class BetsForm extends Component {
  state = {
    betInfo: this.props.betInfo,
    amount: 0,
    winner: '',
    odds: '',
  };

  setAmount = (event) => {
    if (event.target.value <= 10000) {
      this.setState({ ...this.state, amount: event.target.value });
      document.getElementById('wagerInput').value = '';
    } else {
      this.setState({ ...this.state, amount: 10000 });
      event.target.value = 10000;
    }
  };

  setAmountForInputField = (event) => {
    if (event.target.value <= 10000) {
      this.setState({ ...this.state, amount: event.target.value });
    } else {
      this.setState({ ...this.state, amount: 10000 });
      event.target.value = 10000;
    }
  };

  chooseWinner = (event) => {
    this.setState({
      ...this.state,
      winner: event.target.name,
      odds: this.props.betInfo.attributes[event.target.value],
    });
  };

  calculatePotentialWin = () => {
    return this.state.amount * parseFloat(this.state.odds);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const amount = this.state.amount;
    const odds = this.state.odds;
    const betType = this.state.winner;
    const token = localStorage.getItem('token');
    const game = this.props.betInfo.id;

    if (amount && odds && betType) {
      if (
        parseInt(amount) <= parseInt(this.props.user.attributes.accounts[0].balance)
      ) {
        this.props.newBet(token, amount, odds, game, betType);
        this.props.history.push('/dashboard');
      } else {
        alert(
          'Please choose an amount that is less than or equal to your account balance.',
        );
      }
    } else {
      alert('Please select  amount');
    }
  };

  render() {
    if (this.props.betInfo !== {}) {
      return (
        <div className="betsFormContainer">
          <div className="betsFormForm">
            <form onSubmit={this.handleSubmit}>
              <h4>Place Bet</h4>
              <p>Please select your amount:</p>
              <hr />
              <h5>
                <span>Home team:</span>
                {this.state.betInfo.meta.homeTeam.name}
              </h5>
              <h5>
                <span>Away team:</span>
                {this.state.betInfo.meta.awayTeam.name}
              </h5>
              <div className="betWager">
                <h5>Place bet:</h5>
                <div className="betWagerBtn">
                  <button type="button" value="10" onClick={this.setAmount}>
                    $10
                  </button>
                  <button type="button" value="50" onClick={this.setAmount}>
                    $50
                  </button>
                  <button type="button" value="100" onClick={this.setAmount}>
                    $100
                  </button>
                  <button type="button" value="200" onClick={this.setAmount}>
                    $200
                  </button>
                  <input
                    id="wagerInput"
                    type="text"
                    placeholder="Enter Amount $"
                    onChange={this.setAmountForInputField}
                  />
                </div>
              </div>

              <div className="betOutcome">
                <h5>Your Predict:</h5>
                <div className="betOutcomeBtn">
                  <button
                    type="button"
                    name="Home Win"
                    value="one"
                    onClick={this.chooseWinner}
                  >
                    1
                  </button>

                  <button
                    type="button"
                    name="Away Win"
                    value="two"
                    onClick={this.chooseWinner}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    name="Draw"
                    value="draw"
                    onClick={this.chooseWinner}
                  >
                    X
                  </button>

                  <button
                    type="button"
                    name="Home Win or Draw"
                    value="one_draw"
                    onClick={this.chooseWinner}
                  >
                    1X
                  </button>
                  <button
                    type="button"
                    name="Away Win or Draw"
                    value="two_draw"
                    onClick={this.chooseWinner}
                  >
                    2X
                  </button>
                </div>
              </div>
              <div className="finalBet">
                <h5>Your bet:</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Predict</th>
                      <th> Odd </th>
                      <th> Bet </th>
                      <th> Win </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        {this.state.winner === ''
                          ? 'Your predict'
                          : this.state.winner}
                        {' '}
                      </td>
                      <td>
                        {' '}
                        {this.state.odds === '' ? 'odd' : this.state.odds}
                        {' '}
                      </td>
                      <td>
                        {' '}
                        {this.state.amount === 0
                          ? ' Place bet'
                          : `$ ${this.state.amount}`}
                        {' '}
                      </td>
                      <td>
                        {' '}
                        {this.state.odds === ''
                          ? 'Possible win'
                          : `$ ${this.calculatePotentialWin()}`}
                        {' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <p>
                Betting is a risk, and by placing this bet you acknowledge that
                you take that risk willingly.
              </p>
              <div className="clearfix">
                <button
                  type="button"
                  className="cancelbtn"
                  onClick={() => {
                    this.props.history.goBack();
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="signupbtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

// user needs access to the betting odds for a specific game
const mapStateToProps = (state) => {
  return {
    betInfo: state.betInfo,
    user: state.currentUser,
  };
};

// set the make bet action to the props of this componet
const mapDispatchToProps = (dispatch) => {
  return {
    newBet: (token, amount, odds, game, bet_type) => makeBet(dispatch, token, amount, odds, game, bet_type),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BetsForm);
