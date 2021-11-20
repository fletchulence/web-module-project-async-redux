import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Beer from './Beer';

// import { fetchBeer } from '../actions/beerAction'

const Beers = (props) => {

   useEffect(()=>{
         //use this to make the beers render on MOUNT
   }, [])

   console.log('THESE ARE BEER"S PROPS', props)

   const handleClick=()=>{
      // e.preventDefault();
      // props.fetchBeer(newBeer())
   }

   // Submit form for the find to meet the 
   const handleSubmit =()=>{

   }

   return (
      <div>
         {/* 
         i think this should be taking the right props though... 
         honestly not sure anymore
          */}
            {props.beers.map((beer)=>{
               return (
                  <Beer key={beer.id} oneBeer={beer}/>
               )
            })}
            <form onSubmit={handleSubmit}>
               <label>
                  <input
                     type='text'
                  />
               </label>
            </form>
         
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
