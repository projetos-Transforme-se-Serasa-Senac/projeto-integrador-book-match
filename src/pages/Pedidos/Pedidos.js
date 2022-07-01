import React from 'react';


const Pedidos = () => {
        const pedidos = [
            { 
            nome: "Fulaninha",
            pessoa: " SOLICITAÇÃO" ,
            pessoaa: "CANCELAR ",
            },

            {
                nome: "Agatha",
                pessoa: " SOLICITAÇÃO",
                pessoaa: "CANCELAR ",
            },

            {
                nome: "Beatriz",
                pessoa: "SOLICITAÇÃO",
                pessoaa: "CANCELAR ",
            }
        ]

    return(
        <div> 

            <h1> Meus Pedidos </h1>
            <br/>

            {
                pedidos.map( pedidos => {
                    return(
                        <div id='Pedidos'>
                            <div >
                                <h3> { pedidos.nome } </h3>
                                <div >
                                    <button> {pedidos.pessoa} </button>
                                    <br/>
                                    <button> {pedidos.pessoaa} </button>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    )                 
                })
            }

            <a href='Perfil'> Voltar </a>

        </div>

    );
}

export default Pedidos; 