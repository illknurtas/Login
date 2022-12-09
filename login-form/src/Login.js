import React,{useState} from 'react';

export const Login = () => {
    const [email, setEmail]=useState('');
    const [pass,setPass]=useState('');
  return (
    <form>
        <label htmlFor="email">E-mail:</label>
        <input 
        value={email}
        type="e-mail" 
        placeholder="someone@example.com"
        onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="pass">Password:</label>
        <input 
        value={pass}
        type="password" 
        placeholder="**********"
        id="psw" name="psw"
        onChange={(e)=>setPass(e.target.value)}/>
        <button>Login</button>
    </form>
  )
}