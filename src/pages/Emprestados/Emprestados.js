import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Emprestados = () => {

    const livros = [
        {
           nome: "Livro: A menina que roubava livros",
           autor: "Autor: Markus Zusak",
           devolucao: "Data de devolução: 07/05",
           pessoa: "Emprestou: Giulia",
           imagem: "https://i.imgur.com/xMs70Vl.png"
        },

        {
            nome: "O assassinato no expresso oriente",
            devolucao: "Data de devolução: 07/05",
            autor: "Autor: Agatha Christie",
            pessoa: "Emprestou: Giulia",
            imagem: "https://i.imgur.com/2E3nakQ.png" 
         },

         {
            nome: "Corte de espinhos e rosas",
            devolucao: "Data de devolução: 07/05",
            autor: "Autor: Sarah J. Maas",
            pessoa: "Emprestou: Giulia",
            imagem: "https://i.imgur.com/im9zDIr.jpg" 
         }
    ]

    return ( 
        <div>

            <Menu/>
            <Navegacao/>

            <h1> Livros Emprestados </h1>
            <br/>
            <br/>

            {
                livros.map( livros => {
                    return(

                        <div className = "livros">
                            <h3> { livros.nome } </h3>
                            <h5> {livros.autor} </h5>
                            <h5> {livros.pessoa} </h5>
                            <h5> {livros.devolucao} </h5>
                            <img src = {livros.imagem}  width = "250px"/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    )                 
                })
            }


        </div>
     );
}
 
export default Emprestados;