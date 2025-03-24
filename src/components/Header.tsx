
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
    
    darkModeQuery.addEventListener('change', handleDarkModeChange);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const navItems = [
    { name: 'Képességek', href: '/#capabilities' },
    { name: 'Tippek', href: '/#tips' },
    { name: 'Példák', href: '/#examples' },
    { name: 'Gyakori hibák', href: '/#mistakes' },
    { name: 'Sikertörténetek', href: '/#success-stories' },
    { name: 'Haladó technikák', href: '/advanced' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center font-display font-bold text-xl">
          <div className="relative flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 44.343 46" fill="none" style={{transform: "rotate(126deg)"}}>
              <path fill="#39347f" stroke="#39347f" strokeWidth="0.52" d="M 22.15625 0 A 1.0001 1.0001 0 0 0 21.464844 0.29296875 L 21.445312 0.3125 L 0.87890625 20.878906 C -0.28429206 22.042104 -0.28429206 23.957896 0.87890625 25.121094 L 21.464844 45.707031 A 1.0001 1.0001 0 0 0 22.878906 45.707031 L 22.898438 45.6875 L 43.464844 25.121094 C 44.628041 23.957896 44.628041 22.042104 43.464844 20.878906 L 22.878906 0.29296875 A 1.0001 1.0001 0 0 0 22.15625 0 z M 22.234375 2.4765625 L 42.050781 22.292969 C 42.449681 22.691868 42.449681 23.308132 42.050781 23.707031 L 25.933594 39.824219 C 26.052442 39.242277 26.138227 38.651984 26.169922 38.052734 A 1.0001 1.0001 0 0 0 26.169922 37.947266 C 26.036349 35.421796 25.108902 33.01145 23.537109 31.050781 L 30.878906 23.707031 A 1.0001 1.0001 0 0 0 30.878906 22.292969 L 22.898438 14.3125 C 21.275291 12.594247 20.319287 10.358489 20.181641 8 C 20.299146 5.9866151 21.018169 4.0654641 22.234375 2.4765625 z M 18.410156 6.1757812 C 18.291308 6.7577229 18.205523 7.3480156 18.173828 7.9472656 A 1.0001 1.0001 0 0 0 18.173828 8.0527344 C 18.307423 10.578631 19.236316 12.988371 20.808594 14.949219 L 13.464844 22.292969 A 1.0001 1.0001 0 0 0 13.464844 23.707031 L 21.464844 31.708984 C 23.075846 33.424403 24.02503 35.651211 24.162109 38 C 24.044604 40.013385 23.325581 41.934536 22.109375 43.523438 L 2.2929688 23.707031 C 1.8940686 23.308131 1.8940686 22.691869 2.2929688 22.292969 L 18.410156 6.1757812 z M 22.171875 16.414062 L 28.757812 23 L 22.171875 29.585938 L 15.585938 23 L 22.171875 16.414062 z"></path>
            </svg>
            <span className="text-gradient ml-2">winmix.hu</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link key={item.name} to={item.href} className="nav-link">
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-secondary transition-colors" 
            aria-label="Keresés"
          >
            <Search size={20} />
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-secondary transition-colors" 
            aria-label="Sötét/Világos mód váltása"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-secondary transition-colors md:hidden" 
            aria-label={isMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="container-custom">
            <input 
              type="text" 
              placeholder="Keresés..." 
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
              aria-label="Keresés"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 md:hidden animate-fade-in">
          <nav className="container-custom py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
