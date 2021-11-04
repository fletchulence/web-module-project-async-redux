import { combineReducers } from 'redux';
import { doggoReducer as doggo } from './doggosReducer'
import { beersReducer as beer } from './beersReducer';

export default combineReducers({
  doggo,
  beer,
});
