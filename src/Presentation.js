import React, { useState, useEffect, useCallback } from 'react';
import './styles/Presentation.css';

// Import des composants
import { 
  ThemeSwitcher, 
  FullscreenToggle, 
  SlideNavigator, 
  ProgressBar, 
  PresentationTimer,
  SlidePreview 
} from './components/ui';

// Import des slides
import { slides } from './slides';

// Accessible emoji component
export const AccessibleEmoji = ({ symbol, label }) => (
  <span role="img" aria-label={label} className="emoji">
    {symbol}
  </span>
);

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);
  
  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide(prevSlide => {
      if (prevSlide < slides.length - 1) {
        return prevSlide + 1;
      }
      return prevSlide;
    });
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide(prevSlide => {
      if (prevSlide > 0) {
        return prevSlide - 1;
      }
      return prevSlide;
    });
  }, []);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);
  
  // Update active slide classes
  useEffect(() => {
    const slideElements = document.querySelectorAll('.slide');
    slideElements.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }, [currentSlide]);
  
  // Apply theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);
  
  return (
    <div className="presentation-container">
      {/* Progress Bar */}
      <ProgressBar 
        current={currentSlide}
        total={slides.length}
      />
      
      {/* Presentation Timer */}
      <PresentationTimer 
        isRunning={true}
        totalTimeInMinutes={15}
      />
      
      {/* Fullscreen Toggle */}
      <FullscreenToggle />
      
      {/* Main content container */}
      <div className="main-content-wrapper">
        {/* Slide container with 80% width */}
        <div className="slide-content-container">
          <div className="slide-container">
            {slides.map((slide, index) => (
              React.cloneElement(slide, {
                isActive: index === currentSlide,
                key: index
              })
            ))}
          </div>
        </div>
      </div>
      
      <div className="presentation-footer">
        <div className="navigation">
          <button 
            className="nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            ←
          </button>
          <div className="slide-indicator">
            {currentSlide + 1} / {slides.length}
          </div>
          <button 
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
        
        {/* Theme Switcher */}
        <ThemeSwitcher 
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        
        {/* Slide Navigator */}
        <SlideNavigator 
          totalSlides={slides.length}
          onNavigate={setCurrentSlide}
        />
      </div>
      
      {/* Slide Preview for quick navigation */}
      <SlidePreview 
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={setCurrentSlide}
      />
    </div>
  );
};

export default Presentation;