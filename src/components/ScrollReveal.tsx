import React, { useState, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal = ({ children, className = '', delayClass = '', style }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once visible to maintain animation state
        observer.unobserve(el);
      }
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    });

    observer.observe(el);
    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
