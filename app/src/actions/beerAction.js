import axios from 'axios';

export const getBeers = () =>{
   return(dispatch)=>{
      dispatch(fetchStart());
      axios.get('https://api.punkapi.com/v2/beers')
         .then(res=>{
            dispatch(fetchBeer(res.data))
            // dispatch(fetchFood(res.data.forEach(getFoods.map((e)=> e))))
         })
         .catch(err=>{
            dispatch(fetchError(err))
            console.log('BEER ERROR CASE SHOULD CALL')
         })
   }
};

export const FETCH_START = 'FETCH_START';
export function fetchStart() {
   return ({type: FETCH_START})
};

export const FETCH_BEER = 'FETCH_BEER';
export function fetchBeer(beers) {
   return ({type: FETCH_BEER, payload: beers})
}

export const FETCH_ERR = 'FETCH_ERR';
export function fetchError(error){
 return({type: FETCH_ERR, payload: error})  
};
