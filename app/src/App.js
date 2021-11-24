// import React, {}
import React from 'react';
import './App.css';
import Beers from './components/Beers';
import FoodPairs from './components/FoodPairs';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { getBeers } from './actions/beerAction';

function App(props) {
  const navigate = useNavigate()
  // console.log(props)

  
  
  // useEffect(()=>{
  //   props.getBeers();
  // }, [props]);
  
  const handleClick =()=>{
      navigate('/beers')
   }
 
  return (
    <div className="App">
      <Header/>
      Hello World
      <button onClick={handleClick}> Beers! </button>
      <Routes>
        <Route path='beers' element={<Beers/>}>
          <Route path='foodpairs/:id' element={<FoodPairs/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
