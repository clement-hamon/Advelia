import { combineReducers } from 'redux';
import request from './RequestReducer';

const rootReducer = combineReducers({
  request
});

export default rootReducer;