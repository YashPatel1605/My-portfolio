import { skills } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeading
          tag="// Technical Stack"
          title="Skills"
          copy="A production-focused stack for mobile apps, web platforms, APIs, real-time systems, and automation."
        />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className={`skill-card reveal reveal-delay-${index % 3}`} key={group.title}>
              <h3>
                <span className="ic" />
                {group.title}
              </h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
