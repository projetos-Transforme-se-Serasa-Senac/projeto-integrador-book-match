import React from 'react';

import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div>
                {/* <div>
                    <img scr="#" LOGO/>
                </div> */}

            <div>

                <Link to="/"> Cadastro Livros </Link>
                <Link to="/"> Perfil </Link>
                <Link to="/"> Emprestados </Link>

            </div>


        </div>
     );
}
 
export default Menu;

// cadastrar livros, seu perfil (acessar o perfil) ,
 // Empréstimos (ver os livros que ela emprestou)