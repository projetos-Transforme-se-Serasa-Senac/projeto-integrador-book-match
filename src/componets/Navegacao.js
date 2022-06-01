import React from 'react';

import { Link } from "react-router-dom";


const Navegacao = () => {
    require ('./css/Navegacao.css')
    return ( 
        <div>

            <Link to="/match"> Match </Link>  
            | 
            <Link to="/feed"> Feed </Link>
            |
            <Link to="/comunidade"> Comunidade </Link>
            | 
            <Link to="/chat"> Chat </Link>
            
        </div>
     );
}
 
export default Navegacao;