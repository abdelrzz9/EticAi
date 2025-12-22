import React, { useState } from 'react'
import '../styles/loginPage.css'
import sideimg from '../assets/sideimage.png'


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div  className='main'>
    <div >
      <img src={sideimg} alt="DOXA img" className="DOXAimg" />
    </div>
    <div className='inscription'>
      <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
            <h2>Welcome Back!</h2>
            <label htmlFor="emailInput">Email Address :</label>
            <input 
              id='emailInput'
              className='input'
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="passwordInput">Password :</label>

            <input 
              id='passwordInput'
              className='input'
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <p className='fp'> <a href="#"> forgot Password? </a></p>
            <button type="submit" className='login'>Log In</button>
      </form>
      </div>
    </div>
    </div>
  );
}



export default LoginPage;