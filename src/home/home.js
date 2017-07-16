import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title/Title';
import './home.css';

const Home = props => {
  const about = props.aboutSection.paragraphs;
  return (
    <div className="homeBody">
      <Title titleText={props.titleText} />
      <div className="content">
        {about.map(item =>
          <p key={item.key}>
            {item.paragraph}
          </p>
        )}
      </div>
      <div className="buttonGit">
        <Link to="/github">
          <button type="button">Check out some of my projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
