import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Publicacao = () => {
    require ('./Feed.css')
    document.body.style.backgroundImage='none'
    const axios = require('axios');

    const [postagens, listaPostagens] = useState([])

    const id_usuario = localStorage.getItem('id')


    useEffect(() => {

        axios.get('http://localhost:3001/publicacoes/' + id_usuario)
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
        
            <div className='containerFeed'>
                
                <div className='container-postFeed'>
                    {postagens.map(postagens => {
                    return(

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
                            
                    )
                })}
                </div>

            </div>
           


        </div>

        
     );
}
 
export default Publicacao;