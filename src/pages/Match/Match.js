import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Match = () => {
    return ( 
        <div>
            <Menu/>
            <Navegacao/>
            <h1> Match </h1>

            <div>
                <img src='https://i.imgur.com/6g4q4gh.png' width="250px"/> 
                <p> A menina que roubava livros </p>
            </div>

            <br/>
            <br/>

            <div>
                <button className='voltar'> Voltar </button>
                <button className='nãoCurtir'> Não curtir </button>
                <button data-testid="gamepadLike"className='curtir'> Curtir </button>
                <button className='seguir'> Seguir </button>
            </div>

        </div>
     );
}
 
export default Match;