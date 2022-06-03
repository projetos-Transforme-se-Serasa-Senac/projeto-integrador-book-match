import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp';
import Match from '../pages/Match/Match';
import Feed from '../pages/Feed/Feed';
import Comunidade from '../pages/Comunidade/Comunidade';
import Chat from '../pages/Chat/Chat';

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

            
        </Routes>

    );
}

export default AppRouter;