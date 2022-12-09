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
    <div className="container">
      <div className='sections'>
        <h2 
        onClick={()=>props.onFormSwitch('login')}
        className="link-btn">
          Login
        </h2>
        <h2>Register</h2>
      </div>
      <div className="auth-form-container">
        <form className="register-form"> 
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
        <p>
          You already have an account? &nbsp;
          <a
            >
            Login!
          </a>
        </p>
      </div>
    </div>
    
  )
}