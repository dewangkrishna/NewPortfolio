import React, { useState } from 'react';
import GlowingButton from './glowing_button';

// Data for projects
const projects = [
  {
    title: "EForm",
    description: "A college admission page developed for Kristu Jayanti College while working in the Software Development Cell.",
    githubLink: "https://github.com/KJC-SDC/eform"
  },
  {
    title: "DataDig",
    description: "A data scraping tool used to scrape data of YouTubers based on user-provided keywords, developed for the marketing team at Hostup Cloud.",
    githubLink: "https://github.com/dewangkrishna/datadig"
  },
  {
    title: "Email Digger",
    description: "A data scraping bot used to scrape emails of a specified domain.",
    githubLink: "https://github.com/dewangkrishna/email_digger"
  },
  {
    title: "Bloom Again",
    description: "An anti-depression website developed using HTML, CSS, Node.js, Jenkins, and Docker.",
    githubLink: "https://github.com/dewangkrishna/Bloom-Again"
  }
];

// Main Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Open modal with selected project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-black border-green-500 rounded-lg hover:shadow-green-500 hover:shadow-lg flex flex-col justify-between p-6 w-full"
          >
            <div className="overflow-hidden">
              <h2 className="text-xl text-white font-semibold text-center mb-4">{project.title}</h2>
              <p className="text-white text-center">{project.description}</p>
            </div>
            <button 
              onClick={() => openModal(project)} 
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300 w-32 mx-auto"
            >
              Know More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-8 w-3/4 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-4 block"
            >
              View on GitHub
            </a>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
