import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
   return (
      <div>
         <nav>
            <Link to='/'> Home </Link>
            <Link to='beers'> Beers </Link>
            <Link to='foodpairs'> Foods </Link>
         </nav>
      </div>
   )
}
