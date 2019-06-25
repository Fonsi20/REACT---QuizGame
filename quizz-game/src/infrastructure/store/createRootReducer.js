import { combineReducers } from 'redux';
import userReducer from 'infrastructure/reducers/user';

export default history =>
  combineReducers({
    user: userReducer,
  });
