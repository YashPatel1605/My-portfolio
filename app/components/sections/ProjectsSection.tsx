"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Project, projects } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.body.classList.toggle("modal-locked", Boolean(active));
    return () => document.body.classList.remove("modal-locked");
  }, [active]);

  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeading
          tag="// Selected Work"
          title="Projects"
          copy="Production mobile applications from the resume, presented as focused case-study cards."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              className={`project-card reveal ${index % 2 ? "reveal-delay-1" : ""}`}
              key={project.name}
              type="button"
              onClick={() => setActive(project)}
            >
              <div className="project-media">
                <div className="mockup-phone">
                  <span className="notch" />
                  <span className="glyph">{project.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}</span>
                </div>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p className="desc">{project.summary}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={`modal-overlay ${active ? "open" : ""}`} onClick={() => setActive(null)}>
        <div className="modal" role="dialog" aria-modal="true" aria-label={active?.name} onClick={(event) => event.stopPropagation()}>
          <button className="modal-close" type="button" aria-label="Close project details" onClick={() => setActive(null)}>
            <X size={20} />
          </button>
          {active ? (
            <>
              <div className="modal-type">Mobile Application</div>
              <h3>{active.name}</h3>
              <div className="modal-meta">
                <span>{active.category}</span>
                <span>{active.platform}</span>
                {active.period ? <span>{active.period}</span> : null}
              </div>
              <p>{active.summary}</p>
              <h4>Key Work</h4>
              <ul>
                {active.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="modal-tech">
                {active.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
