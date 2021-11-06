import { FETCH_START, FETCH_SUCCESS, FETCH_ERR } from '../actions/beerAction';

export const initialState={
   beers: [],
   isFetching: false,
   error: '',
}

const beersReducer = (state = initialState, action) =>{
   switch(action.type) {
      case FETCH_START:
         console.log('MY FETCH START IS HAPPENING')
         return {
            ...state,
            beers: [],
            isFetching: true,
            error:''
         };
      case FETCH_SUCCESS:
         console.log(...state.beers)
         return ({
            ...state,
            beers: action.payload,
            isFetching:false,
            error: ''
         });
      case FETCH_ERR:
         console.log("my error is happening")
         return({
            ...state,
            beers: '',
            isFetching: false,
            error: action.payload
         })
      default:
         return state;
   };
};

export default beersReducer;

