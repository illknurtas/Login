import React,{useState} from "react";

export const Register = (props) => {
  const [email, setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [name, setName] = useState ('');
  const handleSubmit =(e)=>{
    e.preventDefauly();
    console.log(email);
  }

  return (
    <>
      <form>
        <label htmlFor="name">Full name:</label>
        <input value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Write your full name"
        name="name" id="name"/>
        <label htmlFor="email">E-mail:</label>
        <input 
          value={email}
          type="e-mail" 
          placeholder="someone@example.com"
          onChange={(e) => setEmail(e.target.value)}/>          
        <label htmlFor="pass">Password:</label>
        <input value={pass}
          type="password" 
          placeholder="**********"
          id="psw" name="psw"
          onChange={(e)=>setPass(e.target.value)}/>
        <button>Register</button>
      </form>
      <button onClick={()=>props.onFormSwitch('login')}>
        Do you have an account already? Login from here!
      </button>
    </>
  )
}