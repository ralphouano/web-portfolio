import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsFolders } from './components/ProjectsFolders';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (

    <>
      <Header />
      
      <main>
        <Hero />
        <About />
        <ProjectsFolders />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-copy">
            © {new Date().getFullYear()} Ralph Ouano. Built with React + TS + Custom CSS.
          </div>

          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/ralphouano" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/ralph-johnson-ouano-7b17b3415" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.facebook.com/rjaywano" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

