import React from 'react';

const skills = [
  {
    title: "React.js",
    description: "Building interactive UIs and single-page applications with modern JavaScript.",
    icon: "1.png"  // Replace with your actual icon URL or path
  },
  {
    title: "HTML & CSS",
    description: "Creating structured and styled web pages with semantic HTML and responsive CSS.",
    icon: "2.png"  // Replace with your actual icon URL or path
  },
  {
    title: "Tailwind CSS",
    description: "Utilizing utility-first CSS to build custom designs quickly and efficiently.",
    icon: "3.png"  // Replace with your actual icon URL or path
  },
  {
    title: "Python",
    description: "Developing scripts and applications, including web scraping and automation.",
    icon: "4.png"  // Replace with your actual icon URL or path
  },
  {
    title: "FastAPI",
    description: "Building high-performance APIs with Python for modern web applications.",
    icon: "5.png"  // Replace with your actual icon URL or path
  },
  {
    title: "AI Content Creation",
    description: "Creating engaging and relevant content with the aid of AI tools.",
    icon: "6.png"  // Replace with your actual icon URL or path
  },
  {
    title: "Video Editing",
    description: "Editing and producing videos using Adobe Premiere Pro for high-quality results.",
    icon: "7.png"  // Replace with your actual icon URL or path
  },
  {
    title: "Canva",
    description: "Designing visually appealing graphics and layouts with Canva.",
    icon: "8.png"  // Replace with your actual icon URL or path
  }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-black rounded-lg p-6 w-full max-w-xs hover:shadow-green-500 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <img
              src={skill.icon}
              alt={skill.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-white font-semibold text-center mb-2">{skill.title}</h2>
            <p className="text-white text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
