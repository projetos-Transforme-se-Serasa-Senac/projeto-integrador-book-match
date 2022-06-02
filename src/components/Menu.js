import React from 'react';

import { Link } from "react-router-dom";

const Menu = () => {

    require ('./Menu.css')

    return ( 
        <header>
            <Link to="/" ><img className="logo" src="https://i.imgur.com/QcRjnUP.png" /></Link>

            <div className="pesquisar" >
                <input type="text"/><img className="lupa" src="https://i.imgur.com/rFe6FMK.png"/>
            </div>


            <a href="#"> <img class="perfil" src="https://i.imgur.com/o8Mx6B5.jpg"/></a>

            <div className='opcoesMenu'>
                <ul>
                    <li><Link to="/"> Cadastro Livros </Link></li>
                    <li><Link to="/"> Perfil </Link></li>
                    <li><Link to="/"> Emprestados </Link></li>
                </ul>             
            </div>


        </header>
     );
}
 
export default Menu;

// cadastrar livros, seu perfil (acessar o perfil) ,
 // Empréstimos (ver os livros que ela emprestou)

 //estamostrando == true ? visivel : invisivel