import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBeer } from '../actions/beerAction'

const Beer = ({beers, getBeer}) => {

   // useEffect(()=>{
   //    getBeer(beers);
   // }, []);

   const handleClick=(beers)=>{
      getBeer(beers)
   }

   return (
      <div>
         <h1>empty</h1>
         would you like a beer?
         <button onClick={handleClick}> yes please </button>
         {beers &&
         beers.map((beer, index)=>(
            <h2 key={index}>
               {beer.name}
            </h2>
         ))
         }
      </div>
   )
}

const mapStateToProps = (state) =>{
   return{
      beers: state.beerReducer,
      isFetching: state.isFetching,
      error: state.error
   }
}

export default connect(mapStateToProps, { getBeer })(Beer)
