import { combineReducers } from 'redux';
// import { doggoReducer } from './doggosReducer'
import { beersReducer } from './beersReducer';
import { foodReducer } from './foodReducer'

export default combineReducers({
  beersReducer,
  foodReducer,
});

