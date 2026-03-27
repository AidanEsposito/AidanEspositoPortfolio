import Projects from "/src/Projects.jsx";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0);



  return (
    <>
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          
          <img 
            className="block h-24 rounded-full sm:shrink-0" 
            src="/aidane.jfif" 
            alt="Profile Picture" 
          />

          <h1 className="text-xl font-bold">Aidan Esposito</h1>

          <nav className="flex gap-4">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Hello! I'm Aidan, a recent graduate software developer from Loyola Marymount University with a passion for creating innovative solutions.
          I have experience in full-stack development, databases, and cloud technologies, and I'm always eager to learn new technologies and take on exciting projects.
        </p>
      </section>

      {/* Projects Section */}
      <Projects />
    </>

    
  )
}

export default App

