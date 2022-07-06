import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';
import Forum from '../Forum/Forum';

const Comunidade = () => {
    require ('./Comunidade.css')
    document.body.style.backgroundImage='none'

    return ( 
        <div>

            <Menu/>
            <Navegacao/>
           

            {/* <div className='containerComunidade'> */}

            {/* <div className="second cardComunidade">
                    <img className="card-perfil-img" src="https://i.imgur.com/xRhb5Hv.png" alt=""/>
                    <div className="card-descricao-bk"></div>
                    <div className="card-logo">
                        <img src="https://i.imgur.com/dqhahZC.png" alt=""/>
                    </div>
                    <div className="card-descricao">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div  className="card-data">
                        <p>20.02.2019</p>
                    </div>
                    <div className="card-btn">
                        <a href="#">Entrar</a>
                    </div>
                </div>              */}

            <div className='container'>

                <h1 className='TituloPagina'> Conheça novas comunidades </h1>
                <div class="wrapper">
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/unndAEa.png'/>
                            <div class="descriptions">
                                <h1>Fãs de Jogos Vorazes</h1>
                                <p>
                                Descrição - Depois da inusitada vitória de Katniss e Peeta nos últimos Jogos Vorazes, algo parece ter 
                                mudado em Panem. 
                                Aqui e ali, distúrbios e agitações nos distritos dão sinais de que uma revolta é iminente.
                                </p>
                                <div className='voltar'>
                                    <a href='Forum' className='voltarLink'> <i class="fa-solid fa-arrow-left"></i> entrar</a>
                                </div>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/uVURdSv.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis. </p>
                                <div className='voltar'>
                                    <a href='Forum2' className='voltarLink'> <i class="fa-solid fa-arrow-left"></i> entrar</a>
                                </div>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/0QwVGDr.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis. </p>
                                <div className='voltar'>
                                    <a href='Forum3' className='voltarLink'> <i class="fa-solid fa-arrow-left"></i> entrar</a>
                                </div>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/Ps5a7Dp.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis. </p>
                                <button>
                                    entrar
                                </button>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/cMr9Fkw.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis. </p>
                                <button>
                                    entrar
                                </button>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/LHCYJeh.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis.
                                </p>
                                <button>
                                    entrar
                                </button>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/9g417x9.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis. </p>
                                <button>
                                    entrar
                                </button>
                            </div>
                        </div>
                        <div class="cardComunidade">
                            <img src='https://i.imgur.com/EnVIUtr.png'/>
                            <div class="descriptions">
                                <h1>Lorem</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui nec magna semper aliquet. Nunc ullamcorper eleifend mattis. Duis. </p>
                                <button>
                                    entrar
                                </button>
                            </div>
                        </div>
                    </div>
            </div>

             
            

        {/* </div> */}

        </div>

     );
}
 
export default Comunidade;