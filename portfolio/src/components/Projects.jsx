import { motion } from "framer-motion";
import React from "react";

// OPTION 1: If your image is in the src/Assets folder
// import image1 from "../Assets/previewimage.png";

// OPTION 2: If your image is in the public folder
// Don't import it, just reference it in the src attribute

const projectsData = [
  {
    // For public folder images, just use the path directly
    image: "./previewimage.png", // No import needed for public folder images
    title: "Book Review Application",
    description: "A server-side Book Review Application that stores, retrieves, and manages book ratings and reviews, built using Node.js and Express.js with REST Uses RESTful web services to communicate from client to server. Asynchronous CRUD Operations using HTTP Methods. JWT and session-based authentication that only lets in logged-in users",
    technologies: ["Node.js", "Express.js", "RESTful APIs"],
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      
      
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}

        <img
        src={project.image}
        alt={project.title}
        width="300" 
        height="200"
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />   
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-15 p-4 md:px-14 md:py-24">
      <h1 className="text-4xl font-light text-white md:text-6xl">
        Projects
      </h1>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;