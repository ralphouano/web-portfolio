import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProjectTab {
  label: string;
  url: string;
  svgType: 'telemetry' | 'analytics' | 'canvas' | 'logs' | 'performance' | 'scc-dashboard' | 'scc-home' | 'scc-login' | 'sss-entry' | 'sss-admin-dashboard' | 'sss-admin-monthly' | 'sss-login' | 'ssshare-home' | 'ssshare-dropzone' | 'ssshare-transfer' | 'image';
  scrollOffset: string;
  imageSrc?: string;
}

interface Project {
  id: string;
  index: string;
  title: string;
  summary: string;
  category: string;
  techStack: string[];
  context: {
    problem: string;
    frontend: string;
    backend: string;
  };
  tabs: ProjectTab[];
}

export const ProjectsFolders = () => {
  const [openFolderId, setOpenFolderId] = useState<string | null>('proj-pulse'); // Keep first open
  const [lightboxData, setLightboxData] = useState<{ projectId: string; tabIndex: number } | null>(null);

  // Track active tabs state for all projects
  const [activeTabs, setActiveTabs] = useState<Record<string, number>>({
    'proj-pulse': 0,
    'proj-scc': 0,
    'proj-sss': 0,
    'proj-ssshare': 0
  });

  const projects: Project[] = [
    {
      id: 'proj-pulse',
      index: 'DIR_001',
      title: 'Pulse: Ephemeral P2P Chat & Video (Technical Assessment)',
      summary: 'Refactored, secured, and redesigned a highly buggy, broken, and unpolished anonymous WebRTC connection codebase into a high-performance production-ready application.',
      category: 'Fullstack / Security Hardening',
      techStack: ['React 19', 'Next.js 16', 'WebRTC', 'Mapbox GL', 'Prisma 7', 'PostgreSQL', 'Web Audio API', 'Vanilla CSS'],
      context: {
        problem: 'Inherited a broken assessment codebase with critical bugs: WebRTC data channel buffer crashes, coordinate leakage (triangulation risk), unauthenticated signaling (IDOR), heavy database load from polling, and an unpolished user experience. The objective was to make it run, make it secure, beautiful, and performant.',
        frontend: 'Rebuilt the user interface from scratch with premium dark-mode glassmorphism. Added a synthesized audio UX (Web Audio API) for sound effects, client-side HEIC/HEIF image conversion with lazy loading, and an interactive Mapbox GL globe.',
        backend: 'Hardened system security by introducing cryptographic session secrets to block signaling exploits (IDOR). Optimized signaling traffic with a dynamic polling throttle (down to 300ms during handshakes) and wrote a stale signal database garbage collector.'
      },
      tabs: [
        { label: 'Interactive Map', url: 'pulse-technical-assessment-2hg8.vercel.app/map', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/pulse/pulse-map.png' },
        { label: 'Lobby Landing', url: 'pulse-technical-assessment-2hg8.vercel.app', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/pulse/pulse-landing.png' },
        { label: 'Video Connection', url: 'pulse-technical-assessment-2hg8.vercel.app/room/active', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/pulse/pulse-chat-video.png' },
        { label: 'Image Preview', url: 'pulse-technical-assessment-2hg8.vercel.app/room/active', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/pulse/pulse-chat-image.png' }
      ]
    },
    {
      id: 'proj-scc',
      index: 'DIR_002',
      title: 'SCC Canteen: Campus Food Reservation System',
      summary: 'Real-time meal reservation portal built for Saint Columban College. Features synchronized inventories and order queues.',
      category: 'Fullstack / Realtime',
      techStack: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS', 'Laravel Reverb', 'Redis', 'MySQL'],
      context: {
        problem: 'School canteen lines suffered from peak breaks congestion. Staff struggled to predict serving quantities, leading to food waste and delayed orders.',
        frontend: 'Developed a responsive dual-panel ordering client, dynamic menu cards with interactive reservation states, a clean split-panel institutional auth screen, and a staff analytics dashboard.',
        backend: 'Integrated Laravel Reverb (WebSockets) for real-time queue notifications. Configured Redis cache stores to serialize menu counts, preventing race conditions on inventory locks.'
      },
      tabs: [
        { label: 'Staff Dashboard', url: 'scc-canteen.online/staff/dashboard', svgType: 'scc-dashboard', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Client Reservation', url: 'scc-canteen.online/reserve', svgType: 'scc-home', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Institutional Auth', url: 'scc-canteen.online/login', svgType: 'scc-login', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Defense & Panels', url: 'scc-canteen.online/defense', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/scc/scc-defense.jpg' },
        { label: 'Client Turnover', url: 'scc-canteen.online/turnover', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/scc/scc-client-cert.jpg' },
        { label: 'Dean Turnover', url: 'scc-canteen.online/turnover-dean', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/scc/scc-dean.jpg' }
      ]
    },
    {
      id: 'proj-sss',
      index: 'DIR_003',
      title: 'SSS Daily Transaction Logs: Gov Digitization System',
      summary: 'Custom digital logbook engine custom-designed for a government agency branch to track daily counter visitors.',
      category: 'Fullstack / Database',
      techStack: ['Laravel (VILT)', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'Canvas API'],
      context: {
        problem: 'Daily citizen visits and transaction details were recorded in physical paper logbooks, leading to untrackable queues, illegible entries, and audit compliance issues.',
        frontend: 'Built a responsive digital form featuring an interactive member HTML5 Signature Pad canvas, and multi-select search filters to tag transaction types.',
        backend: 'Implemented Vue/Inertia routing interfaces on Laravel. Structured relational visitor schema databases in PostgreSQL via Supabase, storing base64 signature strings securely.'
      },
      tabs: [
        { label: 'Transaction Entry', url: 'sss-logs.gov.ph/entry', svgType: 'sss-entry', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Admin Dashboard', url: 'sss-logs.gov.ph/admin/dashboard', svgType: 'sss-admin-dashboard', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Monthly Transactions', url: 'sss-logs.gov.ph/admin/monthly', svgType: 'sss-admin-monthly', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Staff Login', url: 'sss-logs.gov.ph/login', svgType: 'sss-login', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Turnover & Certs', url: 'sss-logs.gov.ph/turnover', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/sss/sss-mss-section.jpg' },
        { label: 'Branch Head Turnover', url: 'sss-logs.gov.ph/turnover-head', svgType: 'image', scrollOffset: '0', imageSrc: '/projects/sss/sss-branch-head.jpg' }
      ]
    },
    {
      id: 'proj-ssshare',
      index: 'DIR_004',
      title: 'FileSSShare: WebRTC Peer-to-Peer File Sharing',
      summary: 'A fun WebRTC file sharing utility built with React, Node.js, and Reverb for instant device-to-device transfers regardless of local network constraints.',
      category: 'Fullstack / Realtime P2P',
      techStack: ['React', 'Node.js', 'Laravel Reverb', 'WebRTC', 'Tailwind CSS', 'HTML5 File API'],
      context: {
        problem: 'Sharing files across devices connected to different networks (e.g. cellular data to home WiFi) without relying on heavy cloud uploads or centralized databases that store user content.',
        frontend: 'Developed a neon-dark themed workspace with dynamic drag-and-drop file target zones, real-time download speed meters, chunked progress bars, and temporary session keys.',
        backend: 'Configured a Node.js coordinator and Laravel Reverb WebSocket signaling gateway to establish P2P WebRTC mesh connections. Streamed encrypted byte chunks directly between browsers.'
      },
      tabs: [
        { label: 'Lobby Connection', url: 'ssshare.net', svgType: 'ssshare-home', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'File Dropzone', url: 'ssshare.net/room/48c294dd', svgType: 'ssshare-dropzone', scrollOffset: 'calc(-100% + 320px)' },
        { label: 'Transfer Progress', url: 'ssshare.net/room/48c294dd', svgType: 'ssshare-transfer', scrollOffset: 'calc(-100% + 320px)' }
      ]
    }
  ];

  const toggleFolder = (id: string) => {
    setOpenFolderId(openFolderId === id ? null : id);
  };

  const openLightbox = (projectId: string, tabIndex: number) => {
    setLightboxData({ projectId, tabIndex });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLightboxData((prev) => {
        if (!prev) return null;
        
        if (e.key === 'Escape') {
          return null;
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          const project = projects.find(p => p.id === prev.projectId);
          if (!project) return prev;
          
          const direction = e.key === 'ArrowRight' ? 1 : -1;
          let newIndex = prev.tabIndex + direction;
          
          if (newIndex >= project.tabs.length) newIndex = 0;
          if (newIndex < 0) newIndex = project.tabs.length - 1;
          
          return { projectId: project.id, tabIndex: newIndex };
        }
        return prev;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projects]);

  const handleTabClick = (projectId: string, tabIndex: number) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tabIndex }));
  };

  // Render high-fidelity theme-adaptive vector SVGs
  const renderMockupSVG = (type: 'telemetry' | 'analytics' | 'canvas' | 'logs' | 'performance' | 'scc-dashboard' | 'scc-home' | 'scc-login' | 'sss-entry' | 'sss-admin-dashboard' | 'sss-admin-monthly' | 'sss-login' | 'ssshare-home' | 'ssshare-dropzone' | 'ssshare-transfer' | 'image', isLightbox = false) => {
    const width = "100%";
    const height = isLightbox ? "auto" : "750px"; // Tall layout so it scrolls on hover inside 320px frame

    if (type === 'sss-entry') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#f0f4f8', display: 'block' }}>
          {/* SSS Blue Header */}
          <rect width="400" height="40" fill="#003da5" />
          {/* SSS Logo (Three white curves) */}
          <g transform="translate(15, 8)">
            <rect width="24" height="24" rx="4" fill="#ffffff" />
            <path d="M 4 8 C 8 4, 16 4, 20 8 M 4 12 C 8 8, 16 8, 20 12 M 4 16 C 8 12, 16 12, 20 16" fill="none" stroke="#003da5" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="48" y="24" fill="#ffffff" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold">SSS Daily Transaction Logs</text>
          
          <rect x="330" y="10" width="55" height="20" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <text x="357" y="22" fill="#ffffff" fontSize="7.5" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Staff login</text>
          
          {/* Title Panel */}
          <rect x="15" y="55" width="370" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <text x="30" y="80" fill="#0c2340" fontSize="12" fontFamily="var(--font-heading)" fontWeight="bold">Transaction Entry</text>
          
          {/* Form wrapper */}
          <rect x="15" y="110" width="370" height="625" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          
          {/* Record Transaction Title */}
          <text x="30" y="135" fill="#003da5" fontSize="11" fontFamily="var(--font-sans)" fontWeight="bold">Record Transaction</text>
          <text x="30" y="150" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Fill in the member details and select transaction types</text>
          
          {/* Input 1: Assisted By */}
          <text x="30" y="175" fill="#475569" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold">Assisted by</text>
          <rect x="30" y="185" width="340" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="204" fill="#0f172a" fontSize="9" fontFamily="var(--font-sans)">Ralph</text>
          
          {/* Input 2: Assisted Member Name */}
          <text x="30" y="235" fill="#475569" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold">Assisted Member Name</text>
          <rect x="30" y="245" width="340" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="264" fill="#0f172a" fontSize="9" fontFamily="var(--font-sans)">John Doe</text>
          
          {/* Input 3: Transaction Types */}
          <text x="30" y="295" fill="#475569" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold">Transaction Types</text>
          <rect x="30" y="305" width="340" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="324" fill="#94a3b8" fontSize="9" fontFamily="var(--font-sans)">Type to search transaction type...</text>
          
          {/* Dropdown Options */}
          <rect x="30" y="340" width="340" height="135" rx="4" fill="#ffffff" stroke="#e2e8f0" />
          <g fontSize="8.5" fontFamily="var(--font-sans)" fill="#334155">
            <rect x="30" y="340" width="340" height="27" fill="#f8fafc" />
            <text x="42" y="357" fill="#003da5" fontWeight="bold">✓  Contribution Details</text>
            <line x1="30" y1="367" x2="370" y2="367" stroke="#f1f5f9" />
            
            <text x="42" y="384">✓  Generate PRN</text>
            <line x1="30" y1="394" x2="370" y2="394" stroke="#f1f5f9" />
            
            <text x="42" y="411">✓  DAEM</text>
            <line x1="30" y1="421" x2="370" y2="421" stroke="#f1f5f9" />
            
            <text x="42" y="438" fontWeight="bold">✓  Issuance of SSS number</text>
            <line x1="30" y1="448" x2="370" y2="448" stroke="#f1f5f9" />
            
            <text x="42" y="465" fontWeight="bold">✓  Web Registration</text>
          </g>
          
          {/* Member Signature Canvas */}
          <text x="30" y="495" fill="#475569" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold">Member Signature</text>
          <rect x="30" y="505" width="340" height="130" rx="4" fill="#ffffff" stroke="#3b82f6" strokeDasharray="3,3" />
          
          {/* Simulated signature drawing path */}
          <path d="M 70 585 C 110 535, 150 605, 230 555 C 270 525, 290 585, 330 545" fill="none" stroke="#003da5" strokeWidth="2.5" />
          
          {/* Signature Buttons */}
          <rect x="260" y="481" width="50" height="18" rx="4" fill="#f1f5f9" stroke="#cbd5e1" />
          <text x="285" y="493" fill="#475569" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle">Undo</text>
          
          <rect x="315" y="481" width="55" height="18" rx="4" fill="#ef4444" />
          <text x="342" y="493" fill="#ffffff" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Clear</text>
          
          {/* Submit Action */}
          <rect x="30" y="665" width="340" height="38" rx="6" fill="#003da5" />
          <text x="200" y="688" fill="#ffffff" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">SUBMIT TRANSACTION</text>
        </svg>
      );
    } else if (type === 'sss-admin-dashboard') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#f8fafc', display: 'block' }}>
          {/* SSS Blue Header */}
          <rect width="400" height="40" fill="#003da5" />
          <g transform="translate(15, 8)">
            <rect width="24" height="24" rx="4" fill="#ffffff" />
            <path d="M 4 8 C 8 4, 16 4, 20 8 M 4 12 C 8 8, 16 8, 20 12 M 4 16 C 8 12, 16 12, 20 16" fill="none" stroke="#003da5" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="48" y="24" fill="#ffffff" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold">SSS Daily Transaction Logs</text>
          
          <rect x="315" y="10" width="70" height="20" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <text x="350" y="22" fill="#ffffff" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Admin User ▾</text>
          
          {/* Title Panel */}
          <rect x="15" y="55" width="370" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <text x="30" y="80" fill="#0c2340" fontSize="12" fontFamily="var(--font-heading)" fontWeight="bold">Admin Dashboard</text>
          
          {/* Navigation link widgets (Left-side bar simulation) */}
          <rect x="15" y="110" width="100" height="150" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <g fontSize="8.5" fontFamily="var(--font-sans)" fill="#64748b">
            <text x="22" y="125" fill="#94a3b8" fontWeight="bold">ADMIN NAVIGATION</text>
            
            <rect x="20" y="135" width="90" height="22" rx="4" fill="#eff6ff" />
            <text x="28" y="149" fill="#003da5" fontWeight="bold">Dashboard</text>
            
            <text x="28" y="179">Monthly Transactions</text>
            <text x="28" y="209">Public Intern Form</text>
          </g>
          
          {/* Metric cards (3 side-by-side columns) */}
          {/* Card 1 */}
          <rect x="125" y="110" width="80" height="65" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" />
          <text x="133" y="125" fill="#64748b" fontSize="7.2" fontFamily="var(--font-sans)" fontWeight="bold">Transactions Today</text>
          <text x="133" y="158" fill="#003da5" fontSize="22" fontFamily="var(--font-mono)" fontWeight="bold">1</text>
          
          {/* Card 2 */}
          <rect x="212" y="110" width="80" height="65" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="220" y="125" fill="#64748b" fontSize="7.2" fontFamily="var(--font-sans)">Transactions Month</text>
          <text x="220" y="158" fill="#0f172a" fontSize="22" fontFamily="var(--font-mono)" fontWeight="bold">1</text>
          
          {/* Card 3 */}
          <rect x="299" y="110" width="80" height="65" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="307" y="125" fill="#64748b" fontSize="7.2" fontFamily="var(--font-sans)">Active Interns Today</text>
          <text x="307" y="158" fill="#0f172a" fontSize="22" fontFamily="var(--font-mono)" fontWeight="bold">1</text>
          
          {/* Central logs table panel */}
          <rect x="125" y="190" width="260" height="230" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="0.5" />
          <text x="135" y="212" fill="#003da5" fontSize="10.5" fontFamily="var(--font-sans)" fontWeight="bold">Today's Recorded Transactions</text>
          <text x="135" y="227" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">2026-06-11</text>
          
          {/* Table Headers */}
          <g fontSize="8" fontFamily="var(--font-sans)" fill="#475569" fontWeight="bold">
            <text x="135" y="255">Intern</text>
            <text x="170" y="255">Member</text>
            <text x="215" y="255">Types</text>
            <text x="375" y="255" textAnchor="end">Time</text>
            <line x1="135" y1="262" x2="375" y2="262" stroke="#e2e8f0" />
          </g>
          
          {/* Table Row 1 */}
          <g fontSize="8.5" fontFamily="var(--font-sans)" fill="#0f172a">
            <text x="135" y="282">Ralph</text>
            <text x="170" y="282">John Doe</text>
            {/* Split tags capsules */}
            <rect x="212" y="272" width="37" height="13" rx="3" fill="#e0f2fe" />
            <text x="230" y="281" fill="#0369a1" fontSize="6.5" textAnchor="middle" fontWeight="bold">Issuance</text>
            
            <rect x="252" y="272" width="45" height="13" rx="3" fill="#dcfce7" />
            <text x="274" y="281" fill="#15803d" fontSize="6.5" textAnchor="middle" fontWeight="bold">Web Reg</text>
            
            <rect x="300" y="272" width="28" height="13" rx="3" fill="#f3e8ff" />
            <text x="314" y="281" fill="#6b21a8" fontSize="6.5" textAnchor="middle" fontWeight="bold">DAEM</text>
            
            <text x="375" y="282" fill="#64748b" fontSize="7.5" fontFamily="var(--font-mono)" textAnchor="end">02:57:12 PM</text>
          </g>
        </svg>
      );
    } else if (type === 'sss-admin-monthly') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#f8fafc', display: 'block' }}>
          {/* SSS Blue Header */}
          <rect width="400" height="40" fill="#003da5" />
          <g transform="translate(15, 8)">
            <rect width="24" height="24" rx="4" fill="#ffffff" />
            <path d="M 4 8 C 8 4, 16 4, 20 8 M 4 12 C 8 8, 16 8, 20 12 M 4 16 C 8 12, 16 12, 20 16" fill="none" stroke="#003da5" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="48" y="24" fill="#ffffff" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold">SSS Daily Transaction Logs</text>
          
          <rect x="315" y="10" width="70" height="20" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
          <text x="350" y="22" fill="#ffffff" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Admin User ▾</text>
          
          {/* Title Panel */}
          <rect x="15" y="55" width="370" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <text x="30" y="80" fill="#0c2340" fontSize="12" fontFamily="var(--font-heading)" fontWeight="bold">Monthly Transactions</text>
          
          {/* Navigation link widgets (Left-side bar simulation) */}
          <rect x="15" y="110" width="100" height="150" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <g fontSize="8.5" fontFamily="var(--font-sans)" fill="#64748b">
            <text x="22" y="125" fill="#94a3b8" fontWeight="bold">ADMIN NAVIGATION</text>
            <text x="28" y="149">Dashboard</text>
            
            <rect x="20" y="165" width="90" height="22" rx="4" fill="#eff6ff" />
            <text x="28" y="179" fill="#003da5" fontWeight="bold">Monthly Transactions</text>
            
            <text x="28" y="209">Public Intern Form</text>
          </g>
          
          {/* Transaction type counts widget */}
          <rect x="15" y="275" width="100" height="130" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <g fontSize="8" fontFamily="var(--font-sans)">
            <text x="22" y="290" fill="#94a3b8" fontWeight="bold">TRANSACTION TYPE COUNTS</text>
            
            <text x="22" y="315" fill="#475569">DAEM</text>
            <rect x="88" y="306" width="18" height="12" rx="3" fill="#f1f5f9" />
            <text x="97" y="315" fill="#003da5" fontWeight="bold" textAnchor="middle">1</text>
            
            <text x="22" y="338" fill="#475569">Issuance Of Sss Number</text>
            <rect x="88" y="336" width="18" height="12" rx="3" fill="#f1f5f9" />
            <text x="97" y="345" fill="#003da5" fontWeight="bold" textAnchor="middle">1</text>
            
            <text x="22" y="368" fill="#475569">Web Registration</text>
            <rect x="88" y="366" width="18" height="12" rx="3" fill="#f1f5f9" />
            <text x="97" y="375" fill="#003da5" fontWeight="bold" textAnchor="middle">1</text>
          </g>
          
          {/* Central logs table panel */}
          <rect x="125" y="110" width="260" height="420" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
          <text x="135" y="130" fill="#003da5" fontSize="10.5" fontFamily="var(--font-sans)" fontWeight="bold">Monthly Transactions</text>
          <text x="135" y="142" fill="#64748b" fontSize="7.5" fontFamily="var(--font-sans)">Track all transactions and filter by month for report generation</text>
          
          {/* Top buttons */}
          <rect x="310" y="121" width="30" height="15" rx="3" fill="#ffffff" stroke="#cbd5e1" />
          <text x="325" y="131" fill="#475569" fontSize="7" textAnchor="middle" fontFamily="var(--font-sans)">Print</text>
          
          <rect x="343" y="121" width="35" height="15" rx="3" fill="#003da5" />
          <text x="360" y="131" fill="#ffffff" fontSize="7" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-sans)">Export XLSX</text>
          
          {/* Filter Bar */}
          <rect x="135" y="160" width="240" height="45" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="142" y="172" fill="#64748b" fontSize="7" fontFamily="var(--font-sans)" fontWeight="bold">Filter Month</text>
          <rect x="142" y="177" width="80" height="18" rx="3" fill="#ffffff" stroke="#cbd5e1" />
          <text x="148" y="189" fill="#0f172a" fontSize="7.5" fontFamily="var(--font-mono)">June 2026 📅</text>
          
          <text x="240" y="172" fill="#3b82f6" fontSize="6.5" fontFamily="var(--font-sans)" fontWeight="bold">MONTHLY TOTAL</text>
          <text x="240" y="191" fill="#003da5" fontSize="16" fontFamily="var(--font-mono)" fontWeight="bold">1</text>
          
          <rect x="300" y="172" width="65" height="22" rx="4" fill="#003da5" />
          <text x="332" y="186" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-sans)">Apply Month</text>
          
          {/* Table Headers */}
          <g fontSize="7.5" fontFamily="var(--font-sans)" fill="#475569" fontWeight="bold">
            <text x="135" y="225">ID</text>
            <text x="150" y="225">Timestamp</text>
            <text x="190" y="225">Intern</text>
            <text x="215" y="225">Member Name</text>
            <text x="270" y="225">Transaction</text>
            <text x="315" y="225">Signature</text>
            <text x="350" y="225">Action</text>
            <line x1="135" y1="231" x2="378" y2="231" stroke="#cbd5e1" />
          </g>
          
          {/* Group Header */}
          <rect x="135" y="235" width="243" height="15" fill="#eff6ff" />
          <text x="142" y="245" fill="#003da5" fontSize="7.5" fontFamily="var(--font-sans)" fontWeight="bold">Thursday, June 11, 2026</text>
          
          {/* Row 1 */}
          <g fontSize="7.5" fontFamily="var(--font-sans)" fill="#334155">
            <text x="138" y="270">1</text>
            <text x="150" y="270" fill="#64748b" fontFamily="var(--font-mono)">02:57:12 PM</text>
            <text x="190" y="270">Ralph</text>
            <text x="215" y="270" fontWeight="bold">John Doe</text>
            <text x="270" y="265" fill="#003da5" fontSize="6.5">Issuance</text>
            <text x="270" y="273" fill="#15803d" fontSize="6.5">Web Reg</text>
            <text x="270" y="281" fill="#6b21a8" fontSize="6.5">DAEM</text>
            
            {/* Signature Box */}
            <rect x="312" y="255" width="30" height="20" rx="3" fill="#ffffff" stroke="#e2e8f0" />
            <path d="M 314 268 C 320 260, 325 272, 335 264" fill="none" stroke="#003da5" strokeWidth="1" />
            
            {/* Action Button */}
            <rect x="347" y="257" width="31" height="15" rx="3" fill="#ffffff" stroke="#cbd5e1" />
            <text x="362" y="267" fill="#0f172a" fontSize="6" textAnchor="middle" fontFamily="var(--font-sans)">View Consent</text>
          </g>
        </svg>
      );
    } else if (type === 'sss-login') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#003da5', display: 'block' }}>
          {/* Government agency blue screen */}
          
          {/* Centered Login Card */}
          <rect x="40" y="150" width="320" height="420" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* SSS Logo inside square */}
          <g transform="translate(176, 175)">
            <rect width="48" height="48" rx="8" fill="#003da5" />
            <path d="M 8 16 C 16 8, 32 8, 40 16 M 8 24 C 16 16, 32 16, 40 24 M 8 32 C 16 24, 32 24, 40 32" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
          </g>
          
          <text x="200" y="265" fill="#003da5" fontSize="18" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Social Security System</text>
          <text x="200" y="290" fill="#003da5" fontSize="14" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">SSS Daily Transaction Logs</text>
          <text x="200" y="310" fill="#64748b" fontSize="8.5" fontFamily="var(--font-sans)" textAnchor="middle">Sign in using your office account credentials.</text>
          
          {/* Email field */}
          <text x="65" y="345" fill="#475569" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold">Email</text>
          <rect x="65" y="355" width="270" height="34" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="75" y="376" fill="#0f172a" fontSize="9.5" fontFamily="var(--font-sans)">ralph@ouano.dev</text>
          
          {/* Password field */}
          <text x="65" y="410" fill="#475569" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold">Password</text>
          <rect x="65" y="420" width="270" height="34" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="75" y="441" fill="#94a3b8" fontSize="12" fontFamily="var(--font-mono)">••••••••••••</text>
          
          {/* Checkbox and link */}
          <rect x="65" y="470" width="10" height="10" rx="2" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M 67 475 L 69 477 L 73 473" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="80" y="478" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Remember me</text>
          <text x="335" y="478" fill="#475569" fontSize="8" fontFamily="var(--font-sans)" textAnchor="end">Forgot your password? Contact the developer.</text>
          
          {/* Blue Login Button */}
          <rect x="65" y="505" width="270" height="38" rx="6" fill="#003da5" />
          <text x="200" y="528" fill="#ffffff" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">LOG IN</text>
        </svg>
      );
    } else if (type === 'scc-dashboard') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#f8fafc', display: 'block' }}>
          {/* Header Bar */}
          <rect width="400" height="40" fill="#0b4625" />
          <text x="20" y="25" fill="#ffffff" fontSize="12" fontFamily="var(--font-sans)" fontWeight="bold">SCC Canteen Staff Dashboard</text>
          <circle cx="370" cy="20" r="4" fill="#10b981" />

          {/* Top Panel Nav Simulation */}
          <rect x="0" y="40" width="400" height="30" fill="#ffffff" stroke="#e2e8f0" />
          <text x="20" y="58" fill="#0b4625" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold">Dashboard</text>
          <text x="80" y="58" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Menu</text>
          <text x="120" y="58" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Serving</text>
          <text x="170" y="58" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Reservations</text>
          <text x="230" y="58" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Sales</text>

          {/* Dashboard Title */}
          <text x="20" y="100" fill="#0f172a" fontSize="16" fontFamily="var(--font-sans)" fontWeight="bold">Dashboard</text>
          <text x="20" y="115" fill="#64748b" fontSize="9" fontFamily="var(--font-sans)">Performance analytics and insights</text>

          {/* Period selector */}
          <rect x="20" y="135" width="80" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="30" y="147" fill="#334155" fontSize="8" fontFamily="var(--font-sans)">Last 7 Days</text>
          <rect x="110" y="135" width="45" height="20" rx="4" fill="#0b4625" />
          <text x="132" y="147" fill="#ffffff" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle">Refresh</text>

          {/* 4 Stats Cards */}
          {/* Card 1 */}
          <rect x="20" y="170" width="170" height="70" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <circle cx="40" cy="205" r="12" fill="#f0fdf4" />
          <text x="40" y="209" fill="#166534" fontSize="10" textAnchor="middle" fontWeight="bold">📁</text>
          <text x="60" y="195" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Total Reservations</text>
          <text x="60" y="220" fill="#0f172a" fontSize="16" fontFamily="var(--font-mono)" fontWeight="bold">0</text>

          {/* Card 2 */}
          <rect x="210" y="170" width="170" height="70" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <circle cx="230" cy="205" r="12" fill="#f0fdf4" />
          <text x="230" y="209" fill="#166534" fontSize="10" textAnchor="middle" fontWeight="bold">₱</text>
          <text x="250" y="195" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Total Revenue</text>
          <text x="250" y="220" fill="#0f172a" fontSize="15" fontFamily="var(--font-mono)" fontWeight="bold">₱0</text>

          {/* Card 3 */}
          <rect x="20" y="255" width="170" height="70" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <circle cx="40" cy="290" r="12" fill="#fffbeb" />
          <text x="40" y="294" fill="#b45309" fontSize="10" textAnchor="middle" fontWeight="bold">📈</text>
          <text x="60" y="280" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Avg Order Value</text>
          <text x="60" y="305" fill="#0f172a" fontSize="15" fontFamily="var(--font-mono)" fontWeight="bold">₱0.00</text>

          {/* Card 4 */}
          <rect x="210" y="255" width="170" height="70" rx="6" fill="#ffffff" stroke="#e2e8f0" />
          <circle cx="230" cy="290" r="12" fill="#f5f3ff" />
          <text x="230" y="294" fill="#5b21b6" fontSize="10" textAnchor="middle" fontWeight="bold">📊</text>
          <text x="250" y="280" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)">Growth Rate</text>
          <text x="250" y="305" fill="#0f172a" fontSize="16" fontFamily="var(--font-mono)" fontWeight="bold">0%</text>

          {/* Revenue Trend Section */}
          <rect x="20" y="340" width="360" height="210" rx="8" fill="#ffffff" stroke="#e2e8f0" />
          <text x="35" y="365" fill="#0f172a" fontSize="11" fontFamily="var(--font-sans)" fontWeight="bold">Revenue Trend</text>

          {/* Y Axis Labels */}
          <g fontSize="7" fontFamily="var(--font-mono)" fill="#94a3b8">
            <text x="35" y="395">₱1.00</text>
            <text x="35" y="415">₱0.80</text>
            <text x="35" y="435">₱0.60</text>
            <text x="35" y="455">₱0.40</text>
            <text x="35" y="475">₱0.20</text>
            <text x="35" y="495">₱0.00</text>
          </g>
          {/* Axis lines */}
          <line x1="65" y1="392" x2="360" y2="392" stroke="#f1f5f9" />
          <line x1="65" y1="412" x2="360" y2="412" stroke="#f1f5f9" />
          <line x1="65" y1="432" x2="360" y2="432" stroke="#f1f5f9" />
          <line x1="65" y1="452" x2="360" y2="452" stroke="#f1f5f9" />
          <line x1="65" y1="472" x2="360" y2="472" stroke="#f1f5f9" />
          <line x1="65" y1="492" x2="360" y2="492" stroke="#cbd5e1" strokeWidth="1" />

          {/* Top Food Items (Empty State) */}
          <rect x="20" y="565" width="360" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0" />
          <text x="35" y="590" fill="#0f172a" fontSize="11" fontFamily="var(--font-sans)" fontWeight="bold">Top Food Items</text>
          <text x="35" y="615" fill="#94a3b8" fontSize="8.5" fontFamily="var(--font-sans)">Only items with 25 or more sold units are displayed here.</text>

          {/* Bottom Daily Performance footer metrics */}
          <rect x="20" y="680" width="360" height="55" rx="8" fill="#ffffff" stroke="#e2e8f0" />
          <text x="35" y="700" fill="#0f172a" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold">Daily Performance</text>
          <text x="35" y="718" fill="#22c55e" fontSize="9" fontFamily="var(--font-mono)">Today: 0</text>
          <text x="140" y="718" fill="#64748b" fontSize="9" fontFamily="var(--font-mono)">Yesterday: 0</text>
          <text x="260" y="718" fill="#22c55e" fontSize="9" fontFamily="var(--font-mono)">Change: 0%</text>
        </svg>
      );
    } else if (type === 'scc-home') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#f8fafc', display: 'block' }}>
          {/* Header bar */}
          <rect width="400" height="40" fill="#ffffff" stroke="#e2e8f0" />
          <text x="20" y="25" fill="#0b4625" fontSize="13" fontFamily="var(--font-sans)" fontWeight="bold">SCC Canteen</text>
          <rect x="300" y="10" width="40" height="20" rx="4" fill="transparent" />
          <text x="320" y="23" fill="#0b4625" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle">Login</text>
          <rect x="345" y="10" width="45" height="20" rx="4" fill="#0b4625" />
          <text x="367" y="23" fill="#ffffff" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Register</text>

          {/* Hero Food Banner Visual */}
          <rect x="0" y="40" width="400" height="220" fill="#1e293b" />
          {/* Food illustrations simulation inside hero */}
          <g opacity="0.3">
            <circle cx="80" cy="150" r="60" fill="#d97706" />
            <circle cx="320" cy="150" r="60" fill="#059669" />
            <rect x="120" y="100" width="160" height="100" rx="8" fill="#b45309" />
          </g>
          {/* Banner dark overlay */}
          <rect x="0" y="40" width="400" height="220" fill="rgba(0,0,0,0.55)" />

          {/* Banner Text overlay */}
          <text x="200" y="100" fill="#ffffff" fontSize="24" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Reserve Your Meals Online</text>
          <text x="200" y="125" fill="#f1f5f9" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle">Skip the line, reserve your food, and pick it up when ready!</text>
          <text x="200" y="140" fill="#cbd5e1" fontSize="9" fontFamily="var(--font-sans)" textAnchor="middle">Experience the convenience of modern food reservation at SCC.</text>

          {/* Get Started Button */}
          <rect x="150" y="165" width="100" height="30" rx="6" fill="#d9a435" />
          <text x="200" y="184" fill="#0b4625" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">⚡ Get Started</text>

          {/* How It Works Header */}
          <text x="200" y="310" fill="#0f172a" fontSize="18" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">How It Works</text>
          <text x="200" y="330" fill="#64748b" fontSize="10" fontFamily="var(--font-sans)" textAnchor="middle">Getting started is simple. Follow these easy steps to reserve your meals.</text>

          {/* Step 1 */}
          <circle cx="200" cy="400" r="24" fill="#0b4625" />
          <text x="200" y="406" fill="#ffffff" fontSize="16" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle">1</text>
          <text x="200" y="445" fill="#0f172a" fontSize="12" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">Browse &amp; Select</text>
          <text x="200" y="465" fill="#64748b" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle">Browse our daily menu and select your favorite items.</text>
          <text x="200" y="480" fill="#64748b" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle">Choose quantities and add to tray.</text>

          {/* Step 2 */}
          <circle cx="200" cy="530" r="24" fill="#0b4625" />
          <text x="200" y="536" fill="#ffffff" fontSize="16" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle">2</text>
          <text x="200" y="575" fill="#0f172a" fontSize="12" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">Reserve &amp; Confirm</text>
          <text x="200" y="595" fill="#64748b" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle">Complete your reservation and wait for staff confirmation.</text>
          <text x="200" y="610" fill="#64748b" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle">You will get a notification when ready.</text>

          {/* Step 3 */}
          <circle cx="200" cy="660" r="24" fill="#0b4625" />
          <text x="200" y="666" fill="#ffffff" fontSize="16" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle">3</text>
          <text x="200" y="705" fill="#0f172a" fontSize="12" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">Pick Up &amp; Enjoy</text>
          <text x="200" y="725" fill="#64748b" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle">Pick up your food within 10 minutes of confirmation.</text>
        </svg>
      );
    } else if (type === 'scc-login') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#f5f7f5', display: 'block' }}>
          {/* Split Screen Layout */}

          {/* Left Panel: Green image background simulation */}
          <rect x="0" y="0" width="160" height="750" fill="#0d3f23" />
          {/* Canteen background vectors */}
          <g opacity="0.1" stroke="#ffffff" strokeWidth="1" fill="none">
            <rect x="20" y="100" width="120" height="80" rx="4" />
            <line x1="20" y1="230" x2="140" y2="230" />
            <line x1="20" y1="260" x2="140" y2="260" />
            <rect x="40" y="350" width="80" height="150" rx="6" />
          </g>

          {/* College logo symbol */}
          <circle cx="80" cy="200" r="28" fill="#ffffff" stroke="#cca23d" strokeWidth="3" />
          <circle cx="80" cy="200" r="23" fill="#0b4625" />
          <text x="80" y="205" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-heading)">SCC</text>

          <text x="80" y="260" fill="#ffffff" fontSize="12" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">SCC CANTEEN</text>
          <text x="80" y="275" fill="#cca23d" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Food Reservation System</text>

          {/* Checkbox bullet lists on green left side */}
          <g fill="#ffffff" fontSize="7" fontFamily="var(--font-sans)">
            <text x="25" y="320">✓  Skip the line, reserve online</text>
            <text x="25" y="340">✓  Real-time availability tracking</text>
            <text x="25" y="360">✓  Secure and reliable service</text>
          </g>

          {/* Right Panel: White login form box */}
          <rect x="160" y="0" width="240" height="750" fill="#f4f5f1" />

          {/* Form Card Card */}
          <rect x="180" y="80" width="200" height="380" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />

          <text x="280" y="125" fill="#0f172a" fontSize="16" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">Welcome Back</text>
          <text x="280" y="142" fill="#64748b" fontSize="8" fontFamily="var(--font-sans)" textAnchor="middle">Sign in to your account to continue</text>

          {/* Email field */}
          <text x="195" y="180" fill="#475569" fontSize="8" fontFamily="var(--font-sans)" fontWeight="bold">Email Address</text>
          <rect x="195" y="190" width="170" height="30" rx="6" fill="#ffffff" stroke="#d9a435" strokeWidth="1.5" />
          <text x="205" y="209" fill="#94a3b8" fontSize="9" fontFamily="var(--font-sans)">@ Enter your email address</text>

          {/* Password field */}
          <text x="195" y="245" fill="#475569" fontSize="8" fontFamily="var(--font-sans)" fontWeight="bold">Password</text>
          <rect x="195" y="255" width="170" height="30" rx="6" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
          <text x="205" y="274" fill="#94a3b8" fontSize="9" fontFamily="var(--font-sans)">🔒 Enter your password</text>

          {/* Remember me & Forgot Password */}
          <rect x="195" y="303" width="7" height="7" rx="1.5" fill="#ffffff" stroke="#cbd5e1" />
          <text x="207" y="310" fill="#64748b" fontSize="7" fontFamily="var(--font-sans)">Remember me</text>
          <text x="365" y="310" fill="#0b4625" fontSize="7" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="end">Forgot password?</text>

          {/* Sign In Button */}
          <rect x="195" y="335" width="170" height="32" rx="6" fill="#0b4625" />
          <text x="280" y="354" fill="#ffffff" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">🚪 SIGN IN</text>

          <text x="280" y="395" fill="#64748b" fontSize="7.5" fontFamily="var(--font-sans)" textAnchor="middle">Don't have an account? <tspan fill="#0b4625" fontWeight="bold">Create one here</tspan></text>

          {/* Footer credentials info */}
          <text x="280" y="580" fill="#64748b" fontSize="7.5" fontFamily="var(--font-sans)" textAnchor="middle">About   |   FAQ</text>
          <text x="280" y="610" fill="#94a3b8" fontSize="6.5" fontFamily="var(--font-sans)" textAnchor="middle">© 2025 Made with ❤️ by DevTech Team for SCC Canteen.</text>
        </svg>
      );
    } else if (type === 'telemetry') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'var(--bg-panel)', display: 'block' }}>
          {/* Header Bar */}
          <rect width="400" height="40" fill="var(--browser-bar-bg)" />
          <text x="20" y="25" fill="var(--text-primary)" fontSize="12" fontFamily="var(--font-mono)" fontWeight="bold">TELEMETRY STATS</text>
          <circle cx="370" cy="20" r="4" fill="var(--success)" />

          {/* Section 1: Metrics Cards */}
          <rect x="20" y="60" width="170" height="80" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="85" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">CPU LOAD (AVG)</text>
          <text x="35" y="115" fill="var(--accent-color)" fontSize="20" fontFamily="var(--font-mono)" fontWeight="bold">12.4 %</text>

          <rect x="210" y="60" width="170" height="80" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="225" y="85" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">INGESTION RATE</text>
          <text x="225" y="115" fill="var(--text-primary)" fontSize="18" fontFamily="var(--font-mono)" fontWeight="bold">52,140/s</text>

          {/* Section 2: Active Graph */}
          <rect x="20" y="160" width="360" height="150" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="185" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Ingestion Throughput (last 60s)</text>

          {/* Grid lines */}
          <line x1="40" y1="220" x2="360" y2="220" stroke="var(--border-color)" strokeDasharray="3,3" />
          <line x1="40" y1="260" x2="360" y2="260" stroke="var(--border-color)" strokeDasharray="3,3" />

          {/* Chart Line */}
          <path d="M 40 270 Q 80 210 120 250 T 200 200 T 280 240 T 360 190" fill="none" stroke="var(--accent-color)" strokeWidth="2.5" />
          <path d="M 40 270 Q 80 210 120 250 T 200 200 T 280 240 T 360 190 L 360 280 L 40 280 Z" fill="rgba(var(--accent-color-rgb), 0.08)" />

          {/* Section 3: System Logs */}
          <rect x="20" y="330" width="360" height="240" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="355" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Real-time Stream Parser Logs</text>

          {/* Log Lines */}
          <g fontFamily="var(--font-mono)" fontSize="9">
            <text x="35" y="385" fill="var(--text-muted)">[18:42:01.002] INF: Spawning grpc node-2 worker</text>
            <text x="35" y="405" fill="var(--success)">[18:42:01.050] INF: Node balance completed. Latency: 0.4ms</text>
            <text x="35" y="425" fill="var(--text-muted)">[18:42:01.810] DBG: Flushing batch buffer, size=8192</text>
            <text x="35" y="445" fill="var(--text-muted)">[18:42:02.100] DBG: Ring-buffer active check index=4</text>
            <text x="35" y="465" fill="var(--accent-color)">[18:42:02.450] WRN: Cache eviction policy triggered (LRU)</text>
            <text x="35" y="485" fill="var(--text-muted)">[18:42:03.002] INF: Pipeline state verified. Ingest: 52k/s</text>
            <text x="35" y="505" fill="var(--success)">[18:42:03.110] INF: Database commit pool transaction ok</text>
            <text x="35" y="525" fill="var(--text-muted)">[18:42:04.050] DBG: Buffer cycle refresh: 0 errors detected</text>
            <text x="35" y="545" fill="var(--text-muted)">[18:42:04.102] INF: Checking sync gateways...</text>
          </g>

          {/* Section 4: System Architecture Diagram */}
          <rect x="20" y="590" width="360" height="135" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="615" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Service Architecture Mapping</text>

          <g fontSize="8" fontFamily="var(--font-mono)" fill="var(--text-primary)">
            {/* Box 1 */}
            <rect x="35" y="640" width="70" height="30" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="70" y="658" textAnchor="middle">Log Source</text>

            {/* Arrow */}
            <line x1="105" y1="655" x2="135" y2="655" stroke="var(--text-muted)" strokeWidth="1.5" />
            <polygon points="135,655 130,652 130,658" fill="var(--text-muted)" />

            {/* Box 2 */}
            <rect x="135" y="640" width="90" height="30" rx="4" fill="var(--bg-panel)" stroke="var(--accent-color)" />
            <text x="180" y="658" textAnchor="middle" fontWeight="bold">Go Ingest Parser</text>

            {/* Arrow 1 */}
            <line x1="225" y1="650" x2="255" y2="640" stroke="var(--text-muted)" strokeWidth="1.5" />
            <polygon points="255,640 249,639 252,644" fill="var(--text-muted)" />

            {/* Arrow 2 */}
            <line x1="225" y1="660" x2="255" y2="670" stroke="var(--text-muted)" strokeWidth="1.5" />
            <polygon points="255,670 252,666 249,671" fill="var(--text-muted)" />

            {/* Box 3 Top */}
            <rect x="255" y="625" width="110" height="22" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="310" y="638" textAnchor="middle">Redis Buffer</text>

            {/* Box 3 Bottom */}
            <rect x="255" y="660" width="110" height="22" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="310" y="673" textAnchor="middle">Postgres Sync</text>

            <text x="35" y="705" fill="var(--text-muted)" fontSize="8">Double-buffered thread-safe transaction architecture layout.</text>
          </g>
        </svg>
      );
    } else if (type === 'analytics') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'var(--bg-panel)', display: 'block' }}>
          {/* Header Bar */}
          <rect width="400" height="40" fill="var(--browser-bar-bg)" />
          <text x="20" y="25" fill="var(--text-primary)" fontSize="12" fontFamily="var(--font-mono)" fontWeight="bold">DATAVIBE APP</text>
          <circle cx="370" cy="20" r="4" fill="var(--accent-color)" />

          {/* Top Info Banner */}
          <rect x="20" y="60" width="360" height="60" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="85" fill="var(--text-primary)" fontSize="14" fontFamily="var(--font-heading)" fontWeight="bold">Metrics Workspace</text>
          <text x="35" y="103" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-sans)">Aggregating data sync streams from Shopify, Stripe, and Sendgrid.</text>

          {/* Charts Row */}
          <rect x="20" y="140" width="230" height="180" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="165" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Revenue Stream Aggregation</text>

          {/* Bar Charts */}
          <g fill="var(--accent-color)">
            <rect x="50" y="250" width="18" height="40" rx="2" opacity="0.6" />
            <rect x="80" y="210" width="18" height="80" rx="2" />
            <rect x="110" y="230" width="18" height="60" rx="2" opacity="0.8" />
            <rect x="140" y="190" width="18" height="100" rx="2" />
            <rect x="170" y="220" width="18" height="70" rx="2" opacity="0.7" />
            <rect x="200" y="170" width="18" height="120" rx="2" />
          </g>
          {/* Chart Axis */}
          <line x1="40" y1="290" x2="230" y2="290" stroke="var(--text-muted)" strokeWidth="1" />
          <g fontSize="7" fill="var(--text-muted)" fontFamily="var(--font-mono)">
            <text x="59" y="305" textAnchor="middle">JAN</text>
            <text x="89" y="305" textAnchor="middle">FEB</text>
            <text x="119" y="305" textAnchor="middle">MAR</text>
            <text x="149" y="305" textAnchor="middle">APR</text>
            <text x="179" y="305" textAnchor="middle">MAY</text>
            <text x="209" y="305" textAnchor="middle">JUN</text>
          </g>

          {/* Sidebar breakdown */}
          <rect x="260" y="140" width="120" height="180" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="272" y="165" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-heading)" fontWeight="bold">Sources</text>

          {/* Circular donut chart mockup */}
          <circle cx="320" cy="225" r="30" fill="none" stroke="var(--border-color)" strokeWidth="8" />
          <circle cx="320" cy="225" r="30" fill="none" stroke="var(--accent-color)" strokeWidth="8" strokeDasharray="140 100" strokeDashoffset="20" />

          <g fontSize="8" fontFamily="var(--font-mono)" fill="var(--text-primary)">
            <text x="275" y="285">● Stripe (65%)</text>
            <text x="275" y="300" fill="var(--text-muted)">● Shopify (35%)</text>
          </g>

          {/* Table section */}
          <rect x="20" y="340" width="360" height="230" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="365" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Recent Transactions (Webhooks Log)</text>

          {/* Custom Virtual Grid rows */}
          <g fontSize="9" fontFamily="var(--font-mono)">
            {/* Headers */}
            <text x="35" y="395" fill="var(--text-muted)" fontWeight="bold">TX_ID</text>
            <text x="110" y="395" fill="var(--text-muted)" fontWeight="bold">SOURCE</text>
            <text x="220" y="395" fill="var(--text-muted)" fontWeight="bold">AMOUNT</text>
            <text x="310" y="395" fill="var(--text-muted)" fontWeight="bold">STATUS</text>
            <line x1="35" y1="403" x2="365" y2="403" stroke="var(--border-color)" />

            {/* Row 1 */}
            <text x="35" y="423" fill="var(--text-primary)">tx_781042</text>
            <text x="110" y="423">Stripe.api</text>
            <text x="220" y="423" fill="var(--success)">+$450.00</text>
            <text x="310" y="423" fill="var(--success)">COMPLETED</text>
            <line x1="35" y1="432" x2="365" y2="432" stroke="var(--border-color)" />

            {/* Row 2 */}
            <text x="35" y="452" fill="var(--text-primary)">tx_104289</text>
            <text x="110" y="452">Shopify.v2</text>
            <text x="220" y="452" fill="var(--success)">+$1,299.00</text>
            <text x="310" y="452" fill="var(--success)">COMPLETED</text>
            <line x1="35" y1="461" x2="365" y2="461" stroke="var(--border-color)" />

            {/* Row 3 */}
            <text x="35" y="481" fill="var(--text-primary)">tx_998104</text>
            <text x="110" y="481">Sendgrid.e</text>
            <text x="220" y="481" fill="var(--text-primary)">$0.00</text>
            <text x="310" y="481" fill="var(--accent-color)">QUEUED</text>
            <line x1="35" y1="490" x2="365" y2="490" stroke="var(--border-color)" />

            {/* Row 4 */}
            <text x="35" y="510" fill="var(--text-primary)">tx_881249</text>
            <text x="110" y="510">Stripe.api</text>
            <text x="220" y="510" fill="var(--success)">+$89.00</text>
            <text x="310" y="510" fill="var(--success)">COMPLETED</text>
            <line x1="35" y1="519" x2="365" y2="519" stroke="var(--border-color)" />

            {/* Row 5 */}
            <text x="35" y="539" fill="var(--text-primary)">tx_772091</text>
            <text x="110" y="539">Shopify.v2</text>
            <text x="220" y="539" fill="var(--success)">+$840.50</text>
            <text x="310" y="539" fill="var(--success)">COMPLETED</text>
          </g>

          {/* Section 4: Performance Meter */}
          <rect x="20" y="590" width="360" height="135" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="615" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Query Plan Optimization Analysis</text>

          <g fontSize="8" fontFamily="var(--font-mono)">
            <text x="35" y="640" fill="var(--text-secondary)">Query Type: Recursive CTE hierarchical rollup index search</text>
            <text x="35" y="655" fill="var(--text-muted)">EXPLAIN ANALYZE result:</text>
            <rect x="35" y="665" width="330" height="45" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="45" y="682" fill="var(--success)">{"->"} Index Scan using txn_pkey on transactions  (cost=0.15..12.50 rows=1)</text>
            <text x="45" y="697" fill="var(--success)">{"->"} Planning Time: 0.114 ms | Execution Time: 0.890 ms</text>
          </g>
        </svg>
      );
    } else if (type === 'canvas') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'var(--bg-panel)', display: 'block' }}>
          {/* Header Bar */}
          <rect width="400" height="40" fill="var(--browser-bar-bg)" />
          <text x="20" y="25" fill="var(--text-primary)" fontSize="12" fontFamily="var(--font-mono)" fontWeight="bold">ZENBOARD EDITOR</text>
          <circle cx="370" cy="20" r="4" fill="#ffbd2e" />

          {/* Top Canva Control Panel */}
          <rect x="20" y="60" width="360" height="50" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <g fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">
            <rect x="35" y="72" width="50" height="24" rx="4" fill="var(--bg-panel)" stroke="var(--accent-color)" strokeWidth="1" />
            <text x="60" y="87" textAnchor="middle" fill="var(--accent-color)" fontWeight="bold">SELECT</text>

            <rect x="95" y="72" width="50" height="24" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="120" y="87" textAnchor="middle">DRAW</text>

            <rect x="155" y="72" width="50" height="24" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="180" y="87" textAnchor="middle">ARROW</text>

            <rect x="215" y="72" width="50" height="24" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="240" y="87" textAnchor="middle">TEXT</text>

            <text x="365" y="87" textAnchor="end" fill="var(--text-primary)" fontWeight="bold">CO-OP ON</text>
          </g>

          {/* Canvas grid background */}
          <rect x="20" y="130" width="360" height="420" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />

          {/* Grid Dots */}
          <g fill="var(--border-color)" opacity="0.7">
            <circle cx="40" cy="150" r="1.5" /><circle cx="80" cy="150" r="1.5" /><circle cx="120" cy="150" r="1.5" /><circle cx="160" cy="150" r="1.5" /><circle cx="200" cy="150" r="1.5" /><circle cx="240" cy="150" r="1.5" /><circle cx="280" cy="150" r="1.5" /><circle cx="320" cy="150" r="1.5" /><circle cx="360" cy="150" r="1.5" />
            <circle cx="40" cy="190" r="1.5" /><circle cx="80" cy="190" r="1.5" /><circle cx="120" cy="190" r="1.5" /><circle cx="160" cy="190" r="1.5" /><circle cx="200" cy="190" r="1.5" /><circle cx="240" cy="190" r="1.5" /><circle cx="280" cy="190" r="1.5" /><circle cx="320" cy="190" r="1.5" /><circle cx="360" cy="190" r="1.5" />
            <circle cx="40" cy="230" r="1.5" /><circle cx="80" cy="230" r="1.5" /><circle cx="120" cy="230" r="1.5" /><circle cx="160" cy="230" r="1.5" /><circle cx="200" cy="230" r="1.5" /><circle cx="240" cy="230" r="1.5" /><circle cx="280" cy="230" r="1.5" /><circle cx="320" cy="230" r="1.5" /><circle cx="360" cy="230" r="1.5" />
            <circle cx="40" cy="270" r="1.5" /><circle cx="80" cy="270" r="1.5" /><circle cx="120" cy="270" r="1.5" /><circle cx="160" cy="270" r="1.5" /><circle cx="200" cy="270" r="1.5" /><circle cx="240" cy="270" r="1.5" /><circle cx="280" cy="270" r="1.5" /><circle cx="320" cy="270" r="1.5" /><circle cx="360" cy="270" r="1.5" />
            <circle cx="40" cy="310" r="1.5" /><circle cx="80" cy="310" r="1.5" /><circle cx="120" cy="310" r="1.5" /><circle cx="160" cy="310" r="1.5" /><circle cx="200" cy="310" r="1.5" /><circle cx="240" cy="310" r="1.5" /><circle cx="280" cy="310" r="1.5" /><circle cx="320" cy="310" r="1.5" /><circle cx="360" cy="310" r="1.5" />
            <circle cx="40" cy="350" r="1.5" /><circle cx="80" cy="350" r="1.5" /><circle cx="120" cy="350" r="1.5" /><circle cx="160" cy="350" r="1.5" /><circle cx="200" cy="350" r="1.5" /><circle cx="240" cy="350" r="1.5" /><circle cx="280" cy="350" r="1.5" /><circle cx="320" cy="350" r="1.5" /><circle cx="360" cy="350" r="1.5" />
            <circle cx="40" cy="390" r="1.5" /><circle cx="80" cy="390" r="1.5" /><circle cx="120" cy="390" r="1.5" /><circle cx="160" cy="390" r="1.5" /><circle cx="200" cy="390" r="1.5" /><circle cx="240" cy="390" r="1.5" /><circle cx="280" cy="390" r="1.5" /><circle cx="320" cy="390" r="1.5" /><circle cx="360" cy="390" r="1.5" />
            <circle cx="40" cy="430" r="1.5" /><circle cx="80" cy="430" r="1.5" /><circle cx="120" cy="430" r="1.5" /><circle cx="160" cy="430" r="1.5" /><circle cx="200" cy="430" r="1.5" /><circle cx="240" cy="430" r="1.5" /><circle cx="280" cy="430" r="1.5" /><circle cx="320" cy="430" r="1.5" /><circle cx="360" cy="430" r="1.5" />
            <circle cx="40" cy="470" r="1.5" /><circle cx="80" cy="470" r="1.5" /><circle cx="120" cy="470" r="1.5" /><circle cx="160" cy="470" r="1.5" /><circle cx="200" cy="470" r="1.5" /><circle cx="240" cy="470" r="1.5" /><circle cx="280" cy="470" r="1.5" /><circle cx="320" cy="470" r="1.5" /><circle cx="360" cy="470" r="1.5" />
            <circle cx="40" cy="510" r="1.5" /><circle cx="80" cy="510" r="1.5" /><circle cx="120" cy="510" r="1.5" /><circle cx="160" cy="510" r="1.5" /><circle cx="200" cy="510" r="1.5" /><circle cx="240" cy="510" r="1.5" /><circle cx="280" cy="510" r="1.5" /><circle cx="320" cy="510" r="1.5" /><circle cx="360" cy="510" r="1.5" />
          </g>

          {/* Node Element 1 */}
          <rect x="50" y="180" width="100" height="60" rx="6" fill="var(--bg-panel)" stroke="var(--border-color)" strokeWidth="1.5" />
          <text x="100" y="210" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Landing Design</text>
          <text x="100" y="225" fill="var(--text-muted)" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">id: node_01</text>

          {/* Connection arrow line */}
          <path d="M 150 210 L 250 210" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="4,4" />
          <polygon points="250,210 244,206 244,214" fill="var(--accent-color)" />

          {/* Node Element 2 */}
          <rect x="250" y="180" width="100" height="60" rx="6" fill="var(--bg-panel)" stroke="var(--accent-color)" strokeWidth="2" />
          <text x="300" y="210" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Auth Flow Schema</text>
          <text x="300" y="225" fill="var(--accent-color)" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">Active Editing</text>

          {/* Avatars on canvas */}
          <circle cx="260" cy="170" r="8" fill="#10b981" />
          <text x="260" y="173" fontSize="7" fill="#fff" textAnchor="middle" fontFamily="var(--font-mono)">JD</text>
          <text x="272" y="162" fill="#10b981" fontSize="6" fontFamily="var(--font-mono)">John D.</text>

          <circle cx="340" cy="250" r="8" fill="#ec4899" />
          <text x="340" y="253" fontSize="7" fill="#fff" textAnchor="middle" fontFamily="var(--font-mono)">EL</text>

          {/* Handdrawn shape simulation */}
          <path d="M 60 280 Q 180 340 340 310" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
          <text x="200" y="325" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">User journey flow arrow</text>

          {/* Section 4: WebSocket Sync Status Widget */}
          <rect x="20" y="570" width="360" height="155" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1" />
          <text x="35" y="595" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Real-time Coordination Terminal</text>

          <g fontSize="8.5" fontFamily="var(--font-mono)" fill="var(--text-secondary)">
            <text x="35" y="620">WS State: <tspan fill="var(--success)">CONNECTED</tspan> | RTT Ping: <tspan fill="var(--success)">12ms</tspan></text>
            <text x="35" y="635" fill="var(--text-muted)">Buffer delta transmission logs:</text>
            <text x="35" y="655">{">>"} Client SEND: {`{"event":"mouse_move","x":284,"y":122,"node":"node_02"}`}</text>
            <text x="35" y="675">{">>"} Gateway RECV: {`{"event":"broadcast","payload":{"user":"John D.","x":284}}`}</text>
            <text x="35" y="695" fill="var(--success)">{">>"} State Sync: Double-buffer frames flushed, duration=0.8ms</text>
          </g>
        </svg>
      );
    } else if (type === 'logs') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: '#07070a', display: 'block' }}>
          {/* Header Bar */}
          <rect width="400" height="40" fill="#15151c" />
          <text x="20" y="25" fill="#f3f4f6" fontSize="12" fontFamily="var(--font-mono)" fontWeight="bold">SYSTEM LOG WORKSPACE</text>
          <circle cx="370" cy="20" r="4" fill="var(--browser-dot-yellow)" />

          {/* Active Shell Console Screen */}
          <rect x="15" y="60" width="370" height="670" rx="8" fill="#010103" stroke="var(--border-color)" />
          <text x="30" y="90" fill="var(--accent-color)" fontSize="10.5" fontFamily="var(--font-mono)">root@production-gateway-node-1:~# tail -f /var/log/nginx/access.log</text>

          <g fontSize="9" fontFamily="var(--font-mono)" fill="#ffffff" opacity="0.95">
            <text x="30" y="115" fill="var(--text-muted)">172.18.0.5 - [16/Jun/2026:18:52:01] "GET /api/v1/session" 200</text>
            <text x="30" y="130" fill="var(--text-muted)">172.18.0.5 - [16/Jun/2026:18:52:01] "GET /api/v1/projects" 200</text>
            <text x="30" y="145" fill="var(--success)">[18:52:01] WS_CONN: Client connected from 192.168.1.104</text>
            <text x="30" y="160" fill="var(--success)">[18:52:01] WS_JOIN: Client joined channel #canvas-01</text>
            <text x="30" y="175" fill="var(--text-muted)">172.18.0.8 - [16/Jun/2026:18:52:02] "POST /api/v1/events" 201</text>
            <text x="30" y="190" fill="var(--accent-color)">[18:52:02] REDIS_PUB: Broadcasted mouse_move delta to 14 active sockets</text>

            <text x="30" y="230" fill="var(--accent-color)">root@production-gateway-node-1:~# docker logs database-master-1 --tail 8</text>
            <text x="30" y="255" fill="var(--success)">2026-06-16 18:52:00 UTC [1] LOG: database ready to accept connections</text>
            <text x="30" y="270" fill="var(--text-muted)">2026-06-16 18:52:00 UTC [48] LOG: autovacuum launcher started</text>
            <text x="30" y="285" fill="var(--text-muted)">2026-06-16 18:52:01 UTC [89] LOG: authorized user=prod_api database=zen</text>
            <text x="30" y="300" fill="var(--success)">2026-06-16 18:52:01 UTC [89] LOG: buffer hit rate: 98.4% for SELECT</text>
            <text x="30" y="315" fill="var(--accent-color)">2026-06-16 18:52:02 UTC [90] WARNING: slow query (12.4ms) - SELECT * FROM canvas_nodes</text>

            <text x="30" y="355" fill="var(--accent-color)">root@production-gateway-node-1:~# systemctl status log-dedup-worker</text>
            <text x="30" y="380" fill="var(--text-muted)">● log-dedup-worker.service - Log Deduplication Engine</text>
            <text x="30" y="395">   Active: <tspan fill="var(--success)">active (running)</tspan> since Tue 2026-06-16 18:30:00 UTC</text>
            <text x="30" y="410" fill="var(--text-muted)">   Main PID: 20104 (go-log-dedup)</text>
            <text x="30" y="425" fill="var(--text-muted)">   Memory: 84.2M (limit: 512M)</text>
            <text x="30" y="440" fill="var(--text-muted)">   CGroup: /system.slice/log-dedup-worker.service</text>
            <text x="30" y="455" fill="var(--text-muted)">           └─20104 /usr/local/bin/go-log-dedup --config /etc/dedup.yaml</text>

            <text x="30" y="485" fill="var(--success)">Jun 16 18:52:02 go-log-dedup: [INFO] Flush buffer pool (size=8192, errors=0)</text>
            <text x="30" y="500" fill="var(--success)">Jun 16 18:52:03 go-log-dedup: [INFO] Deduplication parsed 142k items, removed 412 dups</text>

            <text x="30" y="540" fill="var(--accent-color)">root@production-gateway-node-1:~# pm2 status api-router-gateway</text>
            <rect x="30" y="555" width="340" height="130" rx="4" fill="#15151c" stroke="var(--border-color)" />
            <text x="40" y="575" fill="var(--text-primary)" fontWeight="bold">┌─────┬────────────────────┬──────────┬──────────┬──────────┬──────────┐</text>
            <text x="40" y="590" fill="var(--text-primary)" fontWeight="bold">│ id  │ name               │ mode     │ status   │ cpu      │ memory   │</text>
            <text x="40" y="605" fill="var(--text-primary)">├─────┼────────────────────┼──────────┼──────────┼──────────┼──────────┤</text>
            <text x="40" y="620" fill="var(--text-primary)">│ 0   │ api-gateway-node-1 │ cluster  │ online   │ 1.2%     │ 64.1 MB  │</text>
            <text x="40" y="635" fill="var(--text-primary)">│ 1   │ api-gateway-node-2 │ cluster  │ online   │ 0.8%     │ 65.8 MB  │</text>
            <text x="40" y="650" fill="var(--text-primary)">│ 2   │ api-gateway-node-3 │ cluster  │ online   │ 1.5%     │ 62.4 MB  │</text>
            <text x="40" y="665" fill="var(--text-primary)">│ 3   │ api-gateway-node-4 │ cluster  │ online   │ 1.1%     │ 63.9 MB  │</text>
            <text x="40" y="680" fill="var(--text-primary)" fontWeight="bold">└─────┴────────────────────┴──────────┴──────────┴──────────┴──────────┘</text>

            <text x="30" y="715" fill="var(--accent-color)">root@production-gateway-node-1:~# █</text>
          </g>
        </svg>
      );
    } else if (type === 'ssshare-home') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', display: 'block' }}>
          {/* Header Badge */}
          <rect x="135" y="20" width="130" height="18" rx="9" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="145" cy="29" r="3" fill="#22d3ee" />
          <text x="212" y="32" fill="#22d3ee" fontSize="7" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle" letterSpacing="1">SECURE P2P MESH ACTIVE</text>
          
          {/* Main Title Section */}
          <text x="200" y="90" fill="#ffffff" fontSize="32" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle" letterSpacing="2">FILE</text>
          <text x="200" y="140" fill="#22d3ee" fontSize="40" fontFamily="var(--font-heading)" fontWeight="black" textAnchor="middle" letterSpacing="4" style={{ filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.5))' }}>SSSHARE</text>
          
          <text x="200" y="180" fill="#94a3b8" fontSize="10.5" fontFamily="var(--font-sans)" textAnchor="middle">Instant, serverless file transfer. No limits. No tracking.</text>
          <text x="200" y="198" fill="#06b6d4" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle" fontWeight="bold">Direct device to device encryption.</text>
          
          {/* Card 1: Receive Files */}
          <rect x="25" y="230" width="165" height="280" rx="12" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />
          
          {/* Cloud download icon inside circle */}
          <circle cx="107" cy="285" r="24" fill="rgba(34, 211, 238, 0.1)" />
          <g transform="translate(95, 273)" stroke="#22d3ee" strokeWidth="2" fill="none">
            <path d="M 6 12 C 4 10, 4 6, 8 4 C 10 2, 16 2, 18 6 C 22 6, 22 10, 20 12" />
            <line x1="12" y1="6" x2="12" y2="18" />
            <path d="M 8 14 L 12 18 L 16 14" />
          </g>
          
          <text x="107" y="340" fill="#ffffff" fontSize="14" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Receive Files</text>
          <text x="107" y="365" fill="#64748b" fontSize="8.5" fontFamily="var(--font-sans)" textAnchor="middle">
            <tspan x="107" dy="0">Create a secure room</tspan>
            <tspan x="107" dy="12">and wait for incoming</tspan>
            <tspan x="107" dy="12">connections.</tspan>
          </text>
          
          <rect x="40" y="445" width="135" height="36" rx="6" fill="#22d3ee" style={{ filter: 'drop-shadow(0 4px 10px rgba(34, 211, 238, 0.3))' }} />
          <text x="107" y="467" fill="#0f172a" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">CREATE SECURE ROOM</text>
          
          {/* Card 2: Send Files */}
          <rect x="210" y="230" width="165" height="280" rx="12" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" />
          
          {/* Paperplane navigation icon */}
          <circle cx="292" cy="285" r="24" fill="rgba(168, 85, 247, 0.1)" />
          <g transform="translate(280, 273)" stroke="#a855f7" strokeWidth="2" fill="none">
            <path d="M 2 12 L 20 2 L 14 20 L 11 13 Z" />
            <line x1="11" y1="13" x2="18" y2="4" />
          </g>
          
          <text x="292" y="340" fill="#ffffff" fontSize="14" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Send Files</text>
          <text x="292" y="365" fill="#64748b" fontSize="8.5" fontFamily="var(--font-sans)" textAnchor="middle">
            <tspan x="292" dy="0">Join an existing room</tspan>
            <tspan x="292" dy="12">to transmit data.</tspan>
          </text>
          
          {/* Code Input Box */}
          <rect x="225" y="410" width="135" height="30" rx="6" fill="#090d16" stroke="rgba(168, 85, 247, 0.2)" />
          <text x="292" y="429" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1" textAnchor="middle">ROOM CODE</text>
          
          <rect x="225" y="450" width="135" height="30" rx="6" fill="#1e293b" />
          <text x="292" y="469" fill="#64748b" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">CONNECT &amp; SEND</text>
          
          {/* Identity footer */}
          <circle cx="160" cy="565" r="3" fill="#22c55e" />
          <text x="170" y="568" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)">IDENTITY: 48c294dd...</text>
        </svg>
      );
    } else if (type === 'ssshare-dropzone') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', display: 'block' }}>
          {/* Header Badge */}
          <rect x="135" y="20" width="130" height="18" rx="9" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="145" cy="29" r="3" fill="#22d3ee" />
          <text x="212" y="32" fill="#22d3ee" fontSize="7" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle" letterSpacing="1">SECURE P2P MESH ACTIVE</text>
          
          {/* Main Title Section */}
          <text x="200" y="75" fill="#ffffff" fontSize="24" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle" letterSpacing="1">FILE SSSHARE</text>
          
          {/* Peer connection status banner */}
          <rect x="25" y="105" width="350" height="35" rx="6" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" strokeWidth="0.5" />
          <circle cx="42" cy="122" r="3" fill="#10b981" />
          <text x="52" y="125" fill="#10b981" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold">CONNECTED TO PEER: 9e88cb21 (Ralph-Desktop)</text>
          
          {/* Dropzone Area */}
          <rect x="25" y="160" width="350" height="280" rx="12" fill="rgba(15, 23, 42, 0.4)" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6,6" />
          
          {/* Cloud Upload Icon */}
          <circle cx="200" cy="250" r="32" fill="rgba(34, 211, 238, 0.08)" />
          <g transform="translate(185, 235)" stroke="#22d3ee" strokeWidth="2" fill="none">
            <path d="M 6 18 C 4 15, 4 9, 10 6 C 13 3, 21 3, 24 8 C 29 8, 29 14, 26 18" />
            <line x1="15" y1="24" x2="15" y2="10" />
            <path d="M 11 14 L 15 10 L 19 14" />
          </g>
          
          <text x="200" y="315" fill="#ffffff" fontSize="13" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">Drag &amp; drop files here</text>
          <text x="200" y="335" fill="#64748b" fontSize="9.5" fontFamily="var(--font-sans)" textAnchor="middle">or browse files from your device</text>
          
          <rect x="135" y="365" width="130" height="28" rx="4" fill="rgba(34, 211, 238, 0.15)" stroke="#22d3ee" strokeWidth="1" />
          <text x="200" y="382" fill="#22d3ee" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">BROWSE FILES</text>
          
          <text x="200" y="420" fill="#64748b" fontSize="7.5" fontFamily="var(--font-mono)" textAnchor="middle">Max file size: No limit (Direct WebRTC Data Stream)</text>
          
          {/* Outbox Queue */}
          <text x="25" y="470" fill="#ffffff" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Outbox Queue</text>
          
          {/* Queue Item 1 */}
          <rect x="25" y="485" width="350" height="42" rx="6" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(255,255,255,0.05)" />
          <text x="40" y="502" fill="#ffffff" fontSize="9.5" fontFamily="var(--font-sans)" fontWeight="bold">project-pitch.mp4</text>
          <text x="40" y="516" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">85.2 MB | WebRTC Stream</text>
          <rect x="290" y="496" width="70" height="20" rx="3" fill="#22d3ee" />
          <text x="325" y="508" fill="#0f172a" fontSize="8" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">SEND FILE</text>
          
          {/* Queue Item 2 */}
          <rect x="25" y="535" width="350" height="42" rx="6" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(255,255,255,0.05)" />
          <text x="40" y="552" fill="#ffffff" fontSize="9.5" fontFamily="var(--font-sans)" fontWeight="bold">design-assets.zip</text>
          <text x="40" y="566" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">12.4 MB | WebRTC Stream</text>
          <rect x="290" y="546" width="70" height="20" rx="3" fill="#22d3ee" />
          <text x="325" y="558" fill="#0f172a" fontSize="8" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">SEND FILE</text>
          
          {/* Footer identity */}
          <circle cx="160" cy="610" r="3" fill="#22c55e" />
          <text x="170" y="613" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)">IDENTITY: 48c294dd...</text>
        </svg>
      );
    } else if (type === 'ssshare-transfer') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', display: 'block' }}>
          {/* Header Badge */}
          <rect x="135" y="20" width="130" height="18" rx="9" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="145" cy="29" r="3" fill="#22d3ee" />
          <text x="212" y="32" fill="#22d3ee" fontSize="7" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle" letterSpacing="1">SECURE P2P MESH ACTIVE</text>
          
          {/* Main Title Section */}
          <text x="200" y="75" fill="#ffffff" fontSize="24" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle" letterSpacing="1">FILE SSSHARE</text>
          
          {/* Peer banner */}
          <rect x="25" y="105" width="350" height="35" rx="6" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" strokeWidth="0.5" />
          <circle cx="42" cy="122" r="3" fill="#10b981" />
          <text x="52" y="125" fill="#10b981" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold">CONNECTED TO PEER: 9e88cb21 (Ralph-Desktop)</text>
          
          {/* Active Transfer Card */}
          <rect x="25" y="160" width="350" height="320" rx="12" fill="rgba(15, 23, 42, 0.6)" stroke="#06b6d4" strokeWidth="1" />
          
          <rect x="145" y="180" width="110" height="18" rx="9" fill="rgba(34, 211, 238, 0.1)" />
          <text x="200" y="192" fill="#22d3ee" fontSize="8" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle">STREAMING DATA...</text>
          
          {/* Big glowing file icon */}
          <rect x="175" y="215" width="50" height="60" rx="4" fill="#020617" stroke="#22d3ee" strokeWidth="1.5" />
          <path d="M 213 215 L 225 227 L 225 275 L 175 275" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
          <line x1="213" y1="215" x2="213" y2="227" stroke="#22d3ee" strokeWidth="1.5" />
          <line x1="213" y1="227" x2="225" y2="227" stroke="#22d3ee" strokeWidth="1.5" />
          <text x="200" y="255" fill="#22d3ee" fontSize="12" fontFamily="var(--font-heading)" fontWeight="black" textAnchor="middle">ZIP</text>
          
          <text x="200" y="300" fill="#ffffff" fontSize="13" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">design-assets.zip</text>
          <text x="200" y="315" fill="#64748b" fontSize="8.5" fontFamily="var(--font-mono)" textAnchor="middle">12.4 MB | 68% Transferred</text>
          
          {/* Progress bar */}
          <rect x="45" y="340" width="310" height="10" rx="5" fill="#090d16" />
          <rect x="45" y="340" width="210" height="10" rx="5" fill="#22d3ee" />
          
          {/* Stats Grid */}
          <g fontSize="9" fontFamily="var(--font-sans)" fill="#94a3b8">
            <text x="45" y="380">Transfer Speed:</text>
            <text x="355" y="380" fill="#22d3ee" fontWeight="bold" textAnchor="end">14.8 MB/s</text>
            
            <text x="45" y="400">Remaining Time:</text>
            <text x="355" y="400" fill="#ffffff" fontWeight="bold" textAnchor="end">0.3 seconds</text>
            
            <text x="45" y="420">Sent Bytes:</text>
            <text x="355" y="420" fill="#ffffff" fontWeight="bold" textAnchor="end">8.4 MB / 12.4 MB</text>
            
            <text x="45" y="440">Channel Protocol:</text>
            <text x="355" y="440" fill="#a855f7" fontWeight="bold" textAnchor="end">WebRTC DataChannel (SCTP)</text>
          </g>
          
          <rect x="135" y="495" width="130" height="30" rx="6" fill="#ef4444" style={{ filter: 'drop-shadow(0 4px 8px rgba(239, 68, 68, 0.2))' }} />
          <text x="200" y="514" fill="#ffffff" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">CANCEL STREAM</text>
          
          {/* Footer identity */}
          <circle cx="160" cy="570" r="3" fill="#22c55e" />
          <text x="170" y="573" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)">IDENTITY: 48c294dd...</text>
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 750" width={width} height={height} style={{ background: 'var(--bg-panel)', display: 'block' }}>
          {/* Header Bar */}
          <rect width="400" height="40" fill="var(--browser-bar-bg)" />
          <text x="20" y="25" fill="var(--text-primary)" fontSize="12" fontFamily="var(--font-mono)" fontWeight="bold">QUERY OPTIMIZER</text>
          <circle cx="370" cy="20" r="4" fill="var(--browser-dot-green)" />

          {/* Metrics card */}
          <rect x="20" y="60" width="360" height="70" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="85" fill="var(--text-muted)" fontSize="9" fontFamily="var(--font-mono)">POSTGRESQL DB BUFFER CACHE HIT RATE</text>
          <text x="35" y="115" fill="var(--success)" fontSize="20" fontFamily="var(--font-mono)" fontWeight="bold">99.42 %</text>
          <circle cx="330" cy="95" r="16" fill="rgba(16, 185, 129, 0.1)" stroke="var(--success)" strokeWidth="2" />
          <path d="M 324 97 L 328 93 L 336 100" fill="none" stroke="var(--success)" strokeWidth="2" />

          {/* Query latency comparison chart */}
          <rect x="20" y="145" width="360" height="190" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="170" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Index Scan Latency Comparison</text>
          <text x="35" y="185" fill="var(--text-muted)" fontSize="8.5" fontFamily="var(--font-sans)">Drastic query speedup achieved by compound indexes layout.</text>

          {/* Bar Chart Before (large bar) */}
          <text x="40" y="220" fill="var(--text-primary)" fontSize="9" fontFamily="var(--font-mono)">Sequential Scan (Before):</text>
          <rect x="40" y="230" width="300" height="24" rx="4" fill="var(--browser-dot-red)" opacity="0.8" />
          <text x="330" y="246" fill="#ffffff" fontSize="9" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="end">48.20 ms</text>

          {/* Bar Chart After (tiny bar) */}
          <text x="40" y="280" fill="var(--text-primary)" fontSize="9" fontFamily="var(--font-mono)">Index Scan (After Indexing):</text>
          <rect x="40" y="290" width="8" height="24" rx="2" fill="var(--success)" />
          <text x="60" y="306" fill="var(--success)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="bold">0.89 ms</text>

          {/* EXPLAIN ANALYZE Code Panel */}
          <rect x="20" y="350" width="360" height="220" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="375" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Postgres SQL Query Execution Plan</text>

          <g fontSize="8" fontFamily="var(--font-mono)">
            <text x="35" y="405" fill="var(--text-muted)">EXPLAIN ANALYZE</text>
            <text x="35" y="420" fill="var(--text-primary)">SELECT user_id, sum(amount), count(*) FROM transactions</text>
            <text x="35" y="435" fill="var(--text-primary)">WHERE created_at &gt;= NOW() - INTERVAL '30 days' GROUP BY user_id;</text>

            <line x1="35" y1="445" x2="365" y2="445" stroke="var(--border-color)" />

            <text x="35" y="465" fill="var(--success)">{"->"} GroupAggregate  (cost=120.40..842.10 rows=45 width=40)</text>
            <text x="35" y="480" fill="var(--success)">   Group Key: user_id</text>
            <text x="35" y="495" fill="var(--success)">   {"->"} Index Scan using idx_txn_user_created on transactions</text>
            <text x="35" y="510" fill="var(--success)">      Index Cond: (created_at &gt;= (now() - '30 days'::interval))</text>
            <text x="35" y="525" fill="var(--success)">      Buffers: shared hit=4820</text>
            <text x="35" y="540" fill="var(--text-muted)">Planning Time: 0.184 ms</text>
            <text x="35" y="555" fill="var(--success)">Execution Time: 0.890 ms</text>
          </g>

          {/* Schema Index Diagram */}
          <rect x="20" y="585" width="360" height="140" rx="8" fill="var(--bg-color)" stroke="var(--border-color)" />
          <text x="35" y="610" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold">Compound Index Index Structure Mapping</text>

          <g fontSize="8" fontFamily="var(--font-mono)" fill="var(--text-primary)">
            {/* Table Box */}
            <rect x="35" y="635" width="100" height="70" rx="4" fill="var(--bg-panel)" stroke="var(--border-color)" />
            <text x="85" y="650" textAnchor="middle" fontWeight="bold">transactions</text>
            <line x1="35" y1="655" x2="135" y2="655" stroke="var(--border-color)" />
            <text x="45" y="668" fill="var(--text-muted)">user_id (uuid)</text>
            <text x="45" y="683" fill="var(--text-muted)">amount (numeric)</text>
            <text x="45" y="698" fill="var(--text-muted)">created_at (ts)</text>

            {/* B-Tree Index Box */}
            <rect x="215" y="635" width="150" height="50" rx="4" fill="var(--bg-panel)" stroke="var(--accent-color)" />
            <text x="290" y="650" textAnchor="middle" fontWeight="bold">idx_txn_user_created</text>
            <line x1="215" y1="655" x2="365" y2="655" stroke="var(--border-color)" />
            <text x="225" y="668" fill="var(--accent-color)">BTREE (user_id, created_at)</text>

            {/* Connecting arrow */}
            <path d="M 135 660 L 215 660" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" />
            <polygon points="215,660 209,657 209,663" fill="var(--accent-color)" />

            <text x="35" y="718" fill="var(--text-muted)" fontSize="7.5">Prevents filesort temp tables. Achieved O(log N) lookup search paths.</text>
          </g>
        </svg>
      );
    }
  };

  return (
    <section className="projects-sec" id="projects">
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="hero-meta" style={{ display: 'block', marginBottom: '0.5rem' }}>PORTFOLIO DIRECTORY</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Architectures & Systems</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Expand each directory folder to inspect specific technical context details, exact tools used, and dynamic high-fidelity screenshots.
          </p>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isOpen = openFolderId === project.id;
            const activeTabIdx = activeTabs[project.id] ?? 0;
            const activeTab = project.tabs[activeTabIdx] || project.tabs[0];

            return (
              <ScrollReveal
                className={`folder-card ${isOpen ? 'is-open' : ''}`}
                key={project.id}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Simulated folder directory tab */}
                <div className="folder-tab">
                  {project.index}.config
                </div>

                <div
                  className="folder-header"
                  onClick={() => toggleFolder(project.id)}
                >
                  <div className="folder-meta">
                    <span className="folder-index">{project.category}</span>
                    <h3 className="folder-title">{project.title}</h3>
                    <div className="project-tags" onClick={(e) => e.stopPropagation()}>
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span className="tech-tag" key={tech}>{tech}</span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="tech-tag" style={{ borderStyle: 'dashed', color: 'var(--accent-color)' }}>
                          +{project.techStack.length - 4} items
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="folder-actions">
                    <button
                      className="folder-toggle-btn"
                      aria-label={isOpen ? "Close folder details" : "Open folder details"}
                    >
                      <ChevronDown size={20} />
                    </button>
                  </div>
                </div>

                {/* Folder details inner area */}
                <div className="folder-content-wrapper">
                  <div className="folder-content">
                    <div className="folder-inner">
                      {/* Left: Text details */}
                      <div className="folder-details">
                        <div className="detail-section">
                          <span className="detail-label">System Problem / Core Goal</span>
                          <p className="detail-body">{project.context.problem}</p>
                        </div>

                        <div className="detail-section">
                          <span className="detail-label">Frontend Engineering</span>
                          <p className="detail-body">{project.context.frontend}</p>
                        </div>

                        <div className="detail-section">
                          <span className="detail-label">Backend Architecture</span>
                          <p className="detail-body">{project.context.backend}</p>
                        </div>

                        <div className="detail-section">
                          <span className="detail-label">Complete Stack Used</span>
                          <div className="project-tags" style={{ marginTop: '0.25rem' }}>
                            {project.techStack.map((tech) => (
                              <span className="tech-tag" key={tech} style={{ borderColor: 'rgba(var(--accent-color-rgb), 0.2)', background: 'rgba(var(--accent-color-rgb), 0.02)' }}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Simulated browser screen mockup with interactive tabs */}
                      <div className="folder-right">
                        <span className="detail-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Screenshot Mockup (Hover to scroll)</span>
                        <div className="browser-mockup">
                          {/* Row 1: Browser bar containing circles and tab choices */}
                          <div className="browser-bar">
                            <span className="browser-dot" />
                            <span className="browser-dot" />
                            <span className="browser-dot" />

                            <div className="browser-tabs-row" onClick={(e) => e.stopPropagation()}>
                              {project.tabs.map((tab, tIdx) => (
                                <button
                                  key={tab.label}
                                  className={`browser-tab-button ${tIdx === activeTabIdx ? 'active' : ''}`}
                                  onClick={() => handleTabClick(project.id, tIdx)}
                                >
                                  {tab.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Row 2: Address bar with navigational path */}
                          <div className="browser-address-bar">
                            <div className="browser-address">
                              https://{activeTab.url} Not official link
                            </div>
                            <button
                              style={{ marginLeft: 'auto', display: 'flex', color: 'var(--text-secondary)', cursor: 'pointer' }}
                              onClick={() => openLightbox(project.id, activeTabIdx)}
                              aria-label="Zoom screenshot"
                            >
                              <ExternalLink size={14} />
                            </button>
                          </div>

                          {/* Browser screenshot content */}
                          <div
                            className="browser-body"
                            onClick={() => openLightbox(project.id, activeTabIdx)}
                          >
                            <div className="screenshot-container">
                              <div
                                className="project-screenshot"
                                style={{ '--scroll-offset': activeTab.scrollOffset } as React.CSSProperties}
                              >
                                {activeTab.svgType === 'image' && activeTab.imageSrc ? (
                                  <img src={activeTab.imageSrc} alt={activeTab.label} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                ) : (
                                  renderMockupSVG(activeTab.svgType)
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Immersive Modal Lightbox */}
      <div
        className={`lightbox-overlay ${lightboxData ? 'is-active' : ''}`}
        onClick={closeLightbox}
      >
        {lightboxData && (() => {
          const project = projects.find(p => p.id === lightboxData.projectId);
          if (!project) return null;
          const activeTab = project.tabs[lightboxData.tabIndex];
          const lightboxTitle = project.title + " — " + activeTab.label;

          return (
            <div
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close image preview">
                <X size={20} />
              </button>
              <div className="lightbox-img-wrapper">
                {activeTab.svgType === 'image' && activeTab.imageSrc ? (
                  <img src={activeTab.imageSrc} alt={activeTab.label} style={{ width: '100%', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }} />
                ) : (
                  renderMockupSVG(activeTab.svgType, true)
                )}
              </div>
              <div className="lightbox-caption">
                {lightboxTitle} {activeTab.svgType === 'image' ? '— Event Photograph' : '— Vector UI Layout Mock'}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
