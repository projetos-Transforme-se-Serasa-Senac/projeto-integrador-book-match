import React from 'react';

import { NavLink } from "react-router-dom";


const Navegacao = () => {
    require ('./Navegacao.css')
    return ( 
        <nav>

            <NavLink to="/match"> Match </NavLink>  
            
            <NavLink to="/feed"> Feed </NavLink>
            
            <NavLink to="/comunidade"> Comunidade </NavLink>
            
            <NavLink to="/chat"> Chat </NavLink>
            
        </nav>
     );
}
 
export default Navegacao;