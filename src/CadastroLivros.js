import React from 'react';


const CadastroLivros = () => {
    return ( 
        <section>
            <form method="POST">
                <h1> Cadastro de Livros </h1>

                <label for='nome'> Nome do Livro </label>
                <input id="nome" type='text'/>

                <label for='nome'> Autor </label>
                <input id="nome" type='text'/>

                <label for='nome'> Gênero </label>
                <input id="nome" type='text'/>

                <label for='nome'> Classificação Etária  </label>
                <input id="nome" type='text'/>

                <label for='nome'> Tags </label>
                <input id="nome" type='text'/>

                <label for='nome'> Data da Devolução </label>
                <input id="nome" type='text'/>

                <label for='nome'> Aluguel (opcional)</label>
                <input id="nome" type='text'/>

                <label for='nome'> Sinopse </label>
                <input id="nome" type='text'/>

                <input type='submit' value='Cadastrar'/>
                <input type='submit' value='Cancelar'/>
            </form>
        </section>
        
     );
}
 
export default CadastroLivros;

// espaço para foto 

// nome do livro
// autor
// gênero
// classificação etária
// tags
// data da devolução
// aluguel (como opcional)
// sinopse

// botão cadastrar 
// botão cancelar
