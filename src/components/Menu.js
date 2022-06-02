import React from 'react';

import { Link } from "react-router-dom";

const Menu = () => {

    const estaMostrando = () =>{}

    // const estaMostrando = () => {
    //     document.getElementsByClassName("modal")[0].style.display ="block"
    //      document.getElementsByClassName("fundoPreto")[0].style.display ="block"
    
    //     document.getElementById("inputTitulo").value ="";
    //     document.getElementById("inputTitulo").focus();    //focar no quadrado para clicar
    // }
    

    require ('./Menu.css')

    return ( 
        <header>
            <Link to="/" ><img className="logo" src="https://i.imgur.com/QcRjnUP.png" /></Link>

            <div className="pesquisar" >
                <input type="text"/><img className="lupa" src="https://i.imgur.com/rFe6FMK.png"/>
            </div>


            <a onClick={estaMostrando()} href="#"> <img className="perfil" src="https://i.imgur.com/o8Mx6B5.jpg"/>
            </a>

            <div className='opcoesMenu'>
                <ul>
                    <li><Link to="/"> Cadastro Livros </Link></li>
                    <hr/>
                    <li><Link to="/"> Perfil </Link></li>
                    <hr/>
                    <li><Link to="/"> Emprestados </Link></li>
                    <hr/>
                    <li> <Link to="/"> Sair </Link><img src='https://i.imgur.com/rUnPf2j.png'/> </li>
                </ul>             
            </div>


        </header>
     );
}
 
export default Menu;

// cadastrar livros, seu perfil (acessar o perfil) ,
 // Empréstimos (ver os livros que ela emprestou)

 //estamostrando == true ? visivel : invisivel