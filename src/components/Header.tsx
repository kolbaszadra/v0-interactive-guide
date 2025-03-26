
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github, Twitter, Linkedin, Home, User, Briefcase, BookOpen, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Europe/Budapest');

  // Kezdeti sötét/világos mód beállítása
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Idő frissítése
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Sötét/világos mód változtatása
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Főoldal', href: '#', icon: <Home size={20} /> },
    { name: 'Képességek', href: '#capabilities', icon: <User size={20} /> },
    { name: 'Tippek', href: '#tips', icon: <Briefcase size={20} /> },
    { name: 'Példák', href: '#examples', icon: <BookOpen size={20} /> },
    { name: 'Galéria', href: '#gallery', icon: <Image size={20} /> }
  ];

  return (
    <header 
      className="sticky top-0 z-50 w-full p-4 md:p-6 flex justify-center items-center"
    >
      <div className="flex w-full justify-between items-center">
        {/* Időzóna */}
        <div className="hidden md:flex pl-4 text-sm font-normal">
          {currentLocation}
        </div>

        {/* Navigáció */}
        <div className="flex justify-center w-full">
          <div className="bg-background/90 dark:bg-gray-900/90 backdrop-blur-md p-2 rounded-md border border-gray-200 dark:border-gray-800 shadow-lg flex items-center justify-center">
            <div className="flex gap-2 items-center text-sm">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <div className="hidden md:flex bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
                  )}
                  <Link 
                    to={item.href} 
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    aria-label={item.name}
                  >
                    <span className="flex items-center">
                      {item.icon}
                    </span>
                    <span className="ml-2 hidden md:inline">{item.name}</span>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Idő */}
        <div className="hidden md:flex pr-4 text-sm font-normal justify-end">
          {currentTime}
        </div>
      </div>
    </header>
  );
};

export default Header;
