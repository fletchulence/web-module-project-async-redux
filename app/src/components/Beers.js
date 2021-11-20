import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Beer from './Beer';
import { Outlet } from 'react-router-dom';

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
                  <React.Fragment>
                     <Beer key={beer.id} oneBeer={beer}/>
                  </React.Fragment>
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
         <Outlet/>
      </div>
   )
}

const mapStateToProps = (state) =>{
   return({
      beers: state.beersReducer.beers,
      isFetching: state.beersReducer.isFetching,
      error: state.beersReducer.error
   })
}

export default connect(mapStateToProps, null)(Beers)
