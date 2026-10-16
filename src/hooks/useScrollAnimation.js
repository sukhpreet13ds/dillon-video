import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Select all sections below hero
    const sectionSelectors = [
      '.about-section',
      '.crafted-section',
      '.threecol-section',
      '.featured-video-section',
      '.how-work-section',
      '.testimonial-section',
      '.cta-section',
      '.site-footer'
    ];

    const triggerElement = (el) => {
      if (!el || el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';
      const animation = el.dataset.animation || 'animate__fadeInUp';
      el.classList.add('animate__animated', animation);

      const handleAnimEnd = () => {
        el.classList.remove('animate__animated', animation, 'animate-on-scroll');
        el.style.opacity = '1';
        el.removeEventListener('animationend', handleAnimEnd);
      };
      el.addEventListener('animationend', handleAnimEnd);
    };

    // Trigger things when their section enters viewport
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animElements = entry.target.querySelectorAll('.animate-on-scroll');
            animElements.forEach((el, index) => {
              setTimeout(() => {
                triggerElement(el);
              }, index * 90);
            });
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Also observe individual elements directly for responsive/staggered scrolling
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerElement(entry.target);
            itemObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    // Observe each section below hero
    sectionSelectors.forEach((sel) => {
      const sectionEl = document.querySelector(sel);
      if (sectionEl) {
        sectionObserver.observe(sectionEl);
      }
    });

    // Observe individual items
    const allItems = document.querySelectorAll('.animate-on-scroll');
    allItems.forEach((item) => {
      itemObserver.observe(item);
    });

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
