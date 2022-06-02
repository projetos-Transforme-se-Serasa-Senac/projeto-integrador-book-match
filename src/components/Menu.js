import React, { useState } from 'react';

import { Link } from "react-router-dom";

const Menu = () => {

    require ('./Menu.css')

    const [estaMostrando, mostraElemento] = useState(false)
    const mostrarOuOcultar = () => mostraElemento(!estaMostrando)

    return ( 
        <header>
            <Link to="/" ><img className="logo" src="https://i.imgur.com/QcRjnUP.png" /></Link>

            <div className="pesquisar" >
                <input type="text"/><img className="lupa" src="https://i.imgur.com/rFe6FMK.png"/>
            </div>

            <div> 
                <a onClick={mostrarOuOcultar} href="#"> <img className="perfil" src="https://i.imgur.com/o8Mx6B5.jpg"/> </a>
                {estaMostrando ? 

                <div className='opcoesMenu'>
                    <ul>
                        <li><Link to="/"> Cadastro Livros </Link></li>
                        <hr/>
                        <li><Link to="/"> Perfil </Link></li>
                        <hr/>
                        <li><Link to="/"> Emprestados </Link></li>
                        <hr/>
                        <li> <Link to="/"> Sair </Link> </li>
                    </ul>             
                </div>

                   : null
                }
            </div>


        </header>
     );
}
 
export default Menu;

// cadastrar livros, seu perfil (acessar o perfil) ,
 // Empréstimos (ver os livros que ela emprestou)
