import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { GraduationCap, Code, Server, Sparkles, Cloud } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values to track mouse coordinate offsets for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to 3D rotation angles
  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate coordinate offsets relative to the center of the card
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Education & Details info cards
  const infoCards = [
    {
      icon: <GraduationCap size={22} className="about-card-icon" />,
      title: 'Education',
      subtitle: 'Saint Columban College',
      text: 'Bachelor of Science in Information Technology (BSIT)'
    },
    {
      icon: <Code size={22} className="about-card-icon" />,
      title: 'Frontend Craft',
      subtitle: 'Interactive UI Design',
      text: 'React, Vue, TypeScript, Tailwind CSS, and Framer Motion'
    },
    {
      icon: <Server size={22} className="about-card-icon" />,
      title: 'Backend Systems',
      subtitle: 'Scalable Services',
      text: 'Laravel, Node.js, Firebase, MySQL, Supabase, and Postgres'
    },
    {
      icon: <Cloud size={22} className="about-card-icon" />,
      title: 'Docker, Cloud & CI/CD',
      subtitle: 'Containers & Pipelines',
      text: 'Docker, DigitalOcean, Render, Vercel, Railway, and Actions'
    }
  ];

  return (
    <section className="about-sec" id="about">
      <div className="container">
        {/* Entrance motion container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="about-header"
        >
          <span className="about-meta">
            <Sparkles size={14} style={{ color: 'var(--accent-color)' }} /> Personal Profile
          </span>
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            A look into my academic journey, visual style, and tech focus.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left Column: Biography & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-left"
          >
            <p className="about-bio">
              I am <strong>Ralph Ouano</strong>, a graduate of <strong>BSIT from Saint Columban College</strong> and a passionate <strong>Fullstack Engineer</strong>. I specialize in building responsive, high-fidelity frontends while maintaining fast, reliable backend microservices.
            </p>
            <p className="about-bio">
              With experience designing real-time ordering canteen systems, digitized government logging applications, and high-performance WebRTC utilities, I focus on delivering seamless software solutions that integrate aesthetics and robust engineering.
            </p>

            {/* Sub-grid Cards */}
            <div className="about-cards-grid">
              {infoCards.map((card, idx) => (
                <div className="about-info-card" key={idx}>
                  <div className="about-card-header">
                    {card.icon}
                    <div>
                      <h4 className="about-card-title">{card.title}</h4>
                      <span className="about-card-sub">{card.subtitle}</span>
                    </div>
                  </div>
                  <p className="about-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Circular HUD Profile Frame with 3D Mouse-tracking Tilt */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="about-right"
          >
            <div className="profile-hud-container">
              {/* Outer Dashed spinning ring */}
              <div className="hud-ring outer-dashed" />
              
              {/* Middle Dotted spinning ring */}
              <div className="hud-ring middle-dotted" />

              {/* Inner pulsing glow backdrop */}
              <div className="hud-neon-glow" />

              {/* HUD Brackets */}
              <div className="hud-bracket top-left" />
              <div className="hud-bracket top-right" />
              <div className="hud-bracket bottom-left" />
              <div className="hud-bracket bottom-right" />

              {/* Telemetry labels */}
              <span className="hud-telemetry top-label">UNIT_01 // ACTIVE</span>
              <span className="hud-telemetry bottom-label">[LOCKED: 48.06]</span>

              {/* 3D Tilt interactive wrapper card */}
              <motion.div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  rotateX, 
                  rotateY, 
                  transformStyle: 'preserve-3d',
                  perspective: 1000 
                }}
                className="hud-tilt-card"
              >
                <div className="hud-image-wrapper" style={{ transform: 'translateZ(30px)' }}>
                  <img 
                    src={profileImg} 
                    alt="Ralph Ouano Profile" 
                    className="hud-portrait" 
                  />
                  
                  {/* Glowing scanline sweep animation */}
                  <div className="hud-scanline" />
                  
                  {/* Glare effect */}
                  <div className="hud-glass-glare" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
