import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#f5f1ed]/50 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className={`text-2xl transition-colors duration-500 ${
          isScrolled ? 'text-[#2c2c2c]' : 'text-white'
        }`} style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          JS CATALYST
        </div>
        <nav className="flex gap-10">
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-xs tracking-[0.2em] font-light hover:opacity-70 transition-all duration-500 relative group ${
              isScrolled ? 'text-[#2c2c2c]' : 'text-white'
            }`}
          >
            ABOUT
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#2c2c2c]' : 'bg-white'
            }`}></span>
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`text-xs tracking-[0.2em] font-light hover:opacity-70 transition-all duration-500 relative group ${
              isScrolled ? 'text-[#2c2c2c]' : 'text-white'
            }`}
          >
            SERVICES
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#2c2c2c]' : 'bg-white'
            }`}></span>
          </button>
          <button 
            onClick={() => scrollToSection('approach')}
            className={`text-xs tracking-[0.2em] font-light hover:opacity-70 transition-all duration-500 relative group ${
              isScrolled ? 'text-[#2c2c2c]' : 'text-white'
            }`}
          >
            APPROACH
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#2c2c2c]' : 'bg-white'
            }`}></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`text-xs tracking-[0.2em] font-light hover:opacity-70 transition-all duration-500 relative group ${
              isScrolled ? 'text-[#2c2c2c]' : 'text-white'
            }`}
          >
            CONTACT
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? 'bg-[#2c2c2c]' : 'bg-white'
            }`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
}