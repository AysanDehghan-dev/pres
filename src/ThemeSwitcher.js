// ThemeSwitcher.js - Component to toggle between light and dark themes
import React from 'react';

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
  return (
    <button 
      className="theme-switcher"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Activer le thème clair" : "Activer le thème sombre"}
      title={isDarkMode ? "Thème clair" : "Thème sombre"}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;