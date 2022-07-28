/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
/* eslint-disable arrow-body-style */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import DashSidebar from '../components/Dash/DashSidebar';
import DashGames from '../components/Dash/DashGames';
import DashBets from '../components/Dash/DashBets';
import '../styles/Dashboard.css';

const Dashboard = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="dashboardContainer">
        <div className="dashboardLeft">
          <DashSidebar />
        </div>
        <div className="dashboardContainerRight">
          <div className="dashboardRightTop">
            <DashGames games={props.games} {...props} />
          </div>
          <div className="dashboardRightBottom">
            {props.user ? <DashBets user={props.user} {...props} /> : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
