/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepageImg">
        <img
          className="homeBackground"
          src="https://thepeoplesperson.com/wp-content/uploads/2021/10/old-trafford-south-stand-min.jpg"
          alt="manchester-stadium"
        />
      </div>
      <p className="homeText">SIGN UP & CREATE YOUR ACCOUNT NOW</p>
    </div>
  );
};

export default Homepage;
