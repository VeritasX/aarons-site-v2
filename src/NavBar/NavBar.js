import React from 'react';
import { Link } from 'react-router-dom';
import navProfilePic from '../images/face.jpg';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <header>
        <h1>
          {'<Aaron Endsley/>'}
        </h1>
        <div className="brand">
          <div className="imageFloat2">
            <div className="imgContainer2">
              <img src={navProfilePic} alt={`Aaron Endsley`} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
