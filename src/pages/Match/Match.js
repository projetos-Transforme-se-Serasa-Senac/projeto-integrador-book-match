import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Match = () => {
    require ('./Match.css')


        const [matches, alteraMatches] = useState([])
        const [match, alteraMatch] = useState( null )
        const [indiceMatch, alteraIndice] = useState( 0 )
        const [final, finalMatch] = useState (false)
        const axios = require('axios');

        useEffect(() => {
            axios.get('http://localhost:3001/match')
            .then(function(response){
                const dados = response.data;
                alteraMatches(dados);
            })
            .catch(function(error){
                console.log(error);
            })
        }, [])

        {/*{match.imagem}*/}
        useEffect (() =>{
            if (matches != 0){
                alteraMatch(matches[ indiceMatch ])
            }
        }, [matches])

        useEffect (() =>{
                if ( indiceMatch > matches.length ){
                    finalMatch(true)
                }else{
                    alteraMatch(matches[ indiceMatch ])
                }
        }, [indiceMatch])

        const curtir = () => {
            alteraIndice(indiceMatch +1)
        }

        return ( 
            <div className='pagina' id='match'>
                <Menu/>
                <Navegacao/>
                    
                <div className='container'>
   
                {
                    final == true ? "Você chegou ao fim, volte em breve...":

                    match == null ? "Carregando..." :

                    <div className='containerMatch'>
   
                        <div className="cardMatch  animate__rotateOutUpLeft" >  
                            <img src={match.imagem}  className="imgMatch"/>                               
                            <div className='txtMatch'>
                                <h3 className='txt1Match'> {match.titulo} </h3> 
                                <h3> {match.autor} </h3> 
                                <p> {match.genero} </p> 
                                <p> {match.classficacao_etaria} </p> 
                                <p> {match.aluguel} </p> 
                                <p className='txt2Match'>{match.sinopse}</p>
                            </div>                             
                                <div className='botoesMatch'>   
                                    <button> <img className='opcaoMatch' src='https://i.imgur.com/fg5bBZm.png'/> </button>
                                    <button onClick={() =>curtir()}> <img className='coracaoMatch' src='https://i.imgur.com/0CRVby7.png'/> </button>
                                    <button> <img className='opcaoMatch' src='https://i.imgur.com/j78bsOe.png'/> </button>
                                    <button> <img className='seguirMatch' src="/" /> </button>  
                                </div>
                         </div>
                    </div>     

                //     match == 0 ? "Carregando..." :
                //     match.map( match => {
                //         return(
                //             <div className="card" >  
                //                 <img src={match.imagem}  className="img"/>                               
                //                 <div className='txt'>
                //                     <h3 className='txt1'> {match.titulo} </h3> 
                //                     <p> {match.autor} </p> 
                //                     <p> {match.genero} </p> 
                //                     <p> {match.classficacao_etaria} </p> 
                //                     <p> {match.aluguel} </p> 
                //                     <p className='txt2'>{match.sinopse}</p>
                //                 </div>                             
                //                     <div className='botoes'>   
                //                         <button> <img className='opcao' src='https://i.imgur.com/fg5bBZm.png'/> </button>
                //                         <button> <img className='coracao' src='https://i.imgur.com/0CRVby7.png'/> </button>
                //                         <button> <img className='opcao' src='https://i.imgur.com/j78bsOe.png'/> </button>  
                //                     </div>
                //             </div>
                //         )       
                //     })
                 }
            </div>     

                             

            </div>
      
     );
}
 
export default Match;
