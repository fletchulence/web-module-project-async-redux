import axios from 'axios';

export const getFood = (beer) =>{
   return(dispatch)=>{
      dispatch(fetchStart());
      axios.get('https://api.punkapi.com/v2/beers')
         .then(res=>{
            dispatch(fetchFood(res.data.map((beer) => (beer.food_pairing))))
            // dispatch(fetchFood(res.data.forEach(getFoods.map((e)=> e))))
         })
         .catch(err=>{
            dispatch(fetchError(err))
            console.log('FOOD ERROR CASE SHOULD CALL')
         })
   }
};

export const FETCH_START = 'FETCH_START';
export function fetchStart() {
   return ({type: FETCH_START})
};

export const FETCH_FOOD = 'FETCH_FOOD';
export function fetchFood(food) {
   return ({type: FETCH_FOOD, payload: food})
}

export const FETCH_ERR = 'FETCH_ERR';
export function fetchError(error){
 return({type: FETCH_ERR, payload: error})  
};
