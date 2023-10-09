import React, { useState } from 'react'
import './NavBar.css'
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({user, setUser}) {
  const [Menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function Menu_Func(){
    setMenu(!Menu);
  }

  function User_LogOut(){
    setUser('');
    Menu_Func();
    navigate('/')
  }

  function Login_Res(){
    Menu_Func();
    navigate('/');
  }
  function Signup_Res(){
    Menu_Func();
    navigate('/Signup');
  }

  function DashBoard_Res(){
    Menu_Func();
    navigate('/dashboard');
  }

  function About_Res(){
    Menu_Func();
    navigate('/about');
  }

  function LogIn_redir(){
    navigate('/')
  }

  function SignUp_redir(){
    navigate('/Signup')
  }
  return (
    <div className='Top_Nav_Expand'>
      <div className='TopNav'> 
            <p className='NavTitle'>
                <Link style={{ textDecoration: 'none', color:'white', fontWeight: '800', fontSize: '30px'}} to="/dashboard">
                Ai summarizer
                </Link>
            </p>
            <div className='Right_Nav'>
              <button className='Menu_Button' onClick={Menu_Func}><MenuIcon /></button>
              {user?<p className='NavAbout'>
                <Link style={{ textDecoration: 'none', color:'white', fontWeight:'550', fontSize:'15px'}} to="/dashboard">
                DashBoard 
                </Link>
              </p>:<></>}
              <p className='NavAbout'>
                <Link style={{ textDecoration: 'none', color:'white', fontWeight:'550', fontSize:'15px'}} to="/about">
                About
                </Link>
              </p>
              {user? 
              <button className='Log_Out' onClick={User_LogOut}>Log Out</button>
              :
              <>
              <button className='Sign_In' onClick={LogIn_redir}>Log In</button>
              <button className='Sign_Up' onClick={SignUp_redir}>Sign Up</button>
              </>}
            </div>
      </div>
      {Menu?
      <div className='Responsive_Menu' id='Res_Menu'>
      {user?
      <p className='NavAbout_resMenu' onClick={DashBoard_Res}>
          DashBoard
      </p>:<></>}
      <p className='NavAbout_resMenu' onClick={About_Res}>
          About
      </p>
      {user? 
      <button className='Log_Out_resMenu' onClick={User_LogOut}>Log Out</button>
      :<div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'15px'}}>
      <button className='Log_Out_resMenu' onClick={Login_Res}>Log In</button>
      <button className='Log_Out_resMenu' onClick={Signup_Res}>Sign Up</button>
      </div>}
      </div>:<></>}
    </div>
  )
}

export default NavBar