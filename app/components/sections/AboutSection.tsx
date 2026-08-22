import Image from 'next/image'
import { SectionHeading } from '../ui/SectionHeading'

const facts = [
	'JavaScript & TypeScript',
	'React Native mobile apps',
	'React.js & Next.js web apps',
	'Node.js & Express.js backends',
	'MongoDB, Firebase RTDB & Firestore',
	'REST APIs, auth, routing & CRUD',
	'Push notifications & realtime chat',
	'n8n workflow automation & API integration',
	'Strapi headless CMS',
	'Git & GitHub',
]

export function AboutSection() {
	return (
		<section id="about" className="about-section about-section-compact">
			<div className="wrap">
				<div className="about-grid">
					<div className="about-visual reveal">
						<div className="about-ring" />
						<div className="about-core about-photo-card">
							<Image
								src="/assets/yash_Image.jpeg"
								alt="Yash Patel"
								width={3072}
								height={4096}
								sizes="(max-width: 960px) 78vw, 360px"
								className="about-photo"
							/>
							<div className="about-photo-shade" />
							{/* <div className="about-photo-caption">
								<span>Frontend Developer</span>
								<strong>React | Next.js | UI</strong>
							</div> */}
						</div>
						{/* <div className="about-glyph g1">{'{ }'}</div>
						<div className="about-glyph g2">RN</div>
						<div className="about-glyph g3">n8n</div> */}
					</div>

					<div className="about-copy reveal reveal-delay-1">
						<SectionHeading
							tag="Web + Mobile Developer"
							title="I build products people use on every screen."
							copy="Web platforms and mobile apps — backend included, built to last past launch."
						/>
						<p>
							I am a{' '}
							<strong>
								Web and Mobile Application Developer with 2.5 years of experience in React Native,
								React.js, Next.js, backend development, and automation
							</strong>
							, building production-ready mobile applications, web platforms, APIs, and workflow
							automations.
						</p>
						<p>
							My work covers React Native mobile apps, React.js and Next.js web applications,
							Node.js and Express.js backends, MongoDB and Firebase databases, plus n8n workflow
							automation for API integrations and business processes.
						</p>
						<p>
							I enjoy building practical product features like authentication, routing, CRUD flows,
							push notifications, realtime chat, live data updates, headless CMS integrations with
							Strapi, and clean UI systems with Tailwind CSS or Bootstrap.
						</p>
						<ul className="about-list">
							{facts.map((fact) => (
								<li key={fact}>{fact}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
