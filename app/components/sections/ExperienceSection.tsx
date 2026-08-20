import { experiences } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeading
          tag="// Career"
          title="Experience"
          copy="Professional experience and internship training across mobile, web, backend, and team development workflows."
        />
        <div className="timeline reveal">
          {experiences.map((experience, index) => (
            <div className="timeline-item" key={`${experience.company}-${experience.period}`}>
              <div className="timeline-dot" />
              <div className={`timeline-card ${index ? "reveal-delay-1" : ""}`}>
                <div className="timeline-head">
                  <div>
                    <div className="timeline-type">{experience.type}</div>
                    <h3>{experience.title}</h3>
                    <div className="company">
                      {experience.company}
                      {experience.location ? <span> - {experience.location}</span> : null}
                    </div>
                  </div>
                  <div className="period">{experience.period}</div>
                </div>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
