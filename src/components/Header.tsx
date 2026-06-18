import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo" aria-label="Home" onClick={closeMenu}>
          RALPH OUANO
          <span className="logo-dot" />
        </a>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills & Stack</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <nav className="mobile-nav">
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
            <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
            <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills & Stack</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};
