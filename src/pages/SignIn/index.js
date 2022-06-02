const SignIn = () => {
    return(
        <div>
            <div>
                <form>

                    <label for='usuario'> Usuário </label>
                    <input id="usuario" type='text'/>

                    <label for='senha'> Senha </label>
                    <input id="senha" type='password'/>

                    <input type='submit' value='Entrar'/>

                </form>
            </div>
            <div>
                <p> Não possui conta? </p>
                <a href="#"> Criar conta. </a>
            </div>
        </div>
    );
}

export default SignIn;