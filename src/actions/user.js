/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-else-return */
/* eslint-disable func-names */

const CREATE_ACCT = 'http://localhost:3001/api/v1/signup';
const LOGIN_USER = 'http://localhost:3001/api/v1/login';
const AUTO_LOGIN = 'http://localhost:3001/api/v1/auto_login';
const GAMES_API = 'http://localhost:3001/api/v1/games';

export const login = async (dispatch, email, password, callback) => {
  const res = await fetch(LOGIN_USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const user = await res.json();
  if (user.errors) {
    alert(user.errors);
  } else {
    localStorage.setItem('token', user.token);
    dispatch({
      type: 'USER_TOKEN',
      payload: user.token,
    });
    dispatch({
      type: 'CURRENT_USER',
      payload: user.user.data,
    });
    callback && callback();
  }
};

export const signup = async (
  dispatch,
  firstname,
  lastname,
  email,
  password,
  callback,
) => {
  const res = await fetch(CREATE_ACCT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
    }),
  });
  const newUser = await res.json();
  if (newUser.errors) {
    alert(newUser.errors);
  } else {
    localStorage.setItem('token', newUser.token);
    dispatch({
      type: 'USER_TOKEN',
      payload: newUser.token,
    });

    dispatch({
      type: 'CURRENT_USER',
      payload: newUser.user.data,
    });
    callback && callback();
  }
};

export const autoLogin = async (dispatch, token) => {
  const res = await fetch(AUTO_LOGIN, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  });
  const user = await res.json();
  dispatch({
    type: 'USER_TOKEN',
    payload: token,
  });
  dispatch({ type: 'CURRENT_USER', payload: user.data });
};

export const fetchGames = async (dispatch) => {
  const res = await fetch(GAMES_API);
  const games = await res.json();
  const sortedGames = games.data.sort(function (a, b) {
    if (a.attributes.match_date > b.attributes.match_date) {
      return 1;
    } else if (a.attributes.match_date < b.attributes.match_date) {
      return -1;
    }
    return 0;
  });
  return dispatch({ type: 'UPDATE_GAMES', payload: sortedGames });
};
