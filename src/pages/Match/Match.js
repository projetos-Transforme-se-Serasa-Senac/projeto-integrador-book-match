import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Match = () => {
    require ('./Match.css')


        const [match, alteraMatch] = useState([])
        const axios = require('axios');

        useEffect(() => {
            axios.get('http://192.168.61.112:3001/match')
            .then(function(response){
                const dados = response.data;
                alteraMatch(dados);
                console.log(dados)
            })
            .catch(function(error){
                console.log(error);
            })
        }, [])

        {/*{match.imagem}*/}
        return ( 
            <div className='pagina' id='match'>
                <Menu/>
                <Navegacao/>

                {
                    match == 0 ? "Carregando..." :
                    match.map( match => {
                        return(
                    

                    <div  className='container'>
   
                        <div className="card  animate__rotateOutUpLeft" >  
                            <div>
                                <img src="https://i.imgur.com/H9pWlr1.png"  className="img"/> 
                            </div>                                  
                            <div className='txt'>
                                <h3 className='txt1'> {match.titulo} </h3> 
                                <h3> {match.autor} </h3> 
                                <p> {match.genero} </p> 
                                <p> {match.classficacao_etaria} </p> 
                                <p> {match.aluguel} </p> 
                                <p className='txt2'>{match.sinopse}</p>
                            </div>                             
                            <div className='botoes'>   
                                <button> <img className='opcao' src='https://i.imgur.com/YaQkYdl.png'/> </button>
                                <button> <img className='coracao' src='https://i.imgur.com/rUyKKXU.png'/> </button>
                                <button> <img className='opcao' src='https://i.imgur.com/j78bsOe.png'/> </button>  
                            </div>
                        </div>
                    </div>     

                        )       
                             
                    })
                }

            </div>
      
     );
}
 
export default Match;
