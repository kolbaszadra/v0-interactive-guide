
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Hiba: A felhasználó nem létező útvonalat próbált elérni:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="glass-card p-12 max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sajnáljuk, a keresett oldal nem található.
        </p>
        <Link 
          to="/" 
          className="button-primary inline-flex items-center gap-2"
        >
          <Home size={18} />
          <span>Vissza a főoldalra</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
