import { FETCH_START, FETCH_ERR, FETCH_BEER } from '../actions/beerAction';

const initialState={
   beer: {
      name:'',
      description:'',
      ingredients: {
         malt:[],
         hops:[],
         yeast: '',
      },
      food_pairing:[],
      contributed_by:''
   },
   error: '',
}

export function beersReducer (state = initialState, action) {
   switch (action.type){
      case FETCH_START:
         return {
            ...state,
            beer: action.payload,
            error:''
         };
      case FETCH_BEER:
         return {
            ...state,
            beer: [...state.beer, action.payload],
            error: ''
         };
      case FETCH_ERR:
         return{
            ...state,
            beer: '',
            error: action.payload
         }
      default:
         return state;
   }
}

