import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header class="w-full bg-gray-800 text-white py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-8">
        <h1 class="text-xl font-bold">Aidan</h1>
        <nav class="flex gap-6">
          <a href="#home" class="hover:text-blue-400">Home</a>
          <a href="#projects" class="hover:text-blue-400">Projects</a>
          <a href="#about" class="hover:text-blue-400">About</a>
          <a href="#contact" class="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>

    /*Hero Section*/
      /*Short intro about me, maybe a picture, and a call to action button to view projects or contact me*/

    /*Projects Section*/
      /*Showcase of my projects with images, descriptions, and links to live demos or GitHub repos*/

    /*About Section*/
      /*More detailed information about me, my skills, and my experience*/
      
    /*Contact Section*/
      /*A contact form or links to my social media profiles and email address*/

    /*Footer*/
    
  )
}

export default App
