import { Download } from "lucide-react";
import { profile } from "../../data/portfolio";

export function ResumeSection() {
  return (
    <section id="resume">
      <div className="wrap">
        <div className="resume-banner reveal">
          <div className="eyebrow">Let&apos;s Work Together</div>
          <h2>
            Interested in working together?
            <br />
            Let&apos;s build something great.
          </h2>
          <p>Open to freelance projects, full-time roles, and everything in between.</p>
          <div className="resume-ctas">
            <a href={profile.resumeHref} download className="btn btn-primary">
              <Download size={17} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
