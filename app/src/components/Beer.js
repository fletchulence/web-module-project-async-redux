import React from 'react'
import { useNavigate } from 'react-router-dom';

function Beer(props) {
   const navigate = useNavigate()
   console.log(props)

   const openFoods=()=>{
      navigate(`foodpairs/${oneBeer.id}`)
      }

   const  { oneBeer } = props;
   return (
      <div>
         <p>{oneBeer.name}</p>
         <p>{oneBeer.id}</p>
         <p>{oneBeer.tagline}</p>
<button onClick={openFoods}></button>
      </div>
   )
}

export default Beer

