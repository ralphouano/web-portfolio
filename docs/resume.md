# Ralph Johnson Ouano
**Fullstack Engineer**

- **Email:** [ouano.ralphjohnson@gmail.com](mailto:ouano.ralphjohnson@gmail.com)
- **Phone:** (+63) 924-114-7543
- **Portfolio:** [ralphouano.me](https://ralphouano.me)
- **GitHub:** [github.com/ralphouano](https://github.com/ralphouano)
- **LinkedIn:** [linkedin.com/in/ralph-johnson-ouano-7b17b3415](https://www.linkedin.com/in/ralph-johnson-ouano-7b17b3415)
- **Location:** Philippines

---

## Executive Summary
**Fullstack Engineer** with a Bachelor of Science in Information Technology. Experienced in building user interfaces (React, Vue, TypeScript) and backend APIs (Laravel, Go, Node.js). Specializes in database query optimization, WebSocket-based real-time features, and writing tested code using static analysis and automated unit test suites.

---

## Technical Skills

*   **Programming Languages:** PHP, JavaScript, TypeScript, Go (Golang), SQL, HTML, CSS
*   **Frontend Frameworks & Libraries:** React, Vue.js, Inertia.js, Alpine.js, Tailwind CSS
*   **Backend Frameworks & Runtimes:** Laravel, Node.js, Express, Go standard library
*   **Databases & Caching:** PostgreSQL, MySQL, Redis (caching and buffer-rings)
*   **Real-Time & WebSockets:** Laravel Reverb, WebSockets (native / socket.io), Redis Pub/Sub
*   **Developer Tooling & DevOps:** Git, GitHub workflows, Docker, Nginx, Vite, Vercel, pnpm/npm, CI/CD
*   **Testing & Code Quality:** Pest PHP, PHPUnit, PHPStan (Level 8 static analysis), service-layer patterns
*   **Soft Skills:** Problem-Solving | Collaboration | Adaptability | Time Management | Communication | Leadership | Creativity | Attention to Detail | Decision-Making | Continuous Learning | Initiative | Resilience

---

## Education

**Bachelor of Science in Information Technology (BSIT)**  
*Saint Columban College*

---

## Core Projects

### 1. Pulse: Ephemeral P2P Chat & Video (Technical Assessment)
*Real-time, Privacy-First Anonymous Connection Web Application*
*   **Stack:** React 19, Next.js 16 (App Router), WebRTC, Mapbox GL, Prisma 7, PostgreSQL, Web Audio API, Vanilla CSS
*   **Key Contributions:**
    *   **Refactored and secured** a broken starter repository, resolving critical WebRTC congestion bottlenecks by implementing custom data-channel buffering and chunk validation.
    *   **Designed and built** a sleek dark-mode glassmorphic interface with an interactive Mapbox GL globe, synthesized Web Audio UX, and client-side dynamic HEIC image conversion.
    *   **Hardened system security** by introducing cryptographic session secrets to mitigate IDOR signaling exploits, establishing automatic stale signaling purges, and optimizing signaling rate throttling down to 300ms.

### 2. SCC Canteen Reservation & Monitoring System
*Real-time Food Reservation & Canteen Monitoring Platform*
*   **Stack:** Laravel, Livewire, Alpine.js, Tailwind CSS (TALL Stack), Redis, Laravel Reverb
*   **Key Contributions:**
    *   **Architected and engineered** a reservation portal using the TALL stack, allowing students to place digital orders directly.
    *   **Implemented** WebSocket event broadcasting with Laravel Reverb and Redis caching, updating food item inventory across all active clients in real-time.
    *   **Optimized** client-side state using Alpine.js and Tailwind CSS, achieving sub-15ms client render times under peak load.

### 3. SSS Daily Transaction Logs
*Transaction Logs Optimization & Database Tuning Console*
*   **Stack:** Laravel, Vue.js, Inertia.js, Tailwind CSS (VILT Stack), MySQL
*   **Key Contributions:**
    *   **Developed** a VILT stack dashboard to display transaction logs and database status metrics for system administrators.
    *   **Overhauled** database query performance by profiling execution plans and establishing composite indexes, reducing query times from **240ms to 12ms** on a 1.2M row table.
    *   **Streamlined** server-to-client data transfer using Inertia.js and Vue 3 to reduce HTTP payload sizes and speed up page changes.

### 4. FileSSShare
*Fun Drag-and-Drop Real-time Sharing Application*
*   **Stack:** React, Laravel API, Laravel Reverb, Tailwind CSS
*   **Key Contributions:**
    *   **Created** an upload dashboard in React, allowing users to drag and drop files.
    *   **Integrated** upload progress tracking and push notifications via Laravel Reverb, broadcasting secure download keys to recipients upon completion.

### 5. DateSimply
*Clean Architecture Calendar Booking API Assessment*
*   **Stack:** Laravel, Pest, PHPUnit, PHP Service Layers
*   **Key Contributions:**
    *   **Refactored** the date-booking API to follow Service-Layer and Clean Architecture patterns, decoupling routing from database query logic.
    *   **Enforced** strict type safety by achieving 100% test coverage in Pest and setting PHPStan static analysis to Level 8 to catch type errors prior to runtime.

### 6. Moonchild E-commerce
*Full-Stack Storefront & Cart Session Handler*
*   **Stack:** Laravel Blade, Livewire, Alpine.js, Tailwind CSS
*   **Key Contributions:**
    *   **Authored** a cart state tracker to store shopping cart details in session variables, preventing cart reset during page navigation.
    *   **Constructed** checkout pipelines and session cache modules using Laravel and Redis cache drivers, storing cart information in Redis to optimize database lookups.

