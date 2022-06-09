import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Emprestados = () => {

    const livros = [
        {
           nome: "A menina que roubava livros",
           autor: "Autor: Markus Zusak",
           eprestimo: "Data de empréstimo: 01/05",
           devolucao: "Data de devolução: 15/05",
           pessoa: "Emprestou: Giulia"
        },

        {
            nome: "O assassinato no expresso oriente",
            autor: "Autor: Agatha Christie",
            eprestimo: "Data de empréstimo: 01/05",
            devolucao: "Data de devolução: 15/05",
            pessoa: "Emprestou: Giulia"
         },

         {
            nome: "Corte de espinhos e rosas",
            autor: "Autor: Sarah J. Maas",
            eprestimo: "Data de empréstimo: 01/05",
            devolucao: "Data de devolução: 15/05",
            pessoa: "Emprestou: Giulia"
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

                        <ul className = "livros">
                            <li>
                                <h3> { livros.nome } </h3>
                                <h5> {livros.autor} </h5>                           
                                <h5> {livros.eprestimo} </h5>
                                <h5> {livros.devolucao} </h5>
                                <h5> {livros.pessoa} </h5>
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
 
export default Emprestados;