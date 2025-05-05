// ProgressBar.js - Progress indicator for presentation
import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className="progress-container" aria-hidden="true">
      <div 
        className="progress-bar" 
        style={{ width: `${progress}%` }}
        title={`${Math.round(progress)}% completed`}
      />
    </div>
  );
};

export default ProgressBar;