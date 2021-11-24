import React from 'react'
import { useNavigate } from 'react-router-dom';

function Beer({ oneBeer }) {
   const navigate = useNavigate()
   // console.log(props)

   const openFoods=()=>{
      navigate(`foodpairs/${oneBeer.id}`)
      }

   return (
      <div>
         <p>{oneBeer.name}</p>
         <p>{oneBeer.id}</p>
         <p>{oneBeer.tagline}</p>
         <button onClick={openFoods}>see food pairing</button>
      </div>
   )
}

export default Beer

