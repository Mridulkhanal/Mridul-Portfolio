import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.fixed-nav');
      if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <></>;
}