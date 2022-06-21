import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Perfil = () => {
    require ('./Perfil.css')
    return ( 
        <div>

            <Menu/>
            <Navegacao/>
            <h1> Perfil </h1>
            <div className='container'>
                <div className='perfilPrincipal'>
                    <img className='capaFundo' src='https://i.imgur.com/04Y0gAR.jpg'/>
                    <br/>
                    <img className='fotoPerfil' src='https://i.imgur.com/o8Mx6B5.jpg'/>
                    <div>                        
                        <h6 className='nomePerfil'>Catchusca Tchutchuca</h6>
                        <label className='infoPerfil'>Descrição textinho</label>
                        <br/>
                        <label className='cidadePerfil'>São Carlos-sp</label>

                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default Perfil;