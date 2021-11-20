import React from 'react'

function Beer(props) {
   console.log(props)
   const  { oneBeer } = props;
   return (
      <div>
         <p>{oneBeer.name}</p>
         <p>{oneBeer.id}</p>
         <p>{oneBeer.tagline}</p>
      </div>
   )
}

export default Beer
