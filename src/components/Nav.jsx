import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-[24px] py-[20px] md:px-[52px] md:py-[28px] flex justify-between items-center pointer-events-none">
      <div 
        className={`pointer-events-auto font-body font-light text-xs md:text-sm transition-colors duration-300 ${
          isScrolled ? 'text-muted' : 'text-ink'
        }`}
      >
        @[HANDLE]
      </div>
      <div className="pointer-events-auto flex gap-[36px]">
        <a 
          href="#work" 
          onClick={(e) => handleSmoothScroll(e, '#work')}
          className="font-body font-light text-[10px] md:text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300"
        >
          Work
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          className="font-body font-light text-[10px] md:text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
