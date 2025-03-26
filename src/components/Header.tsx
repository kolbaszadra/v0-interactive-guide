
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Search, Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Header = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Keresés",
        description: `Keresés a következőre: "${searchQuery}"`,
      });
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const navItems = [
    { name: 'Főoldal', href: '#' },
    { name: 'Képességek', href: '#capabilities' },
    { name: 'Tippek', href: '#tips' },
    { name: 'Példák', href: '#examples' },
    { name: 'Gyakori hibák', href: '#mistakes' }
  ];

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 py-4 border-b',
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="text-primary">v0.dev</span> Gyorstalpaló
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }}
            >
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
          
          <div className="hidden md:flex items-center space-x-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
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
        <div className="absolute top-full left-0 right-0 bg-background border-t shadow-lg p-4 animate-fade-in">
          <div className="container">
            <form onSubmit={handleSearch} className="flex">
              <Input 
                type="text" 
                placeholder="Keresés a tippek között..." 
                className="w-full p-3 rounded-lg"
                aria-label="Keresés"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="ml-2">
                Keresés
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg border-t md:hidden animate-fade-in">
          <nav className="container py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="py-2 px-4 hover:bg-secondary rounded-lg"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 300);
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-secondary rounded-full">
                  <Github size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-secondary rounded-full">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-secondary rounded-full">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
