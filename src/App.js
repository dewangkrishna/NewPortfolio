import React from 'react';
import Navbar from './components/navbar';
import AboutMe from './components/aboutme';
import Skills from './components/skills';
import Projects from './components/projects';
import Certificates from './components/certificate';
import Sidebar from './components/bar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/footer';
import EducationTimeline from './components/educationtimeline';
function App() {
  return (
    <div>

      {/* <Sidebar/> */}
      <Navbar />
      <section id="about-me" className="min-h-screen bg-black p-8">
              <AboutMe/>
              <EducationTimeline/>
            
      </section>
      

      <section id="skills" className="min-h-screen bg-black p-8">
        <Skills/>
      </section>

      <section id="projects" className="min-h-screen bg-black p-8">
      <Projects/>
      </section>

      <section id="certifications" className="min-h-screen bg-black p-8">
        <Certificates/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
