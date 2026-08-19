import { highlights } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const facts = [
	'React Native & React.js',
	'Firebase Realtime Database',
	'WebSocket / Socket.io',
	'n8n workflow automation',
	'Next.js web platforms',
	'Strapi headless CMS',
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
							<div className="tag">MOBILE.DEV</div>
						</div>
						<div className="about-glyph g1">{'{ }'}</div>
						<div className="about-glyph g2">RN</div>
						<div className="about-glyph g3">API</div>
					</div>

					<div className="about-copy reveal reveal-delay-1">
						<SectionHeading tag="// About Me" title="I build apps that keep moving after launch." />
						<p>
							I am a <strong>React Native Developer</strong> with 2.5 years of experience shipping
							6+ production mobile applications across safety, community, and social-impact domains.
						</p>
						<p>
							My work focuses on real-time features like live location tracking, push notifications,
							and chat using Firebase and WebSocket/Socket.io. I also build companion web platforms
							with React.js and Next.js, plus backend workflow automation with n8n.
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
