import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title/Title';
import './home.css';

const Home = () => {
  return (
    <div className="homeBody">
      <Title />
      <div className="buttonGit">
        <Link to="/github">
          <button type="button">I do things</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
