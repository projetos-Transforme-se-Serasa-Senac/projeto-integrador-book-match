import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const SignIn = () => {
     require ('./SignIn.css')
    //  require ('../../assets/global.css')

    const [usuario, setUsuario] = useState ("")
    const [senha, setSenha] = useState ("")

    const navigate = useNavigate()


    const login = (e) => {


        e.preventDefault();
        const usuario = document.querySelector('#usuario').value
        const senha = document.querySelector('#senha').value


        const obj = {
            usuario: usuario,
            senha: senha
        }

        const axios = require('axios');




        axios.post('http://localhost:3001/autentica', obj)
        .then(function(response){
            const dados = response.data

            if (dados == 0){
                alert("Usuário não encontrado")
                return;
            }else{
                console.log(dados)
                localStorage.setItem("id", dados[0].id_usuario)
                localStorage.setItem("user", dados[0].user_name)

                navigate('/match')
          
            }
            
        })
        .catch(function(error){
            console.log(error);
        })
    }


    return(
    <div id="singin" className="container">  

            <div className="container-login">
                {/* {document.getElementById('menu').innerHTML='jasjdaj'} */}
                <div className="wrapLogin">

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
                            <button onClick={(e) => login(e)} className="login-form-btn" value='Entrar'> LogIn</button>
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