import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Chat = () => {
    require ('./Chat.css')
    return ( 
        <div>
            <Menu/>
            <Navegacao/>
            <div className='containerChat'>

                <div className='conversas'>
                    <ul>
                        <li>
                            <img src='#'/>
                            <p>nome da pessoa</p>
                        </li>
                        <li>
                            <img src='#'/>
                            <p>nome da pessoa</p>
                        </li>
                        <li>
                            <img src='#'/>
                            <p>nome da pessoa</p>
                        </li>
                        <li>
                            <img src='#'/>
                            <p>nome da pessoa</p>
                        </li>
                    </ul>

                    
                </div>
                <div className='conversa'>
                    <div className='pessoa'>
                        <img src='https://i.imgur.com/EnVIUtr.png'/>
                        <p>Tiffany Silva</p>
                    </div>
                    <div className='enviarMensagem'>
                        <input type='text' placeholder='Mensagem'/>
                        <button>
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
                

            </div>
            
        </div>
     );
}
 
export default Chat;