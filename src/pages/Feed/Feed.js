import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Feed = () => {
    require ('./Feed.css')

    return ( 
        <div id='feed'>

            <Menu/>
            <Navegacao/>
        <div className='container'>
            <div className='miniPerfil'>
                <img className="perfil02" src="https://i.imgur.com/o8Mx6B5.jpg"/>
                <div className='entraPerfil'>
                    <h6 className='nomeUsuario'>Catchusca chuchuca</h6>
                    <span className='descricaoPerfil'>Descrição de perfil</span>
                </div>
            </div>

            <div className='post'>
                <div className='perfilUsuario'>
                    <img className='fotoPerfil' src='https://i.imgur.com/95jo9qd.jpg'/>

                    <span className='titulo'>Fulaninha de tal</span>
                    
                    <div> 
                        <h6>Marina - Carlos Ruiz Zafon</h6>
                        <label>*Resumo do livro* </label>
                    </div>
                </div>
                
                <img className='imagemPost' src='https://cdn.culturagenial.com/imagens/dicas-livros-og.jpg'/>
                <div className='botoesFeed'>

                    <button className='btn'>Curtir <i class="fa-solid fa-thumbs-up"></i></button>
                    <p className='btn'>|</p>
                    <button className='btn'>Comentar <i class="fa-solid fa-comment"></i></button>
                    <p className='btn'>|</p>
                    <button className='btn'>Compartilhar <i class="fa-solid fa-share"></i></button>
               
                </div>
            </div>
            

            <div className='explore'>

                <h6>conheça novos usuarios</h6>
                <ol>
                    <li>Sergio Berranteiro</li>
                    <li>Marcia sensitiva</li>
                    <li>sla mais quem</li>
                    <li>Outra Pessoa aqui</li>
                </ol>
            
            </div>
        </div>

        </div>
     );
}
 
export default Feed;