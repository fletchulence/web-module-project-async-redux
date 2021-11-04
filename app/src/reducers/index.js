import { combineReducers } from 'redux';
// import { doggoReducer } from './doggosReducer'
import { beersReducer as beers } from './beersReducer';

const rootReducer = combineReducers({
//   doggoReducer:doggoReducer,
  beers,
});

export default rootReducer;
