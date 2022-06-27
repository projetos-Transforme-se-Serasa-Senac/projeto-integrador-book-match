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
                    <input type='text' placeholder='Mensagem'>
                </input>
                </div>
                

            </div>
            
        </div>
     );
}
 
export default Chat;