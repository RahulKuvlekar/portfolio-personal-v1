import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectCards from "./ProjectCard";
import { PROJECTS } from "../../Constant";

const SingleProject = ({ project }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="imageContainer"
            initial={{ x: "-50vh" }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
          >
            <img src={project.img} alt={project.title} />
          </motion.div>
          <motion.div
            className="textContainer"
            initial={{ x: "50vh" }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
          >
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div id="Projects" className="projects">
      <div className="progress">
        <motion.h1
        //   initial={{ y: "-100px" }}
        //   whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          Projects
        </motion.h1>
      </div>
      <div className="projects-section">
        {PROJECTS &&
          PROJECTS.map((project) => (
            <ProjectCards
              project={project}
              key={`${project.id}-project-item`}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
