import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Perfil = () => {
    require ('./Perfil.css')
    document.body.style.backgroundImage='none'

    return ( 
        <div id='perfil'>

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
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="true" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a hrefName="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
     );
}
 
export default Perfil;