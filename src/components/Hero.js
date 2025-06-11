import React from 'react';
import '../styles/Hero.css';
import GraphAnimation from './GraphAnimation';
import SortingAnimation from './SortingAnimation';

function Hero() {
  return (
    <section id="home" className="hero">
      <GraphAnimation />
      <SortingAnimation />
      <div className="hero-content">
        <h1>Hello, I'm Gabe!</h1>
        <h2>Georgia Tech CS Student & Full Stack Developer</h2>
        <p>Specializing in AWS Cloud Solutions and Data Engineering</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;