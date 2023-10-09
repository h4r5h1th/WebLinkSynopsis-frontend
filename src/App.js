import { useState } from 'react';
import './App.css';
import Login from './components/Login'
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import DashBoard from './components/DashBoard';
import Signup from './components/Signup';
import NavBar from './components/NavBar';

function App() {
  const [urllink, setUrllink] = useState('');
  const [text, Settext] = useState('Start');
  const [iSloading, SetIsloading] = useState(false);
  const [user, setUser] = useState('');
  return (
    <div className="App">
    <NavBar user={user} setUser={setUser} />
      <Routes>
      <Route path='/Signup' element={ <Signup user={user} setUser={setUser} />}/>
      {user?
          <Route path='/dashboard' element={<DashBoard urllink={urllink} setUrllink= {setUrllink} text = {text} Settext = {Settext} iSloading={iSloading} SetIsloading={SetIsloading} />}/>
          :<></>
      }
      <Route path='/about' element=<About />/>
      <Route path='/*' element={ <Login user={user} setUser={setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;
