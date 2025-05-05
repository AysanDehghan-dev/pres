// SlidePreview.js - Component to display slide thumbnails for quick navigation
import React from 'react';
import '../../styles/slidepreview.css';

const SlidePreview = ({ slides, currentSlide, onSlideSelect }) => {
  return (
    <div className="slide-preview">
      <div className="preview-container">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`preview-item ${index === currentSlide ? 'active' : ''}`}
            onClick={() => onSlideSelect(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSlideSelect(index);
              }
            }}
          >
            <div className="preview-number">{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidePreview;