import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp';
import Match from '../pages/Match/Match';
import Feed from '../pages/Feed/Feed';
import Comunidade from '../pages/Comunidade/Comunidade';
import Chat from '../pages/Chat/Chat';
import Emprestados from '../pages/Emprestados/Emprestados';
import CadastroLivros from '../pages/CadastroLivros/CadastroLivros';
import Perfil from '../pages/Perfil/Perfil';
import Forum from '../pages/Forum/Forum';
import Pedidos from '../pages/Pedidos/Pedidos';
import Solicitacoes from '../pages/Solicitacoes/Solicitacoes';
import Publicacoes from '../pages/Publicacoes/Publicacoes'

const AppRouter = () => {
    return(

        <Routes>
            {/* Página de Login e cadastro */}
            <Route path='/' exact element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>

            {/* Rotas da página principal do aplicativo */}
            <Route path="/match" element={<Match/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/comunidade" element={<Comunidade/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/forum" element={<Forum/>}/>

            {/* ROTAS MENU */}           
            <Route path="/cadastroLivros" element={<CadastroLivros/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            
            {/* ROTAS NAVEGAÇÃO PERFIL */}
            <Route path='publicacoes' element={<Publicacoes/>}/>
            <Route path="/emprestados" element={<Emprestados/>}/>
            <Route path='pedidos' element={<Pedidos/>}/>
            <Route path='solicitacoes' element={<Solicitacoes/>}/>
        </Routes>

    );
}

export default AppRouter;