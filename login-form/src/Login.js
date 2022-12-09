import React,{useState} from 'react';
import {BiUser} from 'react-icons/bi'

export const Login = (props) => {
    const [email, setEmail]=useState('');
    const [pass,setPass]=useState('');
    const handleSubmit =(e)=>{
      e.preventDefauly();
      console.log(email);
    }

  return (
    <div className='container'>
      <div className='sections'>
        <h2>Login</h2>
        <h2 
          onClick={()=>props.onFormSwitch('register')}
          className="link-btn">
            Register
        </h2>
      </div>
      
      <div className="auth-form-container">
        <form className='login-form'>
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
        <p>
          Forget my password &nbsp; 
          <a  
            onClick={()=> props.onFormSwitch ('register')}
            className="link-btn"> 
            Click here!
          </a>
        </p>
      </div>
    </div>
    
    
  )
}