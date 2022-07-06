import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';
import Comunidade from '../Comunidade/Comunidade';

const Forum = () => {
    require ('./Forum.css')
    document.body.style.backgroundImage='none'

    return ( 
        <div id='forum'>

            <Menu/>
            <Navegacao/>
            <h1 className='TituloPagina'> Bem vindo a comunidade das meninas super poderosas </h1>

            <div className='containerForum'>
                <div className='nomeDaComunidade'>
                    <img className='capaComunidade' src='https://i.imgur.com/6lB93nT.png'/>
                    <h3> As meninas super poderosas</h3>
                    <p>doutrinadores das meninas super poderosas </p>
                    <button>ENTRAR AGORA</button>
                </div>

                <div className='ladoDireito'>

                    <input className='publicaForum' placeholder='Faça uma publicação...'/>

                <div className='post'>
                    <div className='postNomeForum'>
                        <img src='https://i.imgur.com/ETnEWOp.png'/>
                        <p>ISABELA CORREIA</p>
                    </div>
                    <hr/>

                    <h3>Coincidências?</h3>
                    <p>Quando não estão combatendo vilões, Lindinha, Florzinha e Docinho frequentam o jardim-de-infância da Escola Carvalhinho, na cidade de Townsville. 
                        Esta é a mesma escola (e sala de aula) do personagem Dexter, de O Laboratório de Dexter. Além disso, 
                        o desenho Samurai Jack também se passa em uma espécie de Townsville, porém seria em uma versão pós-apocalíptica da cidade.</p>
                        <hr/>
                    <div className='botoesForum'>
                        <button className='botao'>curtir <i class="fa-solid fa-thumbs-up"></i></button>
                        <p>|</p>
                        <button className='botao'> comentar <i class="fa-solid fa-comment"></i></button>
                        <p>|</p>
                        <button className='botao'>salvar <i class="fa-solid fa-bookmark"></i> </button>
                    </div>

                </div>
                </div>

            </div>

        </div>

     );
}
 
export default Forum;