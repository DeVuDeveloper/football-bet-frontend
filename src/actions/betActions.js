/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
const MAKE_NEW_BET = 'http://localhost:3001/api/v1/bets';

export const dispatchBet = (dispatch, betInfo) => {
  return dispatch({ type: 'BET_INFO', payload: betInfo });
};

export function makeBet(dispatch, token, amount, odds, gameID, betType) {
  return fetch(MAKE_NEW_BET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      bet: {
        amount: amount,
        odds: odds,
        game: gameID,
        bet_type: betType,
      },
    }),
  })
    .then((resp) => resp.json())
    .then((user) => {
      return dispatch({
        type: 'CURRENT_USER',
        payload: user.data,
      });
    });
}
