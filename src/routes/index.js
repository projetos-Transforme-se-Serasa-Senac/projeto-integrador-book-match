import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import Match from '../Match';
import Feed from '../Feed';
import Comunidade from '../Comunidade';
import Chat from '../Chat';
import Emprestados from '../Emprestados';
import CadastroLivros from '../CadastroLivros';
import Perfil from '../Perfil';

const AppRouter = () => {
    return(

        <Router>
            <Routes>
                <Route path='/' exact element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path="/match" element={<Match/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/comunidade" element={<Comunidade/>}/>
                <Route path="/chat" element={<Chat/>}/>
                <Route path="/emprestados" element={<Emprestados/>}/>
                <Route path="/cadastroLivros" element={<CadastroLivros/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouter;