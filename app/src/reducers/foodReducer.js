import { FETCH_START, FETCH_FOOD, FETCH_ERR } from '../actions/foodAction';

export const initialState={
   food: [],
   isFetching: false,
   error: '',
}

export const foodReducer = (state = initialState, action) =>{
   switch(action.type) {
      case FETCH_START:
         console.log('MY FETCH START IS HAPPENING')
         return {
            ...state,
            food: [],
            isFetching: true,
            error:''
         };
      case FETCH_FOOD:
         console.log(...state.food)
         return ({
            ...state,
            food: action.payload,
            isFetching:false,
            error: ''
         });
      case FETCH_ERR:
         console.log("my error is happening")
         return({
            ...state,
            food: '',
            isFetching: false,
            error: action.payload.message
         })
      default:
         return state;
   };
};


