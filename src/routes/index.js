import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import Match from '../Match';
import Feed from '../Feed';
import Comunidade from '../Comunidade';
import Chat from '../Chat';

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
            </Routes>
        </Router>
    );
}

export default AppRouter;