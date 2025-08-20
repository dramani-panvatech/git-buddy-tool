import { useEffect, useState } from 'react';

const SkipNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
      <a
        href="#main-content"
        className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        onClick={() => setIsVisible(false)}
      >
        Skip to main content
      </a>
    </div>
  );
};

export default SkipNavigation; 