import React from 'react';


const Pedidos = () => {

    const axios = require('axios');

    const [pedidos, listaPedidos] = useState([])

    const id_usuario = localStorage.getItem('id')

    useEffect(() => {

        axios.get('http://localhost:3001/publicacoes/' + id_usuario)
        .then(function(response){
            const dados = response.data;
            console.log(dados)
            listaPostagens(dados)
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])

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