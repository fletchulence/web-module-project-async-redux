import React from 'react';
import { connect } from 'react-redux';

import { getBeer } from '../actions/beerAction'

function Beer({beers, getBeer}) {
   console.log(beers)

   const handleClick=(id)=>{
      getBeer(id)
   }

   return (
      <div>
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
      beer: state.beer,
      error: state.error
   }
}

export default connect(mapStateToProps, { getBeer })(Beer)
