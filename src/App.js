import { useState } from 'react';
import './App.css';
import Login from './components/Login'
import About from './components/About';
import { Routes, Route } from "react-router-dom";

function App() {
  const [urllink, setUrllink] = useState('');
  const [text, Settext] = useState('Start');
  const [iSloading, SetIsloading] = useState(false);
  const [user, setUser] = useState('');
  console.log(text)
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={
      <Login user={user} setUser={setUser} urllink={urllink} setUrllink= {setUrllink} text = {text} Settext = {Settext} iSloading={iSloading} SetIsloading={SetIsloading}/>
    }/>
    <Route path='/about' element={
      <About />
    }/>
    </Routes>
    </div>
  );
}

export default App;
