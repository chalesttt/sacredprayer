
import React from 'react';
import { AboutDialog } from './about-dialog';
import { ContactDialog } from './contact-dialog';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white py-8 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-cinzel text-2xl text-gold">Sacred Prayers</h3>
            <p className="text-sm text-gray-300 mt-2">
              Learn and pray in English, Latin, and Tagalog
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-cinzel text-lg text-gold mb-2">Navigation</h4>
              <ul className="space-y-1">
                <li><a href="/" className="text-sm hover:text-gold transition-colors">Home</a></li>
                <li><a to="/prayers" className="text-sm hover:text-gold transition-colors">All Prayers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cinzel text-lg text-gold mb-2">Resources</h4>
              <ul className="space-y-1">
                <li><AboutDialog /></li>
                <li><ContactDialog /></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2025 Lester Nacino | Sacred Prayers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
