import { FETCH_START, FETCH_ERR, FETCH_BEER } from '../actions/beerAction';

const initialState={
   beers: {
      id: '',
      name: 'David',

   },
   isFetching: false,
   error: 'fuck this',
}

export function beersReducer (state = initialState, action) {
   switch (action.type){
      case FETCH_START:
         return ({
            ...state.beers,
            beers: action.payload,
            isFetching: true,
            error:'fetch-start'
         });
      case FETCH_BEER:
         return ({
            ...state,
            beers: [...state.beers, action.payload],
            isFetching:false,
            error: 'fetch-beer'
         });
      case FETCH_ERR:
         return({
            ...state,
            beers: [],
            isFetching: false,
            error: action.payload
         })
      default:
         return state;
   }
}

