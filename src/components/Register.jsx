import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


{/*Store details in local storage.*/}
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Account created successfully! Now you can login.');
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      {/*Form where user enter their details to register.*/}
      <form onSubmit={handleRegister}>
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
        <button type="submit" className="btn btn-primary mt-2">Register</button>
      </form>
      {/*For login*/}
      <p>Already have an account? <a className='text-white' href="/login">Login here</a></p>
    </div>
  );
};

export default Register;
