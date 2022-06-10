import React from 'react';

import { NavLink } from "react-router-dom";


const Navegacao = () => {
    require ('./Navegacao.css')
    return ( 
        
        <nav>

            <NavLink to="/match"> Match  </NavLink>  
            <p>|</p>
            
            <NavLink to="/feed"> Feed </NavLink>
            <p>|</p>
            
            <NavLink to="/comunidade"> Comunidade </NavLink>
            <p>|</p>
            
            <NavLink to="/chat"> Chat </NavLink>
            
        </nav>
        
     );
}
 
export default Navegacao;