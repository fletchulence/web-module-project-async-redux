import { FETCH_START, FETCH_ERR, FETCH_BEER } from '../actions/beerAction';

const initialState={
   beers: {
      name:'',
      // ingredients: {},
      // food_pairing:[],
      // contributed_by:''
   },
   error: '',
}

export function beerReducer (state = initialState, action) {
   switch (action.type){
      case FETCH_START:
         return {
            ...state,
            beers: action.payload,
            error:''
         };
      case FETCH_BEER:
         return {
            ...state,
            beers: [...state.beers, action.payload],
            error: ''
         };
      case FETCH_ERR:
         return{
            ...state,
            beers: {},
            error: action.payload
         }
      default:
         return state;
   }
}

