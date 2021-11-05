import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBeer } from '../actions/beerAction'

const Beer = (props) => {

   console.log(props.beers)
   console.log(props.isFetching)

   //  useEffect((e)=>{
   //     getBeer(e);
   //  }, []);
    

   const handleClick=()=>{
      props.dispatch(getBeer())
   }

   return (
      <div>
         <h1>empty</h1>
         would you like a beer?
         <button onClick={handleClick}> yes please </button>
         {props.beers &&
         props.beers.map((beer, index)=>(
            <h2 key={index}>
               {beer.name}
            </h2>
         ))
         }
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

export default connect(mapStateToProps, { getBeer })(Beer)
