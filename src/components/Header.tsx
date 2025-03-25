
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    { name: 'Képességek', href: '#capabilities' },
    { name: 'Tippek', href: '#tips' },
    { name: 'Példák', href: '#examples' },
    { name: 'Gyakori hibák', href: '#mistakes' },
    { name: 'Sikertörténetek', href: '#success-stories' }
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
        <a href="#" className="flex items-center font-display font-bold text-xl">
          <span className="text-gradient">v0.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
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
              <a 
                key={item.name} 
                href={item.href} 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
