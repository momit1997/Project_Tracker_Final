import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordPage.css'; 
 
const PasswordPage = (setIsAuthentication) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Validate the password here, for example:
    if (password === 'DL12345') {
    //   setIsAuthentication(true);
      navigate('/search');
    } else {
      alert('Incorrect password');
    }
  };
 
  return (
    <div className="container">
      <div className="form-container"> 
        <h2>Enter Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
 
export default PasswordPage;