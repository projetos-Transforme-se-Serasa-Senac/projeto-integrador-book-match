import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Forum = () => {
    require ('./Forum.css')
    document.body.style.backgroundImage='none'

    return ( 
        <div>

            <Menu/>
            <Navegacao/>
            <h1 className='TituloPagina'> Conheça novas comunidades </h1>

            <div>
                <p>square</p>
            </div>


        </div>

     );
}
 
export default Forum;