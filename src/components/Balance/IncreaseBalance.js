/* eslint-disable arrow-body-style */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable radix */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import increaseBalance from '../../actions/balanceActions';
import '../../styles/AddFunds.css';

class IncreaseBalance extends Component {
  state = {
    amount: 0,
  };

  handleAmountChange = (event) => {
    if (event.target.value <= 2000) {
      this.setState({ amount: parseInt(event.target.value) });
    } else {
      alert('Limit is 2000 $');
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.amount > 0) {
      const acctId = this.props.user.accounts[0].id;
      const amount = this.state.amount;
      const token = localStorage.getItem('token');
      this.props.addFunds(acctId, amount, token);
      this.props.history.push('/dashboard');
    } else {
      alert('Select an amount');
    }
  };

  render() {
    if (this.props.user) {
      return (
        <div className="addFundsContainer">
          <div className="addFundsForm">
            <h3>
              Select an amount below to debit funds from your bank account and
              add to your Football Bet amount. Maximum of $2000 may be added at
              one time.
            </h3>
            <form id="addFunds" onSubmit={this.handleSubmit}>
              <button
                type="button"
                value="10"
                name="add10"
                onClick={this.handleAmountChange}
              >
                $10
              </button>
              <button
                type="button"
                value="50"
                name="add50"
                onClick={this.handleAmountChange}
              >
                $50
              </button>
              <button
                type="button"
                value="100"
                name="add100"
                onClick={this.handleAmountChange}
              >
                $100
              </button>
              <button
                type="button"
                value="200"
                name="add200"
                onClick={this.handleAmountChange}
              >
                $200
              </button>
              <label>$</label>
              <input
                type="text"
                name="addValue"
                placeholder="Amount"
                onChange={this.handleAmountChange}
              />
              <br />
              <input
                type="submit"
                value={`Add $${this.state.amount || 0} to account`}
              />
            </form>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
const mapStateToProps = (state) => {
  return { user: state.currentUser.attributes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFunds: (acctId, amount, token) => {
      increaseBalance(dispatch, acctId, amount, token);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncreaseBalance);
