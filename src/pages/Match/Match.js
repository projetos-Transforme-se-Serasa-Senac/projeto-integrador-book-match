import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Match = () => {
    require ('./Match.css')

    
        const match = [
            {
            imagem: "https://i.imgur.com/ce3M15R.jpg",
            nome: "A menina que roubava livros",
            botaoVoltar: "Voltar",
            botaoNaoCurtir: " Não Curtir",
            botaoCurtir: "Curtir",
            botaoSeguir: "Seguir",
            },

            // {
            //     imagem: "https://imgur.com/K8rWLXD.png",
            //     nome: "O assassinato no expresso oriente",
            //     botaoVoltar: "Voltar",
            //     botaoNaoCurtir: " Não Curtir",
            //     botaoCurtir: "Curtir",
            //     botaoSeguir: "Seguir",
            // },

            {
                imagem: "https://imgur.com/gIH07su.png",
                nome: "Corte de espinhos e rosas",
                botaoVoltar: "Voltar",
                botaoNaoCurtir: "Não Curtir",
                botaoCurtir: "Curtir",
                botaoSeguir: "Seguir",
            }
        ]


        return ( 
            <div>
                <Menu/>
                <Navegacao/>

                {
                    match.map( match => {
                        return(
                    

                    <div className='container'>
   
                        <div className="card  animate__rotateOutUpLeft" >  
                            <img src={match.imagem}  className="img"/>                               
                            <div className='txt'>
                                <h3 className='txt1'> {match.nome} </h3>  
                                <h6 className='txt2'>*descrição do livro*</h6>
                            </div>                             
                                <div className='botoes'>   
                                    <button><img className='opcao' src='https://i.imgur.com/fg5bBZm.png'/> </button>
                                    <button> <img className='coracao' src='https://i.imgur.com/0CRVby7.png'/> </button>
                                    <button> <img className='opcao' src='https://i.imgur.com/j78bsOe.png'/> </button>  
                                </div>
                         </div>
                    </div>     

                    //      <div className="card">
                    //         <ul className = "match">
                    //             <li>
                    //                 <img src= {match.imagem} width="200px" />
                    //                 <h3> {match.nome} </h3>
                    //                 <button> {match.botaoVoltar} </button>
                    //                 <button> {match.botaoNaoCurtir} </button>
                    //                 <button> {match.botaoCurtir} </button>
                    //                 <button> {match.botaoSeguir} </button>
                                    
                    //                 <br/>
                    //                 <br/>
                    //                 <br/>
                    //             </li>
                    //         </ul>
                    // </div> 
                        )       
                             
                    })
                }

            </div>
      
     );
}
 
export default Match;