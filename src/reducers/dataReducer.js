import ActionTypes from '../constants/actionTypes';
import MailCategories from '../constants/mailCategories';
import { setIn } from '../utils/immutable-set';

export default function dataReducer(store = {}, action) {
	switch (action.type) {
		case ActionTypes.SET_MAIL_DATA:
			return action.payload;
		case ActionTypes.TOGGLE_READ:
			return setIn(store, [action.payload, 'read'], !store[action.payload].read);
		case ActionTypes.DELETE_MAIL:
			return setIn(store, [action.payload, 'category'], MailCategories.DELETED);
		default:
			return store;
	}
};
