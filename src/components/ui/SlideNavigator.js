// SlideNavigator.js - Component to navigate to a specific slide by number
import React, { useState } from 'react';
import '../../styles/navigation.css';

const SlideNavigator = ({ totalSlides, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState('');
  const [error, setError] = useState('');
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setSlideNumber('');
    setError('');
  };
  
  const handleInputChange = (e) => {
    setSlideNumber(e.target.value);
    setError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const num = parseInt(slideNumber, 10);
    
    if (isNaN(num) || num < 1 || num > totalSlides) {
      setError(`Veuillez entrer un numéro entre 1 et ${totalSlides}`);
      return;
    }
    
    onNavigate(num - 1); // Convert to 0-based index
    setIsOpen(false);
    setSlideNumber('');
  };
  
  return (
    <div className="slide-navigator">
      <button 
        className="navigator-toggle"
        onClick={toggleOpen}
        aria-label="Aller à la diapositive"
        title="Aller à la diapositive"
      >
        <span role="img" aria-hidden="true">🔢</span>
      </button>
      
      {isOpen && (
        <div className="navigator-popup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="slide-number">Aller à la diapositive :</label>
            <div className="input-group">
              <input
                id="slide-number"
                type="number"
                min="1"
                max={totalSlides}
                value={slideNumber}
                onChange={handleInputChange}
                placeholder="1-9"
                autoFocus
              />
              <button 
                type="submit"
                aria-label="Aller"
                title="Aller"
              >
                →
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="slide-range">
              (1-{totalSlides})
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SlideNavigator;