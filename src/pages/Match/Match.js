import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Match = () => {

    const match = [
        {
           imagem: "https://i.imgur.com/6g4q4gh.png",
           nome: "A menina que roubava livros",
           botaoVoltar: "Voltar",
           botaoNaoCurtir: " Não Curtir",
           botaoCurtir: "Curtir",
           botaoSeguir: "Seguir",
        },

        {
            imagem: "https://imgur.com/K8rWLXD.png",
            nome: "O assassinato no expresso oriente",
            botaoVoltar: "Voltar",
            botaoNaoCurtir: " Não Curtir",
            botaoCurtir: "Curtir",
            botaoSeguir: "Seguir",
         },

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
            <h1> Match </h1>

            {
                match.map( match => {
                    return(

                        <ul className = "match">
                            <li>
                                <img src= {match.imagem} width="200px" />
                                <h3> {match.nome} </h3>
                                <button> {match.botaoVoltar} </button>
                                <button> {match.botaoNaoCurtir} </button>
                                <button> {match.botaoCurtir} </button>
                                <button> {match.botaoSeguir} </button>
                                
                                <br/>
                                <br/>
                                <br/>
                            </li>
                        </ul>
                    )                 
                })
            }

        </div>
     );
}
 
export default Match;