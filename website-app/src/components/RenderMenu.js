import React from 'react';

const RenderMenu = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dropdown-menu">
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      <button onClick={() => scrollToSection('hobbies')}>My Hobbies</button>
      <button onClick={() => scrollToSection('social-media')}>Social Media</button>
    </div>
  );
};

export default RenderMenu;
