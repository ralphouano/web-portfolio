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
        </div>
      </footer>
    </>
  );
}

export default App;

