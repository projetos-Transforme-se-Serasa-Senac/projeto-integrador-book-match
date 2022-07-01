import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';
import { NavLink } from "react-router-dom";
// import Pedidos from '../../components/Pedidos/Pedidos';

const Perfil = () => {
    require ('./Perfil.css')
    document.body.style.backgroundImage='none'


    // livros , alteraLivros

    // buscaEmprestados
    // buscaSolicitacoes
    // ...

    


    // useEffect( () => buscaEmprestados(), [] )
    

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

 

                <div className='container-perfil'>
                    <div className='comunidadesParticipa'>
                    <h6 className='titulo'>conheça novas comunidades</h6>
                        <ol>
                            <li>Assembléia de Deus</li>
                        
                            <li>Chocolatras anonimos book</li>
                        
                            <li> Para todos os livros que ja amei</li>
                            
                            <li>A culpa é das estrelas e afins</li>
                        </ol>
                    </div>

                <div className='containerDireita'>

                    <div>
                        <div className='navegaçãoPerfil'>
                            {/* onClick={()=> buscaEmprestados() */}
                            <NavLink className='opcao' > Emprestados </NavLink>
                            
                            <NavLink  className='opcao'> Solicitações </NavLink>
                            
                            <NavLink  className='opcao'> Meus Pedidos </NavLink>
                        </div>
                    </div>
                    <div className='post'>
                        <div className='perfilUsuario'>

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
                </div>
                </div>
               
               
            </div>
           
        </div>
     );
}
 
export default Perfil;