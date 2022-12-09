import React,{useState} from 'react';

export const Login = (props) => {
    const [email, setEmail]=useState('');
    const [pass,setPass]=useState('');
    const handleSubmit =(e)=>{
      e.preventDefauly();
      console.log(email);
    }

  return (
    <>
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
      <button
      onClick={()=> props.onFormSwitch ('register')}>
        Don't have an account? Create an account.
      </button>
    </>
    
  )
}