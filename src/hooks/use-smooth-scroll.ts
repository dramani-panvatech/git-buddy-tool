import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault();
    scrollToSection(elementId);
  }, [scrollToSection]);

  return { scrollToSection, handleNavClick };
}; 