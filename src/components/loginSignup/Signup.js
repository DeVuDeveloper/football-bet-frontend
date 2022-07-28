/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user';
import '../../styles/Signup.css';

const Signup = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const pwdConfirm = event.target.passwordConfirmation.value;
    if (password === pwdConfirm) {
      props.signup(firstname, lastname, email, password, () => {
        props.history.push('/dashboard');
      });
    } else
      alert(
        'Please make sure your password confirmation matches your password.',
      );
  }
  return (
    <div className="signupContainer">
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="firstname">
            <b>First name</b>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstname"
            required
          />

          <br />
          <label htmlFor="lastname">
            <b>Last name</b>
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            name="lastname"
            required
          />

          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <br />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <br />
          <label htmlFor="password confirmation">
            <b>Password Confirmation</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
            required
          />

          <p>
            By creating an account you agree to our
            {' '}
            <a href="/betterSportsTerms">Terms & Privacy</a>
          </p>
          <div className="clearfix">
            {/* upon click, the cancel btn pushes to the homepage */}
            <button
              type="button"
              className="cancelSignup"
              onClick={() => {
                props.history.push('/');
              }}
            >
              Cancel
            </button>
            <button type="submit" className="signUpBtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (firstname, lastname, email, pwd, callback) => signup(dispatch, firstname, lastname, email, pwd, callback),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
