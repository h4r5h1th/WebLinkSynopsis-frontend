import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const Signup = () => {
    const [user, SetUser] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [check, SetCheck] = useState("");
    const [match, SetMatch] = useState(true);
    const [dis, setDis] = useState(false);
    const [IsLoading, SetIsLoading] = useState(false);
    const [resmes, Setresmes] = useState('');

    function UserSet(e){
        SetUser(e.target.value);
        if(resmes==="Username Already exists"){
            Setresmes('');
        }
    }

    function EmailSet(e){
        SetEmail(e.target.value);
        if(resmes==="Email exists"){
            Setresmes('');
        }
    }

    function PasswordSet(e){
        SetPassword(e.target.value);
    }

    function CheckPassword(e){
        SetCheck(e.target.value);
    }

    useEffect(()=>{
        if(password!==check){
            SetMatch(false);
            setDis(true);
        }else{
            SetMatch(true);
            setDis(false);
        }
    },[check, password]);

    async function SignUp_User(e){
        e.preventDefault();
        //continue from here
        SetIsLoading(true);
        const response = await axios.post('http://localhost:3001/api/signup', {user:user, email:email, password:password});
        console.log(response);
        Setresmes(response.data);
        SetIsLoading(false);
    }
  return (
    <div className='Signup_div'>
        <form className='Signup_backbox' onSubmit={SignUp_User}>
            <h1 className='Signup_text'><b>Sign up</b></h1>
            <div className='Signup_components'>
            {resmes===""||resmes==="Success"? <></>:<p className='error_pass' style={{fontSize: '12px', fontWeight: '600'}}>{resmes}</p>}
            <p className='title'>Username</p>
            <input className='title_input' type = 'text' required 
                onChange={UserSet} value={user}
            />
            <p className='title'>Email</p>
            <input className='title_input' type = 'email' required
                onChange={EmailSet} value={email}
            />
            <p className='title'>Password</p>
            <input className='title_input' type='password' required 
                onChange={PasswordSet} value={password}
            />
            <p className='title'>Confirm Password</p>
            <input className='title_input' type='password' required
            onChange={CheckPassword}  value={check}/>
            {match? <></>:<p className='error_pass'>Password's doesn't match!</p>}
            <p className='link'>Already have an account?<Link to='/'> Click here</Link></p>
            </div>
            <button type='submit' className='Sign_up_button' disabled={dis||IsLoading}>{IsLoading? <CircularProgress style={{color: 'white', height: '20px', width: '20px'}} />:"Sign up"}</button>
        </form>
    </div>    
  )
}

export default Signup