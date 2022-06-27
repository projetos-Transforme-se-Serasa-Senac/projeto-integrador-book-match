import React from 'react';

import * as yup from 'yup';

// import Match from '../Match/Match';

const validationPost = yup.object().shape({
    titulo: yup.string().required(),
    autor: yup.string().required().min(3, "O nome do autor precisa ser maior") ,
    genero: yup.string().required().min(3, "O tipo de gênero precisa ser maior") ,
    classficacao_etaria: yup.string().required(),
    foto_livro: yup.string().required() ,
    sinopse: yup.string().required().min(20, "Insira uma sinopse com mais caracteres.")  
})

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

                        {/* Nome do livro */}
                        <div className="wrapInput">
                            <input name='titulo'
                                className={nome !== ""? 'temValor input': 'input' } 
                                id="titulo"     required       type='text'
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Nome do livro"></span>                     
                        </div>

                        {/* Autor */}
                        <div className="wrapInput">
                            <input name='autor'
                                className={autor !== ""? 'temValor input': 'input' } 
                                id="autor"     required        type='text'
                                value={autor}
                                onChange={e => setautor(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Autor"></span>
                            
                        </div>

                        {/* Genero */}
                        <div className="wrapInput">
                            <input name='genero'
                                className={genero !== ""? 'temValor input': 'input' } 
                                id="genero"      required      type='text'
                                value={genero}
                                onChange={e => setgenero(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Gênero"></span>
                            
                        </div>

                        {/* Classificação indicatória */}
                        <div className='organizacao'>
                            <select name='classficacao_etaria' id='classficacao_etaria'      required >
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

                           {/* Data de devolução */}
                            {/* <label for='devolucao' className='titleData' required>Data de devolução*</label>
                            <br/>
                            <input id="devolucao"  type='date'/> */}

                            {/* Valor do aluguel */}
                            <label for='aluguel' ></label>
                            <input id="aluguel" placeholder='Valor do aluguel(opcional)' type='number'/>
                        </div>

                        {/* Foto do livro */}
                        <div>
                            <input name='foto_livro' type="file" id="foto_livro" accept='.jpg'      required>  
                            </input>
                        </div>

                        <br/>

                        {/*Sinópse */}
                        <div className="wrapInput">
                            <textarea name='sinopse'
                                className={sinopse !== ""? 'temValor input': 'input' } 
                                id="sinopse"  rows='5' cols='35'        required
                                value={sinopse}
                                onChange={e => setsinopse(e.target.value)}
                            />
                            
                            <span className="focusInput" data-placeholder="Sinópse do livro:"></span>
                            
                        </div>

                    {/* Botões */}
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
