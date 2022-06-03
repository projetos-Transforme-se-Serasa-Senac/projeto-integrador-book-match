import { useState } from "react";


const SignIn = () => {
     require ('./SignIn.css')

    const [usuario, setUsuario] = useState ("")
    
    return(
        <div className="container-login">
            {/* {document.getElementById('menu').innerHTML='jasjdaj'} */}
            <div class="wrapLogin">
                <form className="loginForm">
                    <span className="login-form-title">Bem vindo!</span>

                    <span className="login-form-title">
                        <img src="https://i.imgur.com/P3vDZ0n.jpg"/>
                    </span>
                    <div className="wrapInput">
                        <input id="usuario" type='text'/>
                        <span className="focusInput" data-placeholder="Usúario"></span>
                      
                    </div>
                    <div className="wrapInput">
                        <input id="senha" type='password'/>
                        <span className="focusInput" data-placeholder="Usúario"></span>

                        <input type='submit' value='Entrar'/>
                    </div>
                    <div className="conteiner-login-form-btn">
                        <button className="login-form-btn"></button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui conta?</span>
                        <a className="txt2" href="#">Criar conta</a>
                    </div>
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