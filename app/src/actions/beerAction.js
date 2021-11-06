import axios from 'axios';

export const getBeers = () =>{
   return(dispatch)=>{
      dispatch(fetchStart());
      axios.get('https://api.punkapi.com/v2/beers')
         .then(res=>{
            // console.log(res.data)
            dispatch(fetchSuccess(res.data))
         })
         .catch(err=>{
            dispatch(fetchError(err))
            console.log('FETCH ERROR CASE SHOULD CALL')
         })
   }
};

export const FETCH_START = 'FETCH_START';
export function fetchStart() {
   return ({type: FETCH_START})
};

export const FETCH_SUCCESS = 'FETCH_BEER';
export function fetchSuccess(beers) {
   return ({type: FETCH_SUCCESS, payload: beers})
}
export const FETCH_ERR = 'FETCH_ERR';
export function fetchError(error){
 return({type: FETCH_ERR, payload: error})  
};
