import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';
import { NavLink } from "react-router-dom";
import Perfil from '../Perfil/Perfil';

const Feed = () => {
    require ('./Feed.css')
    document.body.style.backgroundImage='none'
    const axios = require('axios');

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

    const [postagens, listaPostagens] = useState([])

    const id_seguidor = localStorage.getItem('id')


    useEffect(() => {

        buscaUsuario()

        axios.get('http://localhost:3001/feed/' + id_seguidor)
        .then(function(response){
            const dados = response.data;
            console.log(dados)
            listaPostagens(dados)
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])

    
    const [toogle, setToogle] = React.useState(true);
    const [cor, setCor] = React.useState('#c3c3c3');

    const curtir = (e) => {
        e.target.style.backgroundColor="red";
    }

    React.useEffect(() => {
        setCor((state) => toogle ? '#c3c3c3': '#02735E');
      }, [toogle]);


    return ( 
        <div id='feed'>


            <Menu/>
            <Navegacao/>

        
            <div className='containerFeed'>
                <div className='container-perfilFeed'>
                    <div className='miniPerfilFeed'>
                        <img className="perfil02Feed" src={`${usuario.img_perfil}`}/>
                        <div className='entraPerfilFeed'>
                            {/* <h6 className='nomeUsuarioFeed'></h6> */}

                            <p><NavLink className='nomeUsuarioFeed' to="/perfil"> {usuario.nome} </NavLink></p>

                            <p><span className='descricaoPerfilFeed'>{usuario.descricao}</span></p>
                        </div>
                    </div>
                    <div className='exploreFeed'>
                        <h6>Conheça Novos Usuários</h6>
                        <ol>
                            <li><i class="fa-solid fa-user-astronaut"></i>Vitória Costa</li>
                            <hr/>
                            <li><i class="fa-solid fa-user-injured"></i>Gabriela Maia</li>
                            <hr/>
                            <li><i class="fa-solid fa-user-ninja"></i>Isabela Maia</li>
                            <hr/>
                            <li><i class="fa-solid fa-user-nurse"></i> Micaela Silva </li>
                            <hr/>
                            <li><i class="fa-solid fa-user-nurse"></i> Nayara Zambrano </li>
                        </ol>
                    </div>
                </div>
                
                <div className='container-postFeed'>
                    {postagens.map(postagens => {
                    return(

                                    <div className='postFeed'>
                                        <div className='perfilUsuarioFeed'>
                                            <img className='fotoPerfilFeed' src={`${postagens.img_perfil}`}/>

                                            <span className='tituloFeed'>{postagens.user_name}</span>
                                            
                                            <div> 
                                                <h6>{postagens.titulo} - {postagens.autor} </h6>
                                                <label>{postagens.sinopse} </label>
                                            </div>
                                        </div>
                                    <img className='imagemPostFeed' src={`${postagens.imagem}`}/>    
                                        <div  onClick={e => curtir(e)} className='botoesFeed'>

                                            <button  className='btnFeed' > Curtir <i class="fa-solid fa-thumbs-up"  
                                            style={{backgroundColor:cor,}}>  </i></button>
                                            <p className='btn'>|</p>
                                            <button className='btn'>Comentar <i className="fa-solid fa-comment"></i></button>
                                            <p className='btn'>|</p>
                                            <button className='btn'>Compartilhar <i className="fa-solid fa-share"></i></button>
                                        </div>
                                    </div>
                            
                    )
                })}
                </div>
            
                

                <div className='comunidadesFeed'>
                        <h6 className='tituloFeed'>Conheça Novas Comunidades</h6>
                            <ol>
                                <li>Jogos Vorazes</li>
                            
                                <li>As meninas super-poderosas</li>
                            
                                <li>Harry Potter</li>
                                
                                <li>A culpa é das estrelas</li>
                            </ol>
                    <div className='squadFeed'>
                        <p>Squad Amazonas © 2022 </p>
                    </div>
                </div>


            </div>
           


        </div>

        
     );
}
 
export default Feed;