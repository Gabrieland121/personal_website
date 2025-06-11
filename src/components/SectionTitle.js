import React from 'react';
import AVLAnimation from './AVLAnimation';
import '../styles/SectionTitle.css';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title-container">
      <AVLAnimation position="left" />
      <h2 className="section-title">{title}</h2>
      <AVLAnimation position="right" />
    </div>
  );
};

export default SectionTitle;