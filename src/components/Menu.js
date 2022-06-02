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
            <Link to="/" className="logo"><img src="https://i.imgur.com/QcRjnUP.png" /></Link>

            <div className="pesquisar" >
                <input type="text"/><img className="lupa" src="https://i.imgur.com/rFe6FMK.png"/>
            </div>

            <div className="estaMostrando">

                <Link to="/"> Cadastro Livros </Link>
                <Link to="/"> Perfil </Link>
                <Link to="/"> Emprestados </Link>

            </div>

            <a onClick={estaMostrando()} href="#"> <img className="perfil" src="https://i.imgur.com/o8Mx6B5.jpg"/>
            </a>


        </header>
     );
}
 
export default Menu;

// cadastrar livros, seu perfil (acessar o perfil) ,
 // Empréstimos (ver os livros que ela emprestou)

 //estamostrando == true ? visivel : invisivel