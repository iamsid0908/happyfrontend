import './App.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';
import Display from './Chatbot/Componenet/Display/Display';
import { Route, Routes } from 'react-router-dom';
import Home from './Chatbot/Componenet/Home/Home';

function App() {

  return (
    <>

    <Routes>
     <Route path = "/" element={<Home/>}/>
     <Route path ="/meet" element={
      <Chatbot className="chatbot"
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
    
     }/>
     <Route path="/display" element={ <Display/>}/>
      </Routes>
      
    
    </>
  )
}

export default App
