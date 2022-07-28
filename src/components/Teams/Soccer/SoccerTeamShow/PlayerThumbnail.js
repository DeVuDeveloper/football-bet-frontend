/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const PlayerThumbnail = (props) => {
  const player = props.player.attributes;
  const handleClick = () => {
    props.history.push(`/teams/soccer/players/${props.player.id}`);
  };

  return (
    <div className="playerCard" onClick={handleClick}>
      <div className="player-card-inner">
        <div className="player-card-front">
          <img
            src={
              player.profile_image ||
              'http://clipart-library.com/images/BcaKKaXLi.png'
            }
            alt="Player Card"
          />
        </div>

        {/* basic player information for the back of the player card */}
        <div className="player-card-back">
          <h1>{player.full_name}</h1>
          <h3>Position: {player.position}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerThumbnail;
