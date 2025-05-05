import React from 'react';
import Slide from '../Slide';

const Slide10 = ({ isActive }) => {
  return (
    <Slide isActive={isActive}>
      <h2>Merci de votre attention !</h2>
      <div className="mb-8 text-center">
        <h3 className="mb-4">Questions ?</h3>
      </div>
      {/* Contenu de la diapositive */}
    </Slide>
  );
};

export default Slide10;