import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  {/*Update Details*/} 
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { email, password };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Account updated successfully!');
  };
  
  {/*Move to login page*/}
  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div>
      <h2>Account Details</h2>
      {/*The user can see their details here.*/}
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="btn btn-primary mt-2">Update</button>
      </form>
     {/*For Logout*/}
      <a onClick={handleLogout} className='text-white' style={{'margin-right':'300px', 'cursor': 'pointer'}}>
      Logout
      </a>
    </div>
  );
};

export default Account;
