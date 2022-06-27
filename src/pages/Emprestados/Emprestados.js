import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Emprestados = () => {
    require ('./Emprestados.css')
    document.body.style.backgroundImage='url("https://i.imgur.com/r1MXp8h.png")'


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
                <a href='Match' className='voltarLink'> <i class="fa-solid fa-arrow-left"></i> Voltar</a>
            </div>

            {
            livros.map( livros => {
                return(
                    <div id='Emprestados'>
                        <div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={livros.imagem} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{livros.nome}-<h6>{livros.autor}</h6></h5>
                                    <p className="card-text1">{livros.eprestimo}</p>
                                    <p className="card-text">{livros.devolucao}</p>
                                    <p className="card-text"><small className="text-muted">{livros.pessoa}</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* <ul className = "livros">
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
                            </ul> */}
                        </div>
                     
                    </div>
                      
                    )                 
                })
               
            }



        </div>
     );
}
 
export default Emprestados;