import { useState } from "react";


const SignIn = () => {
     require ('./SignIn.css')
     require ('../../assets/global.css')

    const [usuario, setUsuario] = useState ("")
    const [senha, setSenha] = useState ("")


    return(
    <div className="container background">   
        <div className="container-login">
            {/* {document.getElementById('menu').innerHTML='jasjdaj'} */}
            <div class="wrapLogin">

                <form className="loginForm">

                    {/* Logo e mensagem */}
                    <span className="loginTitle">Faça seu logIn</span>


                    {/* Usuario e senha */}
                    <div className="wrapInput">
                        <input 
                            className={usuario !== ""? 'temValor input': 'input' } 
                            id="usuario" type='text'
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="Usúario"></span>
                      
                    </div>

                    <div className="wrapInput">
                        <input
                            className={senha !== ""? 'temValor input': 'input' } 
                            id="senha" type='password'
                            value={senha}
                            onChange={e => setSenha(e.target.value)}    
                        />
                        <span className="focusInput" data-placeholder="Senha"></span>

                        {/* <input type='submit' value='Entrar'/> */}
                    </div>

                    {/* botão de entrar */}
                    <div className="container-login-form-btn">
                        <button className="login-form-btn" value='Entrar'> LogIn</button>
                    </div>

                    {/* direcional para a pagina de logUp */}
                    <div className="text-center">
                        <span className="txt1">Não possui conta?</span>
                        <a className="txt2" href="SignUp">Criar conta.</a>
                    </div>
                </form>
            </div>
            {/* <div>
                <p> Não possui conta? </p>
                <a href="#"> Criar conta. </a>
            </div> */}
        </div>
    
    </div>
    );
}

export default SignIn;