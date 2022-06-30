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

    
    const [toogle, setToogle] = React.useState(true);
    const [cor, setCor] = React.useState('#c3c3c3');

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
                        <img className="perfil02Feed" src="https://i.imgur.com/o8Mx6B5.jpg"/>
                        <div className='entraPerfilFeed'>
                            <h6 className='nomeUsuarioFeed'>{postagens.user_name}</h6>
                            <span className='descricaoPerfilFeed'>Descrição de perfil</span>
                        </div>
                    </div>
                    <div className='exploreFeed'>
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
                    {postagens.map(postagens => {
                    return(

                            <div className='container-postFeed'>
                                    <div className='postFeed'>
                                        <div className='perfilUsuarioFeed'>
                                            <img className='fotoPerfilFeed' src=''/>

                                            <span className='tituloFeed'>{postagens.user_name}</span>
                                            
                                            <div> 
                                                <h6>Marina - Carlos Ruiz Zafon</h6>
                                                <label>*Resumo do livro* </label>
                                            </div>
                                        </div>
                                    <img className='imagemPostFeed' src={`${postagens.imagem}`}/>    
                                    <div className='botoesFeed'>

                                        <button  onClick={e => setToogle(state => !state)} className='btnFeed' > Curtir <i class="fa-solid fa-thumbs-up"  
                                        style={{backgroundColor:cor,}}>  </i></button>
                                        <p className='btnFeed'>|</p>
                                        <button className='btnFeed'>Comentar <i class="fa-solid fa-comment"></i></button>
                                        <p className='btnFeed'>|</p>
                                        <button className='btnFeed'>Compartilhar <i class="fa-solid fa-share"></i></button>
                                
                                    </div>
                                    </div>
                            </div> 
                    )
                })}
                </div>
            
                

                <div className='comunidadesFeed'>
                        <h6 className='tituloFeed'>conheça novas comunidades</h6>
                            <ol>
                                <li>Assembléia de Deus</li>
                            
                                <li>Chocolatras anonimos book</li>
                            
                                <li> Para todos os livros que ja amei</li>
                                
                                <li>A culpa é das estrelas e afins</li>
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