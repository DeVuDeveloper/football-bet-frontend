/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
const ADD_TO_BALANCE = 'http://localhost:3001/api/v1/accounts/';

const increaseBalance = (dispatch, id, amount, token) => {
  return fetch(ADD_TO_BALANCE + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      account: {
        amount: amount,
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
};
export default increaseBalance;
