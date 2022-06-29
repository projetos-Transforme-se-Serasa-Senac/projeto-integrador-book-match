import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Menu = () => {

    require('./Menu.css')

    const [estaMostrando, mostraElemento] = useState(false)
    const mostrarOuOcultar = () => mostraElemento(!estaMostrando)

    const [mostraMenu, alteraMostrarMenu] = useState(true)

    return ( 
        <header id='menu'>
            <Link to="/match" ><img className="logo" src="https://i.imgur.com/QcRjnUP.png" /></Link>

            <div className="pesquisar" >

                <div className='inputDiv'>
                    <input className="input" placeholder='Pesquise um livro...' type="search"/>
                </div>
                <div className='imgDiv'>
                    <button className='lupa' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

            </div>
        
            <div> 
                <a onClick={mostrarOuOcultar} href="#"> <img className="perfil" src="https://i.imgur.com/o8Mx6B5.jpg"/> </a>
                {estaMostrando ? 

                <div className='opcoesMenu'>
                    <ul>
                        <li><Link to="/cadastroLivros"> Cadastro Livros </Link></li>
                        <hr/>
                        <li><Link to="/perfil"> Perfil </Link></li>
                        <hr/>
                        <li><Link to="/emprestados"> Emprestados </Link></li>
                        <hr/>
                        <li> <Link to="/"> Sair </Link> <img src='https://i.imgur.com/rUnPf2j.png'/> </li>
                    </ul>             
                </div>

                   : null
                }
            </div> 


        </header>
     );
}
 
export default Menu;
