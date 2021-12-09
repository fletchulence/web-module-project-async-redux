import React from 'react'
import { useNavigate } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

function Beer({ oneBeer }) {
   const navigate = useNavigate()
   // console.log(props)

   const openFoods=()=>{
      navigate(`${oneBeer.id}/foodpairing`)
   }

   // const columns = [
   //    {field: 'id', headerName: 'ID', width: 90 },
   //    {
   //       field: 'name',
   //       headerName: 'Beer Name',
   //       width: 150,
   //       editable: false
   //    },
   //    {
   //       field: 'first_brewed',
   //       headerName: 'First Brewed',
   //       width: 150,
   //       sortable: true,
   //       editable: false
   //    },
   //    {
   //       field: 'abv',
   //       headerName: 'ABV %',
   //       width: 150,
   //       editable: false,
   //       sortable: true,
   //       description: 'ABV may differ on region',
   //       type: 'number'
   //    }
   // ]

   // const rows = Array.map(()=> {
   //    return ({
   //       id: oneBeer.id,
   //       name: oneBeer.name,
   //       first_brewed: oneBeer.first_brewed

   //    })
   // })

   return (
      <div>
         {/* <DataGrid
            columns={columns}
            rows = {rows}
         /> */}
         <p> { oneBeer.name } </p>
         <p> { oneBeer.id } </p>
         <p> { oneBeer.tagline } </p>
         <button onClick={openFoods}> see food pairings </button>
      </div>
   )
}

export default Beer

