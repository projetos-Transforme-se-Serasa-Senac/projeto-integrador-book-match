import React from 'react';

import { Link } from "react-router-dom";

const Menu = () => {

    require ('./Menu.css')

    return ( 
        <header>
            <Link to="/" className="logo"><img src="https://i.imgur.com/QcRjnUP.png" /></Link>

            <div className="pesquisar" >
                <input type="text"/><img className="lupa" src="https://i.imgur.com/rFe6FMK.png"/>
            </div>

            <div>

                <Link to="/"> Cadastro Livros </Link>
                <Link to="/"> Perfil </Link>
                <Link to="/"> Emprestados </Link>

            </div>


        </header>
     );
}
 
export default Menu;

// cadastrar livros, seu perfil (acessar o perfil) ,
 // Empréstimos (ver os livros que ela emprestou)