import { useState } from "react";


const SignUp = () => {
    require ('./SignUp.css')
    document.body.style.backgroundImage='url("https://i.imgur.com/MMp8wsE.jpg")'
    const [nome, setNome] = useState ("")
    const [usuario, setUsuario] = useState ("")
    const [email, setEmail] = useState ("")
    const [dt_nascimento, setNascimento] = useState ("")
    const [senha, setSenha] = useState ("")
    const [confirmaSenha, setConfirmaSenha] = useState ("")

    const cadastraUsuario = (e) => {
        e.preventDefault();

        const nome = document.querySelector('#nome').value
        const user_name = document.querySelector('#user_name').value
        const email = document.querySelector('#email').value
        const dt_nascimento = document.querySelector('#dt_nascimento').value
        const senha = document.querySelector('#senha').value

        const obj = {
            nome: nome,
            user_name: user_name,
            email: email,
            dt_nascimento: dt_nascimento,
            senha: senha
        }

        const axios = require('axios');

        axios.post('http://localhost:3001/usuarios', obj)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return(
    <div id='signup' className="container">
        <div className="container-login">
            <div className="wrapLogin">

                    <section>
                        <form method="POST" onSubmit={(e) => cadastraUsuario(e)}>
                            <span className="loginTitle">Book Match</span>

                            {/* Informações do usuario */}
                    <div className="wrapInput">
                        <input 
                            className={nome !== ""? 'temValor input': 'input' } 
                            id="nome" type='text'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="Nome"></span>                     
                    </div>


                    <div className="wrapInput">
                        <input 
                            className={usuario !== ""? 'temValor input': 'input' } 
                            id="user_name" type='text'
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="Usúario"></span>
                      
                    </div>

                    <div className="wrapInput">
                        <input 
                            className={email !== ""? 'temValor input': 'input' } 
                            id="email" type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="E-mail"></span>
                      
                    </div>

                    <div className="wrapInput">
                        <input 
                            className={dt_nascimento !== ""? 'temValor input': 'input' } 
                            id="dt_nascimento" type='date'
                            value={dt_nascimento}
                            onChange={e => setNascimento(e.target.value)}
                        />
                        
                        <span className="focusInput"></span>
                      
                    </div>

                    <div className="wrapInput">
                        <input 
                            className={senha !== ""? 'temValor input': 'input' } 
                            id="senha" type='password'
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="Senha"></span>
                      
                    </div>

                                
                    <div className="wrapInput">
                        <input 
                            className={confirmaSenha !== ""? 'temValor input': 'input' } 
                            id="confirmaSenha" type='password'
                            value={confirmaSenha}
                            onChange={e => setConfirmaSenha(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="Confirme sua senha"></span>
                      
                    </div>
                    <div className="divButtons" >
                                <a href="/" className="login-form-a"  value='Voltar'>Voltar</a>
                                <input type='submit' className="login-form-btn" value='Cadastrar'/>
                    </div>
                        </form>
                   </section>

            </div>
        </div>
    </div>
    );
}

export default SignUp;