import "./ProjectCard.scss";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <div
      className="project-card"
      //   onClick={() => setOpenModal({ state: true, project: project })}
    >
      <span className="container">
        <img src={project.img} />
        <div className="buttons">
          <a
            href={project.viewCode}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          <a
            href={project.liveApp}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live App
          </a>
        </div>
      </span>
      <div className="details">
        <h2 className="title">{project.title}</h2>
        <h4 className="date">{project.date}</h4>
        <p className="description">{project.desc}</p>
        <div className="tags">
          {project.tags?.map((tag, index) => (
            <span key={`${index}-tag-${project.id}`} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="details-buttons buttons">
          <a
            href={project.viewCode}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          <a
            href={project.liveApp}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live App
          </a>
        </div>
      </div>
      {/* <Button>View Project</Button> */}
    </div>
  );
};

export default ProjectCards;
