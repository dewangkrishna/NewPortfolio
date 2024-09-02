import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Centered title */}
          <div className="flex items-center">
            <a
              href="#about-me"
              className="text-white hover:text-black px-3 py-2 rounded-md text-2xl font-semibold"
            >
              Dewang Krishna
            </a>
          </div>
          {/* Right-aligned navigation links for larger screens */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#about-me" className="text-white hover:text-black px-3 py-2 rounded-md text-lg font-medium">
              About Me
            </a>
            <a href="#skills" className="text-white hover:text-black px-3 py-2 rounded-md text-lg font-medium">
              Skills
            </a>
            <a href="#projects" className="text-white hover:text-black px-3 py-2 rounded-md text-lg font-medium">
              Projects
            </a>
            <a href="#certifications" className="text-white hover:text-black px-3 py-2 rounded-md text-lg font-medium">
              Certifications
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-black px-3 py-2 rounded-md text-lg font-medium focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {/* Mobile menu, toggle visibility based on state */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about-me" className="block text-white hover:text-black px-3 py-2 rounded-md text-base font-medium">
                About Me
              </a>
              <a href="#skills" className="block text-white hover:text-black px-3 py-2 rounded-md text-base font-medium">
                Skills
              </a>
              <a href="#projects" className="block text-white hover:text-black px-3 py-2 rounded-md text-base font-medium">
                Projects
              </a>
              <a href="#certifications" className="block text-white hover:text-black px-3 py-2 rounded-md text-base font-medium">
                Certifications
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
