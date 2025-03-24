
import React from 'react';
import { Mail, Discord, Twitter, Github } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="section-heading mb-4">Maradj naprakész</h2>
                <p className="text-lg text-muted-foreground">
                  Iratkozz fel hírlevelünkre, hogy elsőként értesülj a v0.dev újdonságairól, tippekről és trükkökről.
                </p>
              </div>
              
              <form className="max-w-2xl mx-auto mb-12">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input 
                      type="email" 
                      placeholder="E-mail címed" 
                      className="pl-12 w-full py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="button-primary"
                  >
                    Feliratkozás
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  A feliratkozással elfogadod az adatvédelmi irányelveinket.
                </p>
              </form>
              
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-center font-semibold text-lg mb-6">Csatlakozz közösségünkhöz</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-[#5865F2] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Discord size={20} />
                    <span>Discord</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Twitter size={20} />
                    <span>Twitter</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-[#24292e] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
