import { skills } from "../../Constant";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills container" id="Skills">
      <div className="wrapper">
        <h1 className="title">Skills</h1>
        <p className="desc">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className="skills-container">
          {skills.map((skill, idx) => (
            <div key={`${idx}-${skill.title}-skills`} className="skill-card">
              <h1 className="skill-title">{skill.title}</h1>
              <ul className="skill-list">
                {skill.skills.map((item, idx) => (
                  <li key={`skill-item-${idx}`} className="skill-item">
                    <img className="skill-img" src={item.image} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
