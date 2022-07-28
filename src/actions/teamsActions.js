/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */
const TEAMS_API = 'http://localhost:3001/api/v1/teams';
const TEAM_PLAYERS = 'http://localhost:3001/api/v1/team_players';
const PLAYER = 'http://localhost:3001/api/v1/players/';

export const fetchTeams = async (dispatch) => {
  const res = await fetch(TEAMS_API);
  const teams = await res.json();
  return dispatch({ type: 'UPDATE_TEAMS', payload: teams.data });
};

export const fetchTeamPlayers = async (teamID) => {
  const res = await fetch(TEAM_PLAYERS, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      teamId: teamID,
    },
  });
  return await res.json();
};

export const fetchPlayerInfo = async (playerID) => {
  const res = await fetch(PLAYER + playerID, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      playerId: playerID,
    },
  });
  return await res.json();
};
