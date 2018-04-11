import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  view: viewReducer
});

export default rootReducer;