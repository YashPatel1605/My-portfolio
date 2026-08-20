import { profile } from "../../data/portfolio";
import { GitHubIcon, LinkedInIcon } from "../icons/SocialIcons";

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p>(c) 2026 Yash Patel. Built with React Native, Next.js, backend APIs, and automation in mind.</p>
        <div className="footer-socials" aria-label="Social links">
          <a href={profile.linkedInHref} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <LinkedInIcon />
          </a>
          <a href={profile.githubHref} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
