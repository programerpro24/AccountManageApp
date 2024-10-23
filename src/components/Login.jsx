import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


{/*Retrieve details from local storage and check them.*/}  
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/account');
    } else {
      alert('Invalid credentials or user does not exist');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/*Form where user enter their details to Login.*/}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
          type="email" 
          value={email}
          class="form-control" 
          placeholder="E-mail" 
          aria-label="E-mail" 
          aria-describedby="addon-wrapping"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>
        <div>
          <input 
          type="password" 
          value={password}
          className="form-control mt-3" 
          placeholder="Password" 
          aria-label="Password" 
          aria-describedby="addon-wrapping"
          onChange={(e) => setPassword(e.target.value)} 
          required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Login</button>
      </form>

      {/*For register*/}
      <p>Don't have an account? <Link className='text-white' to='/register'>Register here</Link></p>
    </div>
  );
};

export default Login;
