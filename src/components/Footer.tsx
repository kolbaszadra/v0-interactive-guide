
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} v0.dev Gyorstalpaló. Minden jog fenntartva.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Adatvédelem
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Felhasználási feltételek
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Kapcsolat
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
