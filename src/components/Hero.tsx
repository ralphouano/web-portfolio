import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileJson, FileCode, Sparkles, Cloud } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

type TabType = 'json' | 'ts' | 'yml';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabType>('json');

  // Interactive Code Tabs data
  const tabs = [
    { id: 'json' as TabType, label: 'Profile.json', icon: <FileJson size={14} className="tab-icon json" /> },
    { id: 'ts' as TabType, label: 'Capabilities.ts', icon: <FileCode size={14} className="tab-icon ts" /> },
    { id: 'yml' as TabType, label: 'deploy.yml', icon: <Cloud size={14} className="tab-icon yml" /> }
  ];

  // Render code syntax highlighting structures
  const renderCodeContent = () => {
    switch (activeTab) {
      case 'json':
        return (
          <code className="code-block language-json">
            <span className="c-bracket">{`{`}</span><br />
            <span className="c-indent"></span><span className="c-key">"name"</span>: <span className="c-val">"Ralph Ouano"</span>,<br />
            <span className="c-indent"></span><span className="c-key">"role"</span>: <span className="c-val">"Web Developer"</span>,<br />
            <span className="c-indent"></span><span className="c-key">"education"</span>: <span className="c-val">"BSIT - Saint Columban College"</span>,<br />
            <span className="c-indent"></span><span className="c-key">"specialties"</span>: <span className="c-bracket">[</span><br />
            <span className="c-double-indent"></span><span className="c-val">"Premium UI Engineering"</span>,<br />
            <span className="c-double-indent"></span><span className="c-val">"Scalable API Pipelines"</span>,<br />
            <span className="c-double-indent"></span><span className="c-val">"Real-time Synchronizations"</span><br />
            <span className="c-indent"></span><span className="c-bracket">]</span>,<br />
            <span className="c-indent"></span><span className="c-key">"status"</span>: <span className="c-val">"Active / Ready to build"</span><br />
            <span className="c-bracket">{`}`}</span>
          </code>
        );
      case 'ts':
        return (
          <code className="code-block language-typescript">
            <span className="c-keyword">interface</span> <span className="c-type">Developer</span> <span className="c-bracket">{`{`}</span><br />
            <span className="c-indent"></span>frontend<span className="c-operator">:</span> <span className="c-type">string</span><span className="c-bracket">[]</span>;<br />
            <span className="c-indent"></span>backend<span className="c-operator">:</span> <span className="c-type">string</span><span className="c-bracket">[]</span>;<br />
            <span className="c-bracket">{`}`}</span><br /><br />
            <span className="c-keyword">const</span> ralph<span className="c-operator">:</span> <span className="c-type">Developer</span> <span className="c-operator">=</span> <span className="c-bracket">{`{`}</span><br />
            <span className="c-indent"></span>frontend<span className="c-operator">:</span> <span className="c-bracket">[</span><span className="c-val">'React'</span>, <span className="c-val">'Vue.js'</span>, <span className="c-val">'TypeScript'</span>, <span className="c-val">'Tailwind'</span><span className="c-bracket">]</span>,<br />
            <span className="c-indent"></span>backend<span className="c-operator">:</span> <span className="c-bracket">[</span><span className="c-val">'Laravel'</span>, <span className="c-val">'Node.js'</span>, <span className="c-val">'Firebase'</span>, <span className="c-val">'MySQL'</span>, <span className="c-val">'Docker'</span><span className="c-bracket">]</span><br />
            <span className="c-bracket">{`}`}</span>;
          </code>
        );
      case 'yml':
        return (
          <code className="code-block language-yaml">
            <span className="c-keyword">name:</span> <span className="c-val">Production Build</span><br /><br />
            <span className="c-keyword">env:</span><br />
            <span className="c-indent"></span><span className="c-type">CONTAINER:</span> <span className="c-val">"Docker Engine"</span><br />
            <span className="c-indent"></span><span className="c-type">PLATFORMS:</span> <span className="c-val">"Vercel, Render, Railway"</span><br />
            <span className="c-indent"></span><span className="c-type">SERVER:</span> <span className="c-val">"DigitalOcean Droplet"</span><br /><br />
            <span className="c-keyword">steps:</span><br />
            <span className="c-indent"></span><span className="c-operator">-</span> <span className="c-type">uses:</span> <span className="c-val">actions/checkout@v3</span><br />
            <span className="c-indent"></span><span className="c-operator">-</span> <span className="c-type">run:</span> <span className="c-val">"docker build -t app . && pnpm deploy"</span>
          </code>
        );
    }
  };

  return (
    <section className="hero-sec" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Heading, intro, buttons */}
        <ScrollReveal className="hero-content">
          <div className="hero-badge-row">
            <span className="hero-meta-badge">
              <Terminal size={12} style={{ color: 'var(--accent-color)' }} /> ralph@workspace:~$ init
            </span>
          </div>
          <h1 className="hero-title">
            Designing <span className="text-gradient">high-fidelity</span> user interfaces & robust architecture.
          </h1>
          <p className="hero-desc">
            A web developer dedicated to crafting fluid, premium frontend experiences and maintaining scalable, high-throughput systems on the backend.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Explore Work</a>
            <a href="/resume.pdf" download className="btn btn-secondary">Download Resume</a>
            <a href="#contact" className="hover-link" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none', marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Get in touch <span style={{ transition: 'transform 0.2s ease' }} className="arrow">→</span>
            </a>
          </div>
        </ScrollReveal>
        
        {/* Right Column: Interactive IDE Component */}
        <ScrollReveal className="hero-visual" delayClass="reveal-delay-2">
          <div className="ide-window">
            {/* Window title bar */}
            <div className="ide-header">
              <div className="ide-dots">
                <span className="ide-dot red" />
                <span className="ide-dot yellow" />
                <span className="ide-dot green" />
              </div>
              <span className="ide-title">workspace // ralph-ouano</span>
              <span className="ide-mode-badge"><Sparkles size={11} /> Interactive</span>
            </div>

            {/* Tab choices bar */}
            <div className="ide-tabs-bar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`ide-tab ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Editor contents displaying line numbers & syntax */}
            <div className="ide-body">
              <div className="ide-line-numbers">
                {Array.from({ length: 11 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <div className="ide-code-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="ide-code-wrapper"
                  >
                    <pre>{renderCodeContent()}</pre>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
