import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');

    const {setUser} =  useContext(UserContext);

    const handleClick = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <>
    <h2>Login</h2>  
    <input type="text" placeholder='username' value= {userName} onChange={(e) => setUserName(e.target.value) }/>
    <input type="text" placeholder='password' value= {password} onChange={(e) => setpassword(e.target.value)}/>
    <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default Login