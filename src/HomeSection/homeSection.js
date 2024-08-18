import React from 'react';
import './homeSection.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="image-container">
        <img src="https://via.placeholder.com/800x400.png?text=Students+Studying" alt="Students studying" />
      </div>
      <div className="scrolling-message">
        <p>Scroll to continue study</p>
      </div>
    </section>
  );
};

export default Home;
