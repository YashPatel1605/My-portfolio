import { skills } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function SkillsSection() {
	return (
		<section id="skills" className="skills-section skills-section-compact">
			<div className="wrap">
				<SectionHeading
					tag="// Technical Stack"
					title="Skills"
					copy="A production-focused stack for mobile apps, web platforms, APIs, real-time systems, and automation."
				/>
				<div className="skills-grid">
					{skills.map((group, index) => {
						const Icon = group.icon

						return (
							<div className={`skill-card reveal reveal-delay-${index % 3}`} key={group.title}>
								<div className="skill-card-topline">
									<span className="skill-index">0{index + 1}</span>
									<span className="skill-count">{group.items.length} skills</span>
								</div>
								<h3>
									<span className="skill-icon">
										<Icon size={19} strokeWidth={1.8} aria-hidden="true" />
									</span>
									{group.title}
								</h3>
								<div className="skill-tags" aria-label={`${group.title} skills`}>
									{group.items.map((item, itemIndex) => (
										<span
											className="tag"
											style={{ '--tag-index': itemIndex } as React.CSSProperties}
											key={item}
										>
											{item}
										</span>
									))}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
