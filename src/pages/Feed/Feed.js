import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Feed = () => {
    require ('./Feed.css')

    return ( 
        <div>

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
                </div>
                
                <img className='imagemPost' src='https://i.imgur.com/p9Up9YK.jpg'/>
                <div> 
                    <h6>Marina - Carlos Ruiz Zafon</h6>
                    <label>Lorem ipsum etiam scelerisque odio ut mattis scelerisque, non aptent adipiscing in ipsum vitae,
                            dapibus per erat faucibus urna eget. 
                            velit sodales senectus diam quis enim magna non, maecenas rhoncus
                            accumsan vivamus odio vivamus, cubilia litora inceptos sem potenti aptent. </label>
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