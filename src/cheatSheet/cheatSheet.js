import React from 'react';
import './cheatSheet.css';

const CheatSheets = () => {
  return (
    <div className="cheatsheets-container">
      <h2>Formula Sheets</h2>
      <div className="sheets-grid">
        <div className="sheet-box">Sheet 1</div>
        <div className="sheet-box">Sheet 2</div>
        <div className="sheet-box">Sheet 3</div>
        <div className="sheet-box">Sheet 4</div>
        <div className="sheet-box">Sheet 5</div>
        <div className="sheet-box">Sheet 6</div>
        <div className="sheet-box">Sheet 7</div>
        <div className="sheet-box">Sheet 8</div>
      </div>
    </div>
  );
};

export default CheatSheets;
