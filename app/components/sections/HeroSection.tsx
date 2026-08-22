import { Download, Mail, MousePointer2 } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../icons/SocialIcons'
import { HeroCodeVisual } from '../hero/HeroCodeVisual'
import { scrollToSection } from '../layout/scrollToSection'
import { profile } from '../../data/portfolio'
import { TypingRole } from '../ui/TypingRole'

export function HeroSection() {
	return (
		<section id="home" className="hero">
			<div className="wrap hero-grid">
				<div className="hero-copy reveal">
					<div className="hero-badge">
						<span className="dot" />
						Available for new opportunities
					</div>
					<h1>Yash Patel</h1>
					<TypingRole />
					<p className="desc">
						Frontend Developer with 2.5 years of experience building polished React, Next.js, and
						React Native experiences backed by real-time features and production APIs.
					</p>
					<div className="hero-ctas">
						<a
							href="#projects"
							className="btn btn-primary"
							onClick={(event) => {
								event.preventDefault()
								scrollToSection('#projects')
							}}
						>
							View Projects
							<MousePointer2 size={17} />
						</a>
						<a href={profile.resumeHref} download className="btn btn-ghost">
							<Download size={17} />
							Download Resume
						</a>
					</div>
					<div className="hero-socials">
						<a className="social-btn" href="mailto:patelyash9712@gmail.com" aria-label="Email Yash">
							<Mail size={18} />
						</a>
						<a
							className="social-btn"
							href={profile.linkedInHref}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn profile"
						>
							<LinkedInIcon />
						</a>
						<a
							className="social-btn"
							href={profile.githubHref}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub profile"
						>
							<GitHubIcon />
						</a>
					</div>
				</div>

				<div className="hero-visual reveal reveal-delay-2">
					<HeroCodeVisual />
				</div>
			</div>
		</section>
	)
}
