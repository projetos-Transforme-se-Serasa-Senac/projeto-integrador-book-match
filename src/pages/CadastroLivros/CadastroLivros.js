import React from 'react';

import Match from '../Match/Match';


const CadastroLivros = () => {
    return ( 
        <section>
            <form method="POST">
                <h1> Cadastro de Livros </h1>

                <label for='nome'> Nome do Livro </label>
                <input id="nome" type='text' required/>

                <label for='autor'> Autor </label>
                <input id="autor" type='text' required/>

                <label for='genero'> Gênero </label>
                <input id="genero" type='text'required/>

                <label for='classificacao' > Classificação Indicativa  </label>
                <select id='classificacao' required>
                    <option value="0"> -- </option> 
                    <option value="1"> L </option>
                    <option value="2"> 10 </option>
                    <option value="3"> 12 </option>
                    <option value="4"> 14 </option>
                    <option value="5"> 16 </option>
                    <option value="6"> 18+ </option>
                </select>
                
                <label for='tags'> Tags </label>
                <input id="tags" type='text'/>

                <label for='devolucao' required> Data da Devolução </label>
                <input id="devolucao" type='date'/>

                <label for='aluguel'> Aluguel (opcional)</label>
                <input id="aluguel" type='number'/>


                <label for='sinopse'> Sinopse </label>
                <textarea id='sinopse' rows='5' cols='35' required> </textarea>

                <input type='submit' value='Cadastrar'/>
                <input type='submit' value='Cancelar' />
            </form>
        </section>
        
     );
}
 
export default CadastroLivros;
