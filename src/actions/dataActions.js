import actionTypes from '../constants/actionTypes';

export function setMailData(data) {
  return {
    type: actionTypes.SET_MAIL_DATA,
    payload: data
  }
};

export function toggleRead(id) {
  return {
    type: actionTypes.TOGGLE_READ,
    payload: id
  }
}

export function markAsDelete(id) {
  return {
    type: actionTypes.DELETE_MAIL,
    payload: id
  }
}