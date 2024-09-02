import React, { useState, useEffect } from 'react';
const AboutMe = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-me');
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center bg-black"
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full px-4 md:px-8">
        {/* Image Section */}
        <div
          className={`transition-transform duration-1000 ease-in-out ${
            scrolled ? 'md:-translate-x-32' : 'md:translate-x-0'
          } w-full md:w-1/2 flex justify-center mb-8 md:mb-0`}
        >
          <img
            src="mypic-removebg-preview.png" // Replace with your actual image URL or path
            alt="Your Name"
            className="rounded-full overflow-hidden shadow-green-500 shadow-lg w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
        {/* Description Section */}
        <div
          className={`transition-transform duration-1000 ease-in-out ${
            scrolled ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-32 md:opacity-0'
          } w-full md:w-1/2 p-4 md:p-8`}
        >
          <div className="bg-transparent p-4 md:p-8 rounded-lg border-4 border-green-500 shadow-green-500 shadow-2xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-green-500">Dewang Krishna</h1>
            <p className="text-sm md:text-base mb-4 italic text-white">
              I'm a software developer specializing in React.js, HTML, CSS, and Tailwind CSS, with a knack for building bots using Python and FastAPI. My creative side shines through as an AI content creator and video editor, skilled in Adobe Premiere Pro and Canva.
              I hold a BCA in Data Analytics from Kristu Jayanti College (2021-2024) and currently work at HostupCloud Technologies Pvt Ltd as a Software Developer and Technical Support Engineer. My journey is fueled by a passion for innovation and delivering impactful solutions.
            </p>
          </div>
        </div>
      </div>
      </section>
    
  );
};

export default AboutMe;
//ede