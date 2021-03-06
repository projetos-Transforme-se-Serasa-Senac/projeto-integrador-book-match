import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Menu = () => {

    require('./Menu.css')

    const [estaMostrando, mostraElemento] = useState(false)
    const mostrarOuOcultar = () => mostraElemento(!estaMostrando)

    const [mostraMenu, alteraMostrarMenu] = useState(true)

    const [usuario, listaUsuario] = useState({})

    const buscaUsuario = () => {
        const id_usuario = localStorage.getItem('id')

        const axios = require('axios');
        axios.get('http://localhost:3001/perfil/' + id_usuario)
        .then(function(response){
            const dados = response.data;
            console.log(dados)
            listaUsuario(dados[0])
        
        })
        .catch(function(error){
            console.log(error);
        })
    }

    useEffect( () => {
        buscaUsuario()

    }, [] )



    // modal.addEventListener('click', function(e) {
    //     if (e.target == this) fecha();
    //   });

    // var modal = document.getElementById('modal');
    //     modal.addEventListener('click', function(e) {
    //     if (e.target == this) fecha();
    //     });

    //     function abre() {
    //         modal.style.display = 'block';
    //       }
        
    //     function fecha() {
    //         modal.style.display = 'none';
    //       }



    return ( 
        <header id='menu'>
            <Link to="/match" ><img className="logo" src="https://i.imgur.com/TL1ZPXS.png" /></Link>

            <div className="pesquisar" >

                <div className='inputDiv'>
                    <input className="input" placeholder='Pesquise um livro...' type="search"/>
                </div>
                <div className='imgDiv'>
                    <button className='lupa' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

            </div>
        
            <div> 
                <a onClick={mostrarOuOcultar} href="#"> <img className="perfil" src={`${usuario.img_perfil}`}/>  </a>
                {/* <div id="modal" onblur="fecha()"></div> */}
                {estaMostrando ? 

                <div className='opcoesMenu'>
                    <ul>
                         <li><Link to="/cadastroLivros"> Cadastrar Livros </Link></li>
                        <hr/> 
                        {/* <li><Link to="/perfil"> Perfil </Link></li>
                        <hr/>
                        <li><Link to="/emprestados"> Emprestados </Link></li>
                        <hr/> */} 
                        <li><Link to="/"> Sair </Link> <img src='https://i.imgur.com/rUnPf2j.png'/> </li>
                    </ul>             
                </div>

                   : null
                }
            </div> 


        </header>
     );
}
 
export default Menu;
