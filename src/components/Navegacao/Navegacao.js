import React from 'react';

import { NavLink } from "react-router-dom";


const Navegacao = () => {
    require ('./Navegacao.css')
    return ( 
        <div id='navegacao'>
        <nav>

            <NavLink to="/match"> Match  </NavLink>  
            <p>|</p>
            
            <NavLink to="/feed"> Feed <i class="fa-solid fa-mobile-screen-button"></i></NavLink>
            <p>|</p>
            
            <NavLink to="/comunidade"> Comunidade <i class="fa-solid fa-people-roof"></i></NavLink>
            <p>|</p>
            
            <NavLink to="/chat"> Chat <i class="fa-solid fa-comments"></i></NavLink>
            
            
        </nav>
        <hr/>
        </div>
        
     );
}
 
export default Navegacao;