const SignUp = () => {
    return(
        <section>
            <form method="POST">
                <label for='nome'> Nome </label>
                <input id="nome" type='text'/>

                <label for='usuario'> Usuário </label>
                <input id="usuario" type='text'/>

                <label for='email'> Email </label>
                <input id="email" type='email'/>

                <label for='senha'> Senha </label>
                <input id='senha' type='password'/>

                <label for='confirmaSenha'> Confirme a Senha </label>
                <input id="confirmaSenha" type='password'/>

                <input type='submit' value='Cadastrar'/>
            </form>
        </section>
    );
}

export default SignUp;