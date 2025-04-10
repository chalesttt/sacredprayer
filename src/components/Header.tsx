
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-deep-blue shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-cinzel font-bold text-deep-blue dark:text-white">
            Sacred Prayers
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/prayers" className="text-gray-700 dark:text-gray-200 hover:text-gold transition-colors">
              All Prayers
            </Link>
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search prayers..."
                className="pl-8 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gold dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost"
              className="text-gray-700 dark:text-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 dark:text-gray-200 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/prayers" 
                className="text-gray-700 dark:text-gray-200 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Prayers
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search prayers..."
                  className="w-full pl-8 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gold dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
