import React from 'react';
// import { Routes, Route } from "react-router-dom"; 

// import Menu from './components/Menu';
// import Navegacao from './components/Navegacao';
// import Match from './Match';
// import Feed from './Feed';
// import Comunidade from './Comunidade';
// import Chat from './Chat';
// import SignUp from './SignUp';
import AppRouter from './routes';

import Emprestados from './Emprestados';
import CadastroLivros from './CadastroLivros';
import Perfil from './Perfil';



const App = () => {
  return ( 
    <main>

      <AppRouter/>

      {/* <Menu/>

    <Routes>
      <Route path="/match" element={<Match/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/comunidade" element={<Comunidade/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
      
    <Routes>
      <Route path="/emprestados" element={<Emprestados/>}/>
      <Route path="/cadastroLivros" element={<CadastroLivros/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
    </Routes>
      <Navegacao/> 

      <Routes>
        <Route path="/match" element={<Match/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/comunidade" element={<Comunidade/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>

      <SignUp/> */}

    </main>
  );
}
 
export default App;


