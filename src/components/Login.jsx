import React from 'react'
import './Login.css'
import SearchBar from './SearchBar';
import Summary from './Summary';

const Login = ({user, setUser, urllink, setUrllink, text, Settext, iSloading, SetIsloading}) => {
  return (
    <>
    {user==='yet to be done'? 
    <div className='Login_div'>
      <div className='Login_backbox'>
          Login
      </div>
    </div>:
    <>
      <SearchBar urllink={urllink} setUrllink= {setUrllink} text = {text} Settext = {Settext} iSloading={iSloading} SetIsloading={SetIsloading}/>
      <Summary text = {text} iSloading ={iSloading}/>)
    </>
    }
    </>
  )
}

export default Login