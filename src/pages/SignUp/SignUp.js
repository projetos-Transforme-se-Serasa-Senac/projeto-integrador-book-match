import { useState } from "react";


const SignUp = () => {
    require ('./SignUp.css')
    const [Nome, setNome] = useState ("")
    const [usuario, setUsuario] = useState ("")
    const [email, setEmail] = useState ("")
    const [senha, setSenha] = useState ("")

    return(
    <div className="container">
        <div className="container-login">
            <div className="wrapLogin">

                    <section>
                        <form method="POST">
                            <span className="loginTitle">Tela de cadastro</span>

                            <div className="wrapInput">
                                <input 
                                    className={Nome !== ""? 'temValor input': 'input' } 
                                    id="nome" type='text' 
                                    required
                                    value={Nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                <label className="focusInput" for='nome'> Nome </label>
                                
                            </div>

                            <div className="wrapInput">
                                <label for='usuario'> Usuário </label>
                                <input
                                    className={usuario !== ""? 'temValor input': 'input' } 
                                    id="usuario"
                                    type='text'
                                    required 
                                    value={usuario}
                                    onChange={e => setUsuario(e.target.value)}
                                />
                            </div>

                            <div className="wrapInput">
                                <label for='email'> Email </label>
                                <input 
                                    className={email !== ""? 'temValor input': 'input' } 
                                    id="email" 
                                    type='email' 
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="wrapInput">
                                <label for='senha'> Senha </label>
                                <input
                                    className={senha !== ""? 'temValor input': 'input' }  
                                    id='senha' 
                                    type='password'
                                    required
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </div>
                                
                            <div className="wrapInput">
                                <label for='confirmaSenha'> Confirme a Senha </label>
                                <input
                                    className={senha !== ""? 'temValor input': 'input' } 
                                    id="confirmaSenha"
                                    type='password'
                                    required
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
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