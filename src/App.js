import React from 'react';

import Menu from './components/Menu';

import Navegacao from './components/Navegacao';

import { Routes, Route } from "react-router-dom"; 

import Match from './Match';

import Feed from './Feed';

import Comunidade from './Comunidade';

import Chat from './Chat';

import Emprestados from './Emprestados';
import CadastroLivros from './CadastroLivros';
import Perfil from './Perfil';



const App = () => {
  return ( 
    <div>

    <Menu/>

    <Navegacao/> 

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

    </div>
   );
}
 
export default App;


