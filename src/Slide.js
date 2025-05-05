import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ children, isActive }) => {
  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Slide;