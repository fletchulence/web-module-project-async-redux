import { combineReducers } from 'redux';
// import { doggoReducer } from './doggosReducer'
import { beerReducer } from './beersReducer';

const rootReducer = combineReducers({
//   doggoReducer:doggoReducer,
  beerReducer,
});

export default rootReducer;
