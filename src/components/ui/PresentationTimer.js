// PresentationTimer.js - Timer component for tracking presentation duration
import React, { useState, useEffect } from 'react';
import '../../styles/navigation.css';

const PresentationTimer = ({ isRunning = true, totalTimeInMinutes = 15 }) => {
  const [seconds, setSeconds] = useState(0);
  const totalTimeInSeconds = totalTimeInMinutes * 60;
  
  // Timer effect
  useEffect(() => {
    let timerInterval;
    
    if (isRunning && seconds < totalTimeInSeconds) {
      timerInterval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    
    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isRunning, seconds, totalTimeInSeconds]);
  
  // Format time as mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate percentage of time used
  const timePercentage = (seconds / totalTimeInSeconds) * 100;
  
  // Determine timer color based on percentage
  const getTimerColor = () => {
    if (timePercentage < 70) return 'var(--primary)';
    if (timePercentage < 90) return 'orange';
    return 'red';
  };
  
  return (
    <div className="timer-container">
      <div className="timer" style={{ color: getTimerColor() }}>
        {formatTime(seconds)} / {formatTime(totalTimeInSeconds)}
      </div>
    </div>
  );
};

export default PresentationTimer;