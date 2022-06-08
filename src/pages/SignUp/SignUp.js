import { useState } from "react";


const SignUp = () => {
    require ('./SignUp.css')
    const [nome, setNome] = useState ("")
    const [usuario, setUsuario] = useState ("")
    const [email, setEmail] = useState ("")
    const [senha, setSenha] = useState ("")
    const [confirmaSenha, setConfirmaSenha] = useState ("")

    return(
    <div className="container">
        <div className="container-login">
            <div className="wrapLogin">

                    <section>
                        <form method="POST">
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
                            id="usuario" type='text'
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
                            id="senha" type='password'
                            value={confirmaSenha}
                            onChange={e => setConfirmaSenha(e.target.value)}
                        />
                        
                        <span className="focusInput" data-placeholder="Confirme sua senha"></span>
                      
                    </div>


                                <input type='submit' className="login-form-btn" value='Cadastrar'/>
                        </form>
                   </section>

            </div>
        </div>
    </div>
    );
}

export default SignUp;