
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="font-display font-bold text-xl">
              <span className="text-gradient">v0.dev</span> Oktatóanyag
            </div>
            <p className="text-muted-foreground text-sm">
              Az interaktív oktatóanyag a v0.dev használatához, amely bemutatja a hatékony AI-alapú prototípuskészítés módszereit.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Gyors linkek</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Főoldal</a></li>
              <li><a href="#capabilities" className="text-muted-foreground hover:text-foreground transition-colors">Képességek</a></li>
              <li><a href="#tips" className="text-muted-foreground hover:text-foreground transition-colors">Tippek</a></li>
              <li><a href="#mistakes" className="text-muted-foreground hover:text-foreground transition-colors">Gyakori hibák</a></li>
              <li><a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">Sablonok</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Források</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">v0.dev dokumentáció</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Példa projektek</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Közösség</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Vercel</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Jogi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Adatvédelmi irányelvek</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Felhasználási feltételek</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie-k</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Impresszum</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} V0 Gyorstalpaló. Minden jog fenntartva.</p>
          <p className="mt-4 md:mt-0">Készült ❤️-vel a magyar fejlesztői közösségnek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
