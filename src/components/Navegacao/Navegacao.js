import React from 'react';

import { NavLink } from "react-router-dom";


const Navegacao = () => {
    require ('./Navegacao.css')
    return ( 
        <div id='navegacao'>
        <nav>

            <NavLink to="/match"><i className="fa-solid fa-heart-circle-check"/> Procurar Livros  </NavLink>  
            <p>|</p>
            
            <NavLink to="/feed"><i className="fa-solid fa-mobile-screen-button"/> Feed </NavLink>
            <p>|</p>
            
            <NavLink to="/comunidade"><i className="fa-solid fa-people-roof"/> Comunidade </NavLink>
            <p>|</p>
            
            <NavLink to="/perfil"> <i className="fa-solid fa-comments"/>Perfil </NavLink>
            
            
        </nav>
        {/* <hr/> */}
        </div>
        
     );
}
 
export default Navegacao;