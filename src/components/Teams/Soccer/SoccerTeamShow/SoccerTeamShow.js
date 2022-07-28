/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeamPlayers } from '../../../../actions/teamsActions';
import TeamDetails from './TeamDetails';
import PlayerThumbnail from './PlayerThumbnail';
import TeamStadium from './TeamStadium';
import SocialMedia from './SocialMedia';
import '../../../../styles/SoccerTeam.css';

class SoccerTeamShow extends Component {
  state = {
    players: [],
  };
  findTeam = (id) => {
    return this.props.teams.find((team) => {
      return team.id === id;
    });
  };

  mapPlayersToPlayerThumb = () => {
    if (this.state.players.length > 0) {
      return this.state.players.map((player) => {
        return (
          <PlayerThumbnail key={player.id} player={player} {...this.props} />
        );
      });
    } else {
      return null;
    }
  };

  componentDidMount() {
    const teamId = this.props.match.params.id;
    fetchTeamPlayers(teamId).then((players) => {
      this.setState({ players: players.data });
    });
  }

  render() {
    const teamId = this.props.match.params.id;
    const team = this.findTeam(teamId);

    if (team === undefined) {
      return (
        <div className="soccerTeamContainer">
          <div className="soccerTeamWait">
            <img
              src="https://media.giphy.com/media/qBYY1bBX10Y6I/giphy.gif"
              alt="loading spinner"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="soccerTeamContainer">
          <div className="socialMedia">
            <SocialMedia team={team} />
          </div>

          <div className="soccerTeamDetails">
            <TeamDetails team={team} />
          </div>

          <hr />

          <div className="teamShowPlayers">
            <div className="teamShowPlayerTeamName">
              <h2>
                {team.attributes.name}
                Players:
              </h2>
            </div>

            <div className="teamShowPlayerPhotos">
              {this.mapPlayersToPlayerThumb()}
            </div>
          </div>

          <hr />

          <div className="teamShowStadium">
            <TeamStadium team={team} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
  };
};

export default connect(mapStateToProps)(SoccerTeamShow);
