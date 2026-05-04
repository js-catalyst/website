import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoBlack from '../../assets/logo-black.svg';
import logoWhite from '../../assets/logo-white.svg';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  // Use dark text/logo whenever the page is scrolled OR the mobile menu is open.
  const showDark = isScrolled || isMenuOpen;

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'approach', label: 'APPROACH' },
    { id: 'contact', label: 'CONTACT' },
  ];

  // When the menu is open we want the header itself to expand and fill the
  // entire viewport with the cream background — no overlay, no stacking math.
  const headerClass = isMenuOpen
    ? 'fixed inset-0 z-50 bg-[#f5f1ed]'
    : `fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? 'bg-[#f5f1ed]/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <button
          onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative h-6 sm:h-8 aspect-[354/64] block"
          aria-label="JS Catalyst — back to top"
        >
          <img
            src={logoWhite}
            alt="JS Catalyst"
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              showDark ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={logoBlack}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              showDark ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs tracking-[0.2em] font-light hover:opacity-70 transition-all duration-500 relative group ${
                isScrolled ? 'text-[#2c2c2c]' : 'text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-[#2c2c2c]' : 'bg-white'
                }`}
              ></span>
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
            showDark ? 'text-[#2c2c2c]' : 'text-white'
          }`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu — only rendered when open. Fills the remaining space
          below the bar inside the now-fullscreen header. */}
      {isMenuOpen && (
        <nav className="md:hidden flex-1 flex flex-col items-center justify-center gap-10 px-6 h-[calc(100vh-80px)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm tracking-[0.3em] font-light text-[#2c2c2c] hover:opacity-60 transition-opacity"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
