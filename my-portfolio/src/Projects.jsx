import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      name: "Puredine",
      desc: "A web application that allows users to track fitness goals.",
      link: "https://puredine-13017.web.app/",
      logo: "/public/puredinelogo.png"
    },
    {
      name: "Squibble",
      desc: "A drawing app for creative expression.",
      link: "https://squibble-d2d9c.web.app/",
      logo: "/public/SquibbleLogo.png"
    },
    {
      name: "Cod",
      desc: "Statically typed functional programming language based on fishing.",
      link: "https://github.com/AidanEsposito/Cod?tab=readme-ov-file",
      logo: "/public/CodLogo.png"
    },
    {
      name: "Wine Storage Management Website Redesign",
      desc: "Redesign ideas of job website for Wine Storage Management.",
      link: "https://github.com/AidanEsposito/WSMWebsiteProject",
      logo: "/public/logo.png"
    }
  ];

  const next = () => {
        setIndex(prevIndex => {
            return prevIndex + 3 >= projects.length ? 0 : prevIndex + 1;
        });
    };

    const prev = () => {
        setIndex(prevIndex => {
            return prevIndex === 0 ? Math.max(projects.length - 3, 0) : prevIndex - 1;
        });
    };

  return (
    <section className="bg-gray-100 py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold mb-8 text-center">
          Projects
        </h2>

        <div className="flex items-center gap-4">

          {/* Left Button */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            ←
          </button>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            
            {projects.slice(index, index + 3).map((project, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                
                <img
                  src={project.logo}
                  alt={project.name}
                  className="h-16 mx-auto mb-4 object-contain"
                />

                <h3 className="text-xl font-semibold mb-2">
                  {project.name}
                </h3>

                <p className="text-gray-700 mb-4">
                  {project.desc}
                </p>

                <a href={project.link} className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            ))}

          </div>

          {/* Right Button */}
          <button
            onClick={next}
            disabled={index + 3 >= projects.length}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}
