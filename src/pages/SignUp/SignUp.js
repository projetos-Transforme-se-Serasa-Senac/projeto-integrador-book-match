const SignUp = () => {
    return(
        <section>
            <form method="POST">
                <label for='nome'> Nome </label>
                <input id="nome" type='text' required/>

                <label for='usuario'> Usuário </label>
                <input id="usuario" type='text' required/>

                <label for='email'> Email </label>
                <input id="email" type='email' required/>

                <label for='senha'> Senha </label>
                <input id='senha' type='password' required/>

                <label for='confirmaSenha'> Confirme a Senha </label>
                <input id="confirmaSenha" type='password' required/>

                <input type='submit' value='Cadastrar'/>
            </form>
        </section>
    );
}

export default SignUp;