import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>DEV@Deakin</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <button>Post</button>
      <button onClick={() => navigate('/login')}>Login</button>
    </header>
  );
};

export default Header;