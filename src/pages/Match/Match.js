import React, { useEffect, useState } from 'react';


import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';

const Match = () => {
    require ('./Match.css')
    document.body.style.backgroundImage='none'

        const id_usuario = localStorage.getItem('id')
    
        const [matches, alteraMatches] = useState([])
        const [match, alteraMatch] = useState( null )
        const [indiceMatch, alteraIndice] = useState( 0 )
        const [final, finalMatch] = useState (false)
        const axios = require('axios');

        useEffect(() => {
            axios.get('http://localhost:3001/livros' + id_usuario)
            .then(function(response){
                const dados = response.data;
                console.log(dados)
                alteraMatches(dados);
            })
            .catch(function(error){
                console.log(error);
            })
        }, [])

        useEffect (() =>{
            if (matches != 0){
                alteraMatch(matches[ indiceMatch ])
            }
        }, [matches])

        useEffect (() =>{
                if ( indiceMatch != 0 && indiceMatch >= matches.length ){
                    finalMatch(true)
                }else{
                    alteraMatch(matches[ indiceMatch ])
                }
        }, [indiceMatch])

        
        const curtir = () => {
            const id_livro = match.id_livro
            const id_usuario = localStorage.getItem("id")

            
            const obj = {
                id_livro: id_livro,
                id_usuario: id_usuario
            }
            
          
            axios.post('http://localhost:3001/match', obj)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })

            alteraIndice(indiceMatch + 1)
            
        }

        const nao_curtir = () => {
            alteraIndice(indiceMatch +1)
        }

        const favoritar = () => {
            alteraIndice(indiceMatch +1)
        }

        const seguir = () => {
            const id_seguidor = localStorage.getItem('id')
            const id_seguindo = match.id_usuario

            const obj = {
                id_seguidor: id_seguidor,
                id_seguindo: id_seguindo
            }

            axios.post('http://localhost:3001/seguir', obj)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
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
                                <h3 className='autorNome'> {match.autor} </h3> 
                                <p> {match.genero} </p> 
                                <p>Classificação indicatória: +{match.classificacao_etaria} </p> 
                                <p>Aluguel: R${match.aluguel} </p> 
                                <p className='txt2Match'>{match.sinopse}</p>
                                <p>@{match.user_name}</p>
                            </div>                             
                                <div className='botoesMatch'>   
                                    <button onClick={() =>favoritar()}> <img className='opcaoMatch' src='https://i.imgur.com/j78bsOe.png'/> </button>
                                    <button onClick={() =>nao_curtir()}> <img className='coracaoMatch' src='https://i.imgur.com/gzwzejd.png'/> </button>
                                    <button onClick={() =>curtir()}> <img className='coracaoMatch' src='https://i.imgur.com/zShS9df.png'/> </button>
                                    <button onClick={() =>seguir()}> <img className='opcaoMatch' src="https://i.imgur.com/0RSm0kS.png" /> </button>  
                                </div>
                         </div>
                    </div>     


                 }
            </div>     

                             

            </div>
      
     );
}
 
export default Match;
