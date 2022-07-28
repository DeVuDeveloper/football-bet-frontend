/* eslint-disable prefer-template */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

const SocialMedia = (props) => {
  const team = props.team.attributes;

  return (
    <Fragment>
      <ul>
        {team.website && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.website.includes('www')
                  ? '//' + team.website
                  : '//www.' + team.website
              }
            >
              <i className="fas fa-globe-americas" />
            </a>
          </li>
        )}

        {team.facebook && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.facebook.includes('www')
                  ? '//' + team.facebook
                  : '//www.' + team.facebook
              }
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
        )}

        {team.instagram && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.instagram.includes('www')
                  ? '//' + team.instagram
                  : '//www.' + team.instagram
              }
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        )}

        {team.twitter && (
          <li className="socialLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                team.twitter.includes('www')
                  ? '//' + team.twitter
                  : '//www.' + team.twitter
              }
            >
              <i className="fab fa-twitter-square" />
            </a>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default SocialMedia;
