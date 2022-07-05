import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';
// import Publicacoes from '../Publicacoes/Publicacoes';
// import Pedidos from '../../components/Pedidos/Pedidos';

const Perfil = () => {
    require ('./Perfil.css')
    document.body.style.backgroundImage='none'


    // livros , alteraLivros

    // buscaEmprestados
    // buscaSolicitacoes
    // ...

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

    const [tipo, mudaTipo] = useState("solicitacoes")


    const buscaLivros = (tipo) => {
        const id_usuario = localStorage.getItem('id')

        // mudaTipo(tipo)

        const axios = require('axios');
    
        axios.get('http://localhost:3001/' + tipo + '/' + id_usuario)
        .then(function(response){
            const dados = response.data;
            console.log(dados)
            listaPostagens(dados)
        })
        .catch(function(error){
            console.log(error);
        })
    

    }


    useEffect( () => {
        buscaUsuario()
        buscaLivros('publicacoes')
    }, [] )
    

    return ( 
        <div id='perfil'>

            <Menu/>
            <Navegacao/>
            
            <h1> Perfil </h1>

            <div className='container'>
                <div className='perfilPrincipal'>
                    <img className='capaFundo' src={`${usuario.img_capa}`}/>
                    <br/>
                    <img className='fotoPerfil' src={`${usuario.img_perfil}`}/>
                    <div>                        
                        <h6 className='nomePerfil'>{usuario.nome}</h6>
                        <label className='infoPerfil'>{usuario.descricao}</label>
                        <br/>
                        <label className='cidadePerfil'>São Carlos - SP</label>

                    </div>
                </div>

                    <div className='container-perfil'>
                        <div className='comunidadesParticipa'>
                        <h6 className='titulo'>conheça novas comunidades</h6>
                            <ol>
                                <li>Assembléia de Deus</li>
                            
                                <li>Chocolatras anonimos book</li>
                            
                                <li> Para todos os livros que ja amei</li>
                                
                                <li>A culpa é das estrelas e afins</li>
                            </ol>
                        </div>

                    <div className='containerDireita'>

                    <div>
                    <div className='navegacaoPerfil'>

                        <button className='opcao' to="/publicacoes" onClick={() => buscaLivros('publicacoes')}> Publicações </button>
                    
                        <button className='opcao' to="/emprestados"  onClick={() => buscaLivros('emprestados')}> Emprestados  </button>                      

                        <button className='opcao' to="/pedidos"> Meus Pedidos </button>
                       
                        <button className='opcao' to="/solicitacoes" onClick={() => buscaLivros('solicitacoes')}> Solicitações </button>
                
                    </div>
                    </div>

                    </div>
                    {
                        postagens.map(post => {
                        return                        <div className='post'>
                            <div className='perfilUsuario'>

                                {post.usuario_pedinte &&
                                
                                
                                <div>
                                    <span className='titulo'>{post.usuario_pedinte}</span>
                                    <button>Aceitar</button>
                                    <button>Recusar</button>
                                </div>

                            
                            
                            }

                                
                                <div> 
                                    <h6>Marina - Carlos Ruiz Zafon</h6>
                                    <label>{post.sinopse}</label>
                                </div>
                            </div>
                            
                            <img className='imagemPost' src={`${post.imagem}`}/>
                            <div className='botoesFeed'>

                                <button className='btn'>Curtir <i className="fa-solid fa-thumbs-up"></i></button>
                                <p className='btn'>|</p>
                                <button className='btn'>Comentar <i className="fa-solid fa-comment"></i></button>
                                <p className='btn'>|</p>
                                <button className='btn'>Compartilhar <i className="fa-solid fa-share"></i></button>
                        
                            </div>
                            
                        </div>
                        })
                    }
                </div>
                </div>
               
               
            </div>
           
      
     );
}
 
export default Perfil;