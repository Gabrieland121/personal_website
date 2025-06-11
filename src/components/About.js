import React from 'react';
import '../styles/About.css';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title="About Me" />
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo Here</span>
            </div>
          </div>
          <div className="about-text">
            <h3>Background</h3>
            <p>
              I'm a Computer Science student at Georgia Institute of Technology with concentrations in Theory and Information Internetworks, 
              pursuing the International Plan with study abroad experience in Hong Kong and China. Based in Atlanta, a city I've grown to love 
              for its vibrant tech scene, diverse culture, and incredible food. 
            </p>
            
            <h3>Academic Interests</h3>
            <p>
              My passion lies in computing theory and algorithms. I'm fascinated by the elegant mathematical foundations that underpin computer science—from 
              complexity theory and automata to the design and analysis of efficient algorithms. There's something deeply satisfying about optimizing a solution, 
              reducing its time complexity, or proving its correctness. I enjoy exploring advanced topics like graph theory, computational geometry, and 
              the mathematics behind machine learning algorithms.
            </p>
            
            <h3>Website Design Philosophy</h3>
            <p>
              This passion for computing theory and algorithms directly inspired the design of this website. The animated graph traversals and visualizations 
              you see throughout the site aren't just aesthetic choices—they're representations of the elegant algorithms that fascinate me. The network graphs 
              demonstrate breadth-first search traversals, while the sorting visualizations showcase algorithmic efficiency. I wanted my personal website to be 
              a living demonstration of the beauty I see in computer science theory, combining cyberpunk aesthetics with actual algorithmic principles.
            </p>
            
            <h3>Travel & Culinary Exploration</h3>
            <p>
              Beyond computer science, I'm an avid traveler who seizes every opportunity to explore new places and cultures. My international 
              experiences have shaped my perspective and approach to problem-solving. I'm particularly passionate about culinary exploration—discovering 
              new restaurants and diverse cuisines is one of my favorite ways to experience different cultures. Atlanta's rich food scene has been 
              a perfect playground for this passion, offering everything from authentic international cuisines to innovative Southern fusion.
            </p>
            
            <h3>Other Interests</h3>
            <p>
              I'm also drawn to complex systems and how small changes can lead to significant outcomes. This interest extends to my work in computer science, 
              where I enjoy exploring how initial conditions affect algorithmic results and system behaviors. Understanding these relationships helps me 
              approach problem-solving from unique perspectives and appreciate the interconnected nature of technology and the world around us.
            </p>
            
            <h3>Professional Goals</h3>
            <p>
              My goal is to create something impactful for the world's greater good by applying my knowledge of theoretical computer science, algorithms, 
              and data engineering to solve complex problems. I'm constantly exploring the intersection of theory and practice, looking for opportunities 
              to build elegant solutions to challenging real-world problems, all while continuing to explore the world one city a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;