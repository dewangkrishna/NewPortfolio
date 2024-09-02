import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* About Section
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-gray-400">
              I'm a passionate web developer with experience in building responsive and engaging websites using modern web technologies.
            </p>
          </div> */}

          {/* Links Section */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white transition-colors"><a href="#about">About</a></li>
              <li className="mb-2 hover:text-white transition-colors"><a href="#projects">Projects</a></li>
              <li className="mb-2 hover:text-white transition-colors"><a href="#contact">Contact</a></li>
              <li className="hover:text-white transition-colors"><a href="#blog">Blog</a></li>
            </ul>
          </div> */}
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/dewangkrishna" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-gray-400 hover:text-white transition-colors text-2xl"></i>
            </a>
            
            <a href="https://www.linkedin.com/in/dewang-krishna-1b0939238/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-gray-400 hover:text-blue-500 transition-colors text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/dewang_krishna/?utm_source=qr " target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-gray-400 hover:text-pink-500 transition-colors text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Dewang Krishna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//ed