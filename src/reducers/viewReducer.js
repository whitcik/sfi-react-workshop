import ActionTypes from '../constants/actionTypes';
import mailCategories from '../constants/mailCategories';

const initialState = {
  selectedCategory: mailCategories.INBOX
};

export default function viewReducer(store = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_MAIL_CATEGORY:
			return {
        ...store,
        selectedCategory: action.payload
      }
		default:
			return store;
	}
};
