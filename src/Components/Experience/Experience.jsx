import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./Experience.scss";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../Constant";
import { star } from "../../Assets/icons";

const Experience = () => {
  return (
    <section id="Experience" className="experience">
      <h3 className="title">Work Experience.</h3>
      <div className="experience-wrapper">
        <div className="experience-container">
          <div className="timeline-container">
            <VerticalTimeline lineColor="#854CE6">
              {experiences.map((experience, idx) => (
                <VerticalTimelineElement
                  key={`${idx}-experience-company`}
                  date={experience.date}
                  position={idx / 2 === 0 ? "left" : "right"}
                  iconStyle={{
                    background: experience.iconBg,
                    boxShadow:
                      "0 0 0 4px #854CE6, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #306EE8",
                  }}
                  contentStyle={{
                    background: "transparent",
                    border: "0.5px solid #306EE8",
                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                    borderBottomWidth: "#306EE8",
                  }}
                  icon={
                    <div className="icon-container">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                      />
                    </div>
                  }
                >
                  <div>
                    <h2 className="experience-title">{experience.title}</h2>
                    <h4
                      className="experience-company"
                      style={{ color: "#f2f3f450" }}
                    >
                      {experience.company_name}
                    </h4>
                  </div>

                  <ul className="experience-ul">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="experience-list"
                      >
                        {point?.title && <b>{point?.title}</b>}
                        {point?.desc}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "rgb(16, 204, 82)",
                  boxShadow:
                    "0 0 0 4px #854CE6, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                }}
                icon={
                  <div className="icon-container">
                    <img src={star} alt={"end"} />
                  </div>
                }
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
