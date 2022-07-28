/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import '../../styles/Login.css';

const Login = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    props.login(email, password, () => {
      props.history.push('/dashboard');
    });

    document.getElementById('login').reset();
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form id="login" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>
          <hr />
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
          <div className="clearfix">
            <button type="submit" className="loginbtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    login: (email, password, callback) => login(dispatch, email, password, callback),
  };
}

export default connect(null, mapDispatchToProps)(Login);
