import React from "react";
import axios from 'axios';

export default function getBeers(){
   axios.get(`https://api.punkapi.com/v2/beers`)
      .then(res=>{
         
      })
}