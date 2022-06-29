import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Feed = () => {
    require ('./Feed.css')
    document.body.style.backgroundImage='none'
    const axios = require('axios');

    const [postagens, listaPostagens] = useState([])

    const id_seguidor = localStorage.getItem('id')


    useEffect(() => {

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

    return ( 
        <div id='feed'>

            <Menu/>
            <Navegacao/>

        
        <div className='container'>
            <div className='container-perfil'>
                <div className='miniPerfil'>
                    <img className="perfil02" src="https://i.imgur.com/o8Mx6B5.jpg"/>
                    <div className='entraPerfil'>
                        <h6 className='nomeUsuario'>{postagens.user_name}</h6>
                        <span className='descricaoPerfil'>Descrição de perfil</span>
                    </div>
                </div>
                <div className='explore'>
                    <h6>conheça novos usuarios</h6>
                    <ol>
                        <li><i class="fa-solid fa-user-astronaut"></i>Sergio Berranteiro</li>
                        <hr/>
                        <li><i class="fa-solid fa-user-injured"></i>Marcia sensitiva</li>
                        <hr/>
                        <li><i class="fa-solid fa-user-ninja"></i> sla mais quem</li>
                        <hr/>
                        <li><i class="fa-solid fa-user-nurse"></i> Outra Pessoa aqui</li>
                    </ol>
                </div>
            </div>
           
            {postagens.map(postagens => {
                return(
                <div className='container-post'>

                    <div className='post'>
                        <div className='perfilUsuario'>
                            <img className='fotoPerfil' src=''/>

                            <span className='titulo'>{postagens.user_name}</span>
                            
                            <div> 
                                <h6>Marina - Carlos Ruiz Zafon</h6>
                                <label>*Resumo do livro* </label>
                            </div>
                        </div>
                        
                        <img className='imagemPost' src={`"${postagens.imagem}"`}/>
                        <div className='botoesFeed'>

                            <button className='btn'>Curtir <i class="fa-solid fa-thumbs-up"></i></button>
                            <p className='btn'>|</p>
                            <button className='btn'>Comentar <i class="fa-solid fa-comment"></i></button>
                            <p className='btn'>|</p>
                            <button className='btn'>Compartilhar <i class="fa-solid fa-share"></i></button>
                    
                        </div>
                        
                    </div>

                </div>
                )
            })}

            <div className='comunidades'>
                    <h6 className='titulo'>conheça novas comunidades</h6>
                        <ol>
                            <li>Assembléia de Deus</li>
                        
                            <li>Chocolatras anonimos book</li>
                        
                            <li> Para todos os livros que ja amei</li>
                            
                            <li>A culpa é das estrelas e afins</li>
                        </ol>
                <div className='squad'>
                    <p>Squad Amazonas © 2022 </p>
                </div>
            </div>


        </div>

        </div>
     );
}
 
export default Feed;