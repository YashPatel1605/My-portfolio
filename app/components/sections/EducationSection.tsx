import { education } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionHeading tag="// Background" title="Education" />
        <div className="edu-card reveal">
          <div className="edu-icon">
            <education.icon size={24} />
          </div>
          <div>
            <h3>{education.degree}</h3>
            <div className="school">{education.school}</div>
            <div className="period">
              {education.period} - CGPA: {education.cgpa}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
