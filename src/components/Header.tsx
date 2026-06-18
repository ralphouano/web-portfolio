import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo" aria-label="Home">
          RALPH OUANO
          <span className="logo-dot" />
        </a>

        
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills & Stack</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="nav-right">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
