import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Emprestados = () => {
    require ('./Emprestados.css')
    document.body.style.backgroundImage='none'


    const livros = [
        {
           imagem: "https://i.imgur.com/ce3M15R.jpg", 
           nome: "A menina que roubava livros",
           autor: "Autor: Markus Zusak",
           eprestimo: "Data de empréstimo: 01/05",
           devolucao: "Data de devolução: 15/05",
           pessoa: "Emprestou: Giulia"
        },

        {
            imagem: "https://imgur.com/K8rWLXD.png",
            nome: "O assassinato no expresso oriente",
            autor: "Autor: Agatha Christie",
            eprestimo: "Data de empréstimo: 01/05",
            devolucao: "Data de devolução: 15/05",
            pessoa: "Emprestou: Giulia"
         },

         {
            imagem: "https://imgur.com/gIH07su.png",
            nome: "Corte de espinhos e rosas",
            autor: "Autor: Sarah J. Maas",
            eprestimo: "Data de empréstimo: 01/05",
            devolucao: "Data de devolução: 15/05",
            pessoa: "Emprestou: Giulia"
         }
    ]

    return ( 
        
        <div>
            <div className='voltar'>
                <a href='Perfil' className='voltarLink'> <i class="fa-solid fa-arrow-left"></i> Voltar</a>
            </div>

            {
            livros.map( livros => {
                return(
                    <div id='Emprestados'>
                        <div class="card">
                            <img src= {livros.imagem} /> 
                                <h3> { livros.nome } </h3>
                            <div class="card-body">
                                <h5> {livros.autor} </h5>
                                <h5> {livros.pessoa} </h5>
                                <h5> {livros.devolucao} </h5>
                            </div>
                         </div>
                    </div>
                        
                      
                    )                 
                })
               
            }



        </div>
     );
}
 
export default Emprestados;