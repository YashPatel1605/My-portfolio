import { experience } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeading
          tag="// Career"
          title="Experience"
          copy="Professional experience building and shipping production web and mobile applications."
        />
        <div className="timeline reveal">
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-head">
              <div>
                <h3>{experience.title}</h3>
                <div className="company">{experience.company}</div>
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
      </div>
    </section>
  );
}
