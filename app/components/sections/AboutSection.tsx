import { highlights } from '../../data/portfolio'
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
		<section id="about">
			<div className="wrap">
				<div className="about-grid">
					<div className="about-visual reveal">
						<div className="about-ring" />
						<div className="about-core">
							<div className="yp">YP</div>
							<div className="tag">FULL.STACK</div>
						</div>
						<div className="about-glyph g1">{'{ }'}</div>
						<div className="about-glyph g2">RN</div>
						<div className="about-glyph g3">n8n</div>
					</div>

					<div className="about-copy reveal reveal-delay-1">
						<SectionHeading tag="// About Me" title="I build apps that keep moving after launch." />
						<p>
							I am a <strong>React Native, web, backend, and automation developer</strong> with
							2.5 years of experience building production-ready mobile applications, web platforms,
							APIs, and workflow automations.
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

				<div className="stats-row">
					{highlights.map((item) => (
						<div className="stat-card reveal" key={item.label}>
							<div className="n">{item.value}</div>
							<div className="l">{item.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
