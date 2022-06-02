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



const App = () => {
  return ( 
    <main>

      <AppRouter/>

      {/* <Menu/>

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


