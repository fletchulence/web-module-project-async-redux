// import React, {}
import React, { useEffect } from 'react';
import './App.css';
import Beers from './components/Beers';

import { connect } from 'react-redux';
import { getBeers } from './actions/beerAction'

function App(props) {
  console.log(props)

  useEffect(()=>{
        props.getBeers();
     }, [props]);
 
  return (
    <div className="App">
      Hello World
      <Beers />
    </div>
  );
}

export default connect(null, { getBeers } )(App);
