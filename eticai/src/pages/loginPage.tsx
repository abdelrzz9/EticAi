import '../styles/loginPage.css'
import sideimg from '../assets/sideimage.png'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (email === 'admin@doxa.com' && password === 'admin123') {
      navigate('/Dashboard');
    } else {
      setError('Invalid email or password');
    }
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
            {error && <p className='error-message'>{error}</p>}
            <p className='fp'> <a href="#"> forgot Password? </a></p>
            <button type="submit" className='login'>Log-In</button>
      </form>
      </div>
    </div>
    </div>
  );
}



