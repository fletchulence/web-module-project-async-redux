import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Beer from './Beer';

// import { fetchBeer } from '../actions/beerAction'

const Beers = (props) => {

   console.log('THESE ARE BEER"S PROPS', props)

   const handleClick=()=>{
      // e.preventDefault();
      // props.fetchBeer(newBeer())
   }

   return (
      <div>
            {props.beers.map((beer)=>{
               return (
                  <Beer oneBeer={beer}/>
               )
            })}
         
         <button onClick={handleClick}> yes please </button>
      </div>
   )
}

const mapStateToProps = (state) =>{
   return({
      beers: state.beers,
      isFetching: state.isFetching,
      error: state.error
   })
}

export default connect(mapStateToProps, null)(Beers)
