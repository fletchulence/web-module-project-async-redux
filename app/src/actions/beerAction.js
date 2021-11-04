import axios from 'axios';

export const getBeer = () =>{
   return(dispatch)=>{
      dispatch(fetchStart());
      axios.get('https://api.punkapi.com/v2/beers')
         .then(res=>{
            console.log(res.data)
            dispatch(fetchBeer(res.data))
         })
         .catch(err=>{
            dispatch(fetchError(err))
         })
   }
};

export const FETCH_START = 'FETCH_START';

export const fetchStart = (start) => ({
   type: FETCH_START, payload:start
});

export const FETCH_BEER = 'FETCH_BEER';

export const fetchBeer = (beers) =>({
   type: FETCH_BEER, payload:beers
})

export const FETCH_ERR = 'FETCH_ERR';

export const fetchError = (error) => ({
   type: FETCH_ERR, payload:error
});
