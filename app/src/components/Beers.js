import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import { fetchBeer } from '../actions/beerAction'
import { DataGrid } from '@mui/x-data-grid';


import { connect } from 'react-redux';
import { getBeers } from './../actions/beerAction';

import Beer from './Beer';


const Beers = ({ getBeers, beers, isFetching, error }) => {

   useEffect(()=>{
         //use this to make the beers render on MOUNT
         getBeers();
   }, [])

   if (isFetching){
      return <h2> we are fetching </h2>
   }
   if (error){
      return <h2> we are getting an error: {error}</h2>
   }

   console.log('THESE ARE BEER"S PROPS', beers)

   const handleClick=()=>{
      // e.preventDefault();
      // props.fetchBeer(newBeer())
      // this is my click for getting the beer matches
   }

   // Submit form for the find to meet the 
   const handleSubmit =()=>{
      //i want to have a find here. I want people to be able to search for the types they want here.\
      //yet idk how i would filter with there not being much of a name or type
   }

   const columns = [
      {field: 'id', headerName: 'ID', width: 90 },
      {
         field: 'name',
         headerName: 'Beer Name',
         width: 400,
         editable: false
      },
      {
         field: 'first_brewed',
         headerName: 'First Brewed',
         width: 150,
         sortable: true,
         editable: true
      },
      {
         field: 'abv',
         headerName: 'ABV %',
         width: 150,
         editable: false,
         sortable: true,
         description: 'ABV may differ on region',
         type: 'number'
      }
   ]

   const rows = beers.map((beer)=> {
      return ({
         id: beer.id,
         name: beer.name,
         first_brewed: beer.first_brewed,
         abv: beer.abv
      })
   })
   console.log(rows)
   
   return (
      <div style={{ height: 670, width: '100%' }}>
         <DataGrid
            columns={columns}
            rows = {rows}
            pageSize = {5}
            checkboxSelection
         />

         {/* 
         i think this should be taking the right props though... 
         honestly not sure anymore
          */}
            {/* {
            beers.map((beer)=>{
               return (
                  <React.Fragment>
                     <Beer key={beer.id} oneBeer={beer}/>
                  </React.Fragment>
               )
            })
            } */}


            {/* <form onSubmit={handleSubmit}>
               <label>
                  <input
                     type='text'
                  />
               </label>
            </form>
         
         <button onClick={handleClick}> yes please </button> */}
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

export default connect(mapStateToProps, { getBeers })(Beers)
