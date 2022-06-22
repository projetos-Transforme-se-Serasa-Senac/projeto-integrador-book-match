import React from 'react';

import Match from '../Match/Match';


const CadastroLivros = () => {
    require ('./CadastroLivros.css')
    
    const [nome, setNome] = React.useState ("")
    const [autor, setautor] = React.useState ("")
    const [genero, setgenero] = React.useState ("")
    const [sinopse, setsinopse] = React.useState ("")

    const cadastraLivro = (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value
        const autor = document.querySelector('#autor').value
        const genero = document.querySelector('#genero').value
        const classficacao_etaria = document.querySelector('#classficacao_etaria').value
        const tags = document.querySelector('#tags').value
        const aluguel = document.querySelector('#aluguel').value
        const sinopse = document.querySelector('#sinopse').value

        const obj = {
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
    <div className="container">
        <div className="container-cadastro">
            <div className="wrapCadastro">

                <section>
                    <form method="POST" onSubmit={(e) => cadastraLivro(e)}>
                        {/* Nome, autor e g */}
                        <div className="wrapInput">
                            <input 
                                className={nome !== ""? 'temValor input': 'input' } 
                                id="titulo" required type='text'
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Nome do livro"></span>                     
                        </div>


                        <div className="wrapInput">
                            <input 
                                className={autor !== ""? 'temValor input': 'input' } 
                                id="autor" required type='text'
                                value={autor}
                                onChange={e => setautor(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Autor"></span>
                            
                        </div>

                        <div className="wrapInput">
                            <input 
                                className={genero !== ""? 'temValor input': 'input' } 
                                id="genero" required type='text'
                                value={genero}
                                onChange={e => setgenero(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Gênero"></span>
                            
                        </div>

                        {/* Classificação indicatória, tags e data de devolução */}
                        <div className='organizacao'>
                            <select id='classficacao_etaria'  required >
                                <option value="0"> Classificação indicatória * </option> 
                                <option value="1"> L </option>
                                <option value="2"> 10 </option>
                                <option value="3"> 12 </option>
                                <option value="4"> 14 </option>
                                <option value="5"> 16 </option>
                                <option value="6"> 18+ </option>
                            </select>
                            <span for='classficacao_etaria'  ></span>

                            <input id="tags"  placeholder='Tags' type='text'/>
                                    
                            {/* <label for='devolucao' className='titleData' required>Data de devolução*</label>
                            <br/>
                            <input id="devolucao"  type='date'/> */}

                            <label for='aluguel' ></label>
                            <input id="aluguel" placeholder='Valor do aluguel(opcional)' type='number'/>
                        </div>

                        {/*sinópse */}

                        <div className="wrapInput">
                            <textarea 
                                className={sinopse !== ""? 'temValor input': 'input' } 
                                id="sinopse"  rows='5' cols='35' required
                                value={sinopse}
                                onChange={e => setsinopse(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Sinópse do livro:"></span>
                            
                        </div>

                    {/* botões */}
                    <div className="divButtons" >
                                <a href="Match" className="btnCancela"  value='Voltar'>Voltar</a>
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
