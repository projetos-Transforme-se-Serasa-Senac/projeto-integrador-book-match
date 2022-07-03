import React, {useState, useEffect} from "react";

const Publicacoes = () => {
    const axios = require('axios');

    const [postagens, listaPostagens] = useState([])

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

    const [toogle, setToogle] = React.useState(true);
    const [cor, setCor] = React.useState('#c3c3c3');

    const curtir = (e) => {
        e.target.style.backgroundColor="red";
    }

    return(
        <div>

            <div className='container-postFeed'>
                    {postagens.map(postagens => {
                    return(

                        <div className='postFeed'>
                            <div className='perfilUsuarioFeed'>
                                <img className='fotoPerfilFeed' src=''/>

                                <span className='tituloFeed'>{postagens.titulo}</span>
                                
                                <div> 
                                    <h6>Marina - Carlos Ruiz Zafon</h6>
                                    <label>*Resumo do livro* </label>
                                </div>
                            </div>
                        <img className='imagemPostFeed' src={`${postagens.imagem}`}/>    
                        <div  onClick={e => curtir(e)} className='botoesFeed'>

                            <button  className='btnFeed' > <i class="fa-solid fa-thumbs-up"  
                            style={{backgroundColor:cor,}}>  </i></button>
                        </div>
                        </div>
                            
                    )
                })}
            </div>
            
        </div>
    )
}

export default Publicacoes