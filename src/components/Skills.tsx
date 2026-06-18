import { Cpu, Layout } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Skill {
  name: string;
  percentage: number;
  subtext: string;
}

export const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'React & Vue.js', percentage: 95, subtext: 'Vue/Inertia routing, React custom hooks, state optimization.' },
    { name: 'TypeScript & Alpine.js', percentage: 90, subtext: 'Advanced type safety, lightweight interactive Alpine binding engines.' },
    { name: 'Tailwind CSS & Design Systems', percentage: 95, subtext: 'Utility-first styling, responsive grids, and custom animations.' },
    { name: 'Performance & SEO', percentage: 88, subtext: 'Lighthouse scoring, asset loading optimization, and semantic tags.' }
  ];

  const backendSkills: Skill[] = [
    { name: 'Laravel & PHP', percentage: 92, subtext: 'MVC architecture, Livewire reactive blocks, and Eloquent ORM.' },
    { name: 'Node.js & Firebase', percentage: 85, subtext: 'Asynchronous event loops, REST APIs, and Firebase real-time sync.' },
    { name: 'Databases (MySQL & Postgres)', percentage: 90, subtext: 'Schema design, complex queries, indexing, and Supabase integrations.' },
    { name: 'Docker, Cloud & CI/CD', percentage: 85, subtext: 'Containerization, Deployments via DigitalOcean, Render, Vercel, Railway, and Actions.' }
  ];

  return (
    <section className="skills-sec" id="skills">
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Expertise & Stack</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            A comprehensive stack tailored for building responsive web apps with fast render cycles and clean modular code.
          </p>
        </ScrollReveal>

        <ScrollReveal className="skills-grid" delayClass="reveal-delay-2">
          {/* Frontend Directory */}
          <div className="skills-column">
            <h3 className="skills-col-title">
              <Layout size={24} />
              Frontend Engineering
            </h3>
            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-track">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <span className="skill-subtext">{skill.subtext}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Directory */}
          <div className="skills-column">
            <h3 className="skills-col-title">
              <Cpu size={24} />
              Backend Architecture
            </h3>
            <div className="skill-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-track">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <span className="skill-subtext">{skill.subtext}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
