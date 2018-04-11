import actionTypes from '../constants/actionTypes';

export function setMailCategory(category) {
  return {
    type: actionTypes.SET_MAIL_CATEGORY,
    payload: category
  }
};