import React from 'react';

import Match from '../Match/Match';


const CadastroLivros = () => {
    require ('./CadastroLivros.css')
    return ( 
    <div className='container'>
        <div className='container-cadastro'>
            <div className='wrapCadastro'>
                <section>
                    <form method="POST">

                    <span className="cadastroTitle">Cadastro de livros</span>

                        <div className='hoverInput '>    
                            <input id="nome" className='info' type='text' placeholder='Nome do livro *' required/>
                            <span className="focusInput" for="nome" data-placeholder="Nome do livro"></span>
                        </div>   

                        <div className='hoverInput '>  
                            <input id="autor" className='info' type='text' placeholder='Autor *' required/>
                            <span for='autor'  className="focusInput" data-placeholder="Autor"></span>                             
                        </div>  

                        <div className='hoverInput '> 
                            <input id="genero" className='info' type='text' placeholder='Gênero *' required/>
                            <span for='genero'  className="focusInput" data-placeholder="Gênero"></span>                               
                        </div>       
                           
                        
                        
                         <div className='organizacao'>  
                            <select id='classificacao' required >
                                <option value="0"> Classificação indicatória * </option> 
                                <option value="1"> L </option>
                                <option value="2"> 10 </option>
                                <option value="3"> 12 </option>
                                <option value="4"> 14 </option>
                                <option value="5"> 16 </option>
                                <option value="6"> 18+ </option>
                            </select>
                            <span for='classificacao'  ></span>
                        
                            
                            <label for='tags'></label>
                            <input id="tags"  placeholder='Tags' type='text'/>
                        </div> 

                            <label for='devolucao' className='titleData' required>Data de devolução*</label>
                            <br/>
                            <input id="devolucao"  type='date'/>

                            <label for='aluguel' ></label>
                            <input id="aluguel" placeholder=' Valor do aluguel (opcional)' type='number'/>
                        
                        


                        <label for='sinopse'> Sinopse </label>
                        <br/>
                        <textarea id='sinopse' rows='5' cols='35' required> </textarea>

                        <div className='cadastroBtns'>                          
                            <input type='submit' className='btnCadastro' value='Cancelar' />
                            <input type='submit' className='btnCadastro' value='Cadastrar'/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
        
     );
}
 
export default CadastroLivros;
