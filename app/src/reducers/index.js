import { combineReducers } from 'redux';
// import { doggoReducer } from './doggosReducer'
import { beersReducer } from './beersReducer';

const rootReducer = combineReducers({
//   doggoReducer:doggoReducer,
  beersReducer,
});

export default rootReducer;
