import React from 'react';

const CadastroLivros = () => {

    require ('./CadastroLivros.css')
    document.body.style.backgroundImage='url("https://i.imgur.com/3gKnQHQ.jpg")'

    const [nome, setNome] = React.useState ("")
    const [autor, setautor] = React.useState ("")
    const [genero, setgenero] = React.useState ("")
    const [sinopse, setsinopse] = React.useState ("")


    const cadastraLivro = (e) => {
        e.preventDefault();
        const id_usuario = localStorage.getItem("id")
        const titulo = document.querySelector('#titulo').value
        const autor = document.querySelector('#autor').value
        const genero = document.querySelector('#genero').value
        const classficacao_etaria = document.querySelector('#classficacao_etaria').value
        const tags = document.querySelector('#tags').value
        const aluguel = document.querySelector('#aluguel').value
        const sinopse = document.querySelector('#sinopse').value

        const obj = {
            id_usuario: id_usuario,
            titulo: titulo,
            autor: autor,
            genero: genero,
            classficacao_etaria: classficacao_etaria,
            tags: tags,
            aluguel: aluguel,
            sinopse: sinopse
        }

        const axios = require('axios');

        axios.post('http://localhost:3001/livros', obj)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return ( 

    <div id='cadastroLivro'>
    <div className="containerCadastro">
        <div className="container-cadastro">
            <div className="wrapCadastro">

                <section>
                    <form method="POST" onSubmit={(e) => cadastraLivro(e)}>

                        {/* Nome do livro */}
                        <div className="wrapInputCadastro">
                            <input name='titulo' 
                                className={nome !== ""? 'temValorCadastro inputCadastro': 'inputCadastro' } 
                                id="titulo"     required    minLength={3}      type='text'
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            
                            <span className="focusInputCadastro" data-placeholder="Nome do livro"></span>                     
                        </div>

                        {/* Autor */}
                        <div className="wrapInputCadastro">
                            <input name='autor' 
                                className={autor !== ""? 'temValorCadastro inputCadastro': 'inputCadastro' } 
                                id="autor"     required  minLength={3}    type='text'
                                value={autor}
                                onChange={e => setautor(e.target.value)}
                            />
                            
                            <span className="focusInputCadastro" data-placeholder="Autor"></span>
                            
                        </div>

                        {/* Genero */}
                        <div className="wrapInputCadastro">
                            <input name='genero' 
                                className={genero !== ""? 'temValorCadastro inputCadastro': 'inputCadastro' } 
                                id="genero"      required   minLength={3}    type='text'
                                value={genero}
                                onChange={e => setgenero(e.target.value)}
                            />
                            
                            <span className="focusInputCadastro" data-placeholder="Gênero"></span>
                            
                        </div>

                        {/* Classificação indicatória */}
                        <div className='organizacaoCadastro'>
                            <select name='classficacao_etaria' id='classficacao_etaria'    required >
                                <option value="0"> Classificação indicatória * </option> 
                                <option value="1"> L </option>
                                <option value="2"> 10 </option>
                                <option value="3"> 12 </option>
                                <option value="4"> 14 </option>
                                <option value="5"> 16 </option>
                                <option value="6"> 18+ </option>
                            </select>
                            <span for='classficacao_etaria'  ></span>

                            {/* Tags */}
                            <input id="tags"  placeholder='Tags' type='text'/>

                            {/* Valor do aluguel */}
                            <label for='aluguel' ></label>
                            <input id="aluguel" placeholder='Valor do aluguel(opcional)' type='number'/>
                            
                        </div>

                        {/* Foto do livro */}
                        <div>
                            <input name='foto_livro' type="text" id="foto_livro"  placeholder='Insira o URL (link da foto)...'  required>  
                            </input>
                        </div>

                        <br/>

                        {/*Sinópse */}
                        <div className="wrapInputCadastro">
                            <textarea name='sinopse' 
                                className={sinopse !== ""? 'temValorCadastro inputCadastro': 'inputCadastro'  } 
                                id="sinopse"  rows='5' cols='35'   minLength={20}   required      
                                value={sinopse}
                                onChange={e => setsinopse(e.target.value)}
                            />
                            
                            <span className="focusInputCadastro" data-placeholder="Sinópse do livro:"></span>
                            
                        </div>

                    {/* Botões */}
                    <div className="divButtonsCadastro" >
                                <a href="Match" className="btnCancelaCadastro"  value='Voltar'>Voltar</a>
                                <input type='submit' className='btnCadastro' value='Cadastrar'/>
                    </div>
                        </form>
                   </section>

            </div>
        </div>
    </div>
        
    </div>  
     );
}
 
export default CadastroLivros;
