import Projects from "/src/Projects.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="w-full bg-gray-900/80 backdrop-blur-md text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          <div className="flex items-center gap-4">
            <img 
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
              src="/aidane.jfif" 
              alt="Profile"
            />

            <div>
              <h1 className="text-lg font-bold leading-tight">
                Aidan Esposito
              </h1>
              <p className="text-sm text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a> 
          </nav>

          <div>
            <a
              href="#contact"
              className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold 
              hover:bg-blue-600 transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-24 bg-gradient-to-b from-gray-100 to-white">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Aidan Esposito</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Software Engineer building interactive web applications, tools, and creative digital experiences.
        </p>


        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold 
            hover:bg-blue-600 transition transform hover:scale-105"
          >
            View Projects
          </a>


          {/* Add PDF Viewer Later */}
          <a
            href="/Aidan_Resume.pdf"
            className="px-6 py-3 border border-gray-400 rounded-lg font-semibold 
            hover:bg-gray-200 transition"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* About Me Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center underline decoration-blue-500 decoration-4">
            About Me
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a passionate software engineer with experience in building web applications, tools, and creative digital experiences. I enjoy working on projects that challenge me to learn new technologies and push the boundaries of what's possible on the web.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}


      {/* Footer / Contact */}
      <section id="contact" className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6 text-gray-400">
          Feel free to reach out for opportunities or collaborations.
        </p>

        <a
          href="mailto:aidanesposito@icloud.com"
          className="bg-blue-500 px-6 py-3 rounded-lg font-semibold 
          hover:bg-blue-600 transition transform hover:scale-105"
        >
          Email Me
        </a>

        {/*imgSrc="Li-In-Bug.png"*/}
        <a
          href="https://www.linkedin.com/in/aidan-esposito123"
          className="ml-4 bg-blue-500 px-6 py-3 rounded-lg font-semibold 
          hover:bg-blue-600 transition transform hover:scale-105"
        >
          LinkedIn
        </a>

        {/*imgSrc="/GitHub_Invertocat_Black.png"*/}
        <a
          href="https://github.com/AidanEsposito"
          className="ml-4 bg-blue-500 px-6 py-3 rounded-lg font-semibold 
          hover:bg-blue-600 transition transform hover:scale-105"
        >
          GitHub
        </a>
      </section>
    </>
  );
}

export default App;
