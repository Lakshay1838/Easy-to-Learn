import React from 'react';
import './Classes.css';

const Classes = () => {
  return (
    <div className="classes-container">
      <div className="left-side">
        <p>Want to Study?</p>
        <div className="arrow">&#8594;</div>
      </div>
      <div className="right-side">
        <div className="class-box">8Th Class</div>
        <div className="class-box">9Th Class</div>
        <div className="class-box">10Th Class</div>
      </div>
    </div>
  );
};

export default Classes;
