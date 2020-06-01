import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({loaded}) => {
    return (
        <ul className='navigation'>
          <li> <NavLink to="/" exact>Home</NavLink> </li>
          <li>{loaded? 
            <NavLink to="/PlaningPage">Planowanie</NavLink> : 
            <span style={{color:'grey'}}>Planowanie</span>} 
          </li>
          <li> <NavLink to="/AddProductPage">Dodaj Produkt</NavLink> </li>
      </ul>  
    );
}

export default Navigation;
