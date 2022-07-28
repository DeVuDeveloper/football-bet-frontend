/* eslint-disable no-else-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DashSidebar = (props) => {
  if (props.user.attributes) {
    // get user from props
    const user = props.user.attributes;
    return (
      <div className="dashSidebar">
        <div className="userName">
          <h2>{user.first_name}</h2>
        </div>
        <div className="userBalance">
          <h3>
            Balance: $
            {user !== undefined ? user.accounts[0].balance : 'Loading...'}
          </h3>
        </div>
        <div className="userLinks">
          <Link className="sidebarLink" to="/teams/soccer">
            Teams
          </Link>
          <Link className="sidebarLink" to="/addFunds">
            PayIn
          </Link>

          <Link className="sidebarLink" to="/bets">
            My tickets
          </Link>
        </div>
      </div>
    );
  } else {
    return <h1> Loading... </h1>;
  }
};

function mapStateToProps(state) {
  return {
    user: state.currentUser,
  };
}

export default connect(mapStateToProps)(DashSidebar);
