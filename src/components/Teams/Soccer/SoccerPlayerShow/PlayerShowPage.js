/* eslint-disable no-else-return */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component, Fragment } from 'react';
import { fetchPlayerInfo } from '../../../../actions/teamsActions';
import '../../../../styles/PlayerShow.css';

class PlayerShowPage extends Component {
  state = {
    player: [],
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;
    fetchPlayerInfo(playerId).then((player) => {
      console.log(player);
      this.setState({ player: player.data });
    });
  }

  render() {
    const player = this.state.player.attributes;

    if (player) {
      return (
        <div className="playerShowContainer">
          <div className="playerInnerContainer">
            <div className="playerPrimaryImageAndInfo">
              <div className="playerShowImage">
                <img
                  src={
                    player.profile_image ||
                    'https://cdn.pixabay.com/photo/2012/04/14/15/12/soccer-34248_960_720.png'
                  }
                  alt="Player"
                />
              </div>
              <div className="playerShowPrimaryInfo">
                <h1>{player.full_name}</h1>
                <h3>Team: {player.team_name}</h3>
                <h3>Signed: {player.date_signed}</h3>
                <h3>Nationality: {player.nationality}</h3>
              </div>
            </div>
            <div className="playerShowDescription">
              <h2>Details:</h2>
              <h4>
                {player.birth_location && `Born: ${player.birth_location}`}
              </h4>
              <h4>
                {player.date_of_birth && `Birthday: ${player.date_of_birth}`}
              </h4>
              <h4>
                {player.contracted_salary &&
                  `Contracted Salary: ${player.contracted_salary}`}
              </h4>
              <h4>{player.height && `Height: ${player.height}`} </h4>

              {player.description ? (
                <Fragment>
                  <h2>Description:</h2>
                  <p>{player.description}</p>
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PlayerShowPage;
