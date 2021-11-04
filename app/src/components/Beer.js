import React from 'react';
import { connect } from 'react-redux';

import { getBeer } from '../actions/beerAction'

function Beer(props) {
   console.log(props.beer)

   const handleClick=(id)=>{
      props.getBeer(id)
   }

   return (
      <div>
         would you like a beer?
         <button onClick={handleClick}> yes please </button>
         {props.beer.beer &&
         props.beer.map((beers, index)=>(
            <h2 key={index}>
               {beers.name}
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
