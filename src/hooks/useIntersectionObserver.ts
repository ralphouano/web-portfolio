import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // triggers slightly before entering the center screen
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve to keep the animated state after it is revealed once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Find all elements marked for reveal animations
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount or re-render
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
