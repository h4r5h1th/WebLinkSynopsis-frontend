import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const Login = ({user, setUser}) => {
  const [Email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [Incorrect, SetIncorrect] = useState("");
  const [IsLoading, SetIsLoading] = useState(false);
  const navigate = useNavigate();
  function EmailSet(e){
    SetEmail(e.target.value);
    SetIncorrect("");
  }
  function PasswordSet(e){
    SetPassword(e.target.value);
    SetIncorrect("");
  }

  async function LoginIn_User(e){
    e.preventDefault();
    SetIsLoading(true);
    const response = await axios.post('http://localhost:3001/api/login', {'email': Email,'password': password});
    console.log(response);
    if(response.data.data==='Correct'){
      setUser(response.data.userName);
      navigate('/dashboard');
    }else{
      SetIncorrect("Email or Password is Incorrect")
    }
    SetIsLoading(false);
  }

  return (
    <div className='Login_div'>
      <form className='Login_backbox' onSubmit={LoginIn_User}>
          <h1 className='Login_text'><b>Login</b></h1>
          <div className='Login_components'>
            {Incorrect? <p className='error_pass_In' style={{fontWeight: '500', fontSize: '12px'}}>{Incorrect}</p>:<></>}
            <p className='title'>Email</p>
            <input className='title_input' type = 'email' required 
              onChange={EmailSet} value= {Email}
            />
            <p className='title'>Password</p>
            <input className='title_input' type='password' required 
              onChange={PasswordSet} value={password}
            />
            <p className='link'>Create an account?<Link to='/Signup'> Click here</Link></p>
          </div>
          <button type='submit' className='Log_in_button' disabled={IsLoading}>{IsLoading? <CircularProgress style={{color: 'white', height: '15px', width: '15px'}}/>:"Log in"}</button>
      </form>
    </div>
  )
}

export default Login