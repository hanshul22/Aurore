import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-space-dark/80 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white font-orbitron hover-glow">
              AURORE
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              
              <Link to="/missions" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover-glow">
                Missions
              </Link>
              
              <Link to="/solar-system" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover-glow">
                Solar System
              </Link>
              <Link to="/news" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover-glow">
                News
              </Link>
              <Link to="/contact" className="px-4 py-2 text-sm font-medium text-white rounded-md bg-space-accent hover-glow">
                Join Mission
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-space-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/timeline" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Timeline
            </Link>
            <Link to="/missions" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Missions
            </Link>
            <Link to="/technologies" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Technologies
            </Link>
            <Link to="/solar-system" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Solar System
            </Link>
            <Link to="/news" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              News
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-white rounded-md bg-space-accent">
              Join Mission
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;