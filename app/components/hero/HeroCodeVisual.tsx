'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useState } from 'react'

type CodeLine = {
	content: ReactNode
	chars: number
}

const codeLines: CodeLine[] = [
	{
		chars: 21,
		content: (
			<>
				<span className="code-keyword">const</span> developer = {'{'}
			</>
		),
	},
	{
		chars: 24,
		content: (
			<>
				name: <span className="code-string">&apos;Yash Patel&apos;</span>,
			</>
		),
	},
	{
		chars: 58,
		content: (
			<>
				role: [<span className="code-string">&apos;React Native Developer&apos;</span>,{' '}
				<span className="code-string">&apos;Web Application Developer&apos;</span>
				],
			</>
		),
	},
	{
		chars: 30,
		content: (
			<>
				experience: <span className="code-string">&apos;2.5 years&apos;</span>,
			</>
		),
	},
	{
		chars: 49,
		content: (
			<>
				stack: [<span className="code-string">&apos;React Native&apos;</span>,{' '}
				<span className="code-string">&apos;React.js&apos;</span>,
			</>
		),
	},
	{
		chars: 47,
		content: (
			<>
				<span className="code-string">&apos;Next.js&apos;</span>,{' '}
				<span className="code-string">&apos;TypeScript&apos;</span>,{' '}
				<span className="code-string">&apos;Redux&apos;</span>],
			</>
		),
	},
	{
		chars: 46,
		content: (
			<>
				backend: [<span className="code-string">&apos;Node.js&apos;</span>,{' '}
				<span className="code-string">&apos;Express.js&apos;</span>,
			</>
		),
	},
	{
		chars: 48,
		content: (
			<>
				<span className="code-string">&apos;MongoDB&apos;</span>,{' '}
				<span className="code-string">&apos;Firebase&apos;</span>],
			</>
		),
	},
	{
		chars: 52,
		content: (
			<>
				tools: [<span className="code-string">&apos;Socket.io&apos;</span>,{' '}
				<span className="code-string">&apos;n8n&apos;</span>,{' '}
				<span className="code-string">&apos;Strapi&apos;</span>],
			</>
		),
	},
	{
		chars: 18,
		content: (
			<>
				focused: <span className="code-keyword">true</span>,
			</>
		),
	},
	{ chars: 3, content: '};' },
	{
		chars: 43,
		content: (
			<>
				<span className="code-call">deploy</span>(developer);{' '}
				<span className="code-comment">{'// shipping...'}</span>
			</>
		),
	},
]

const lineDelayMs = 450
const lineTypingMs = 620
const resetPauseMs = 8000
const typingDurationMs = (codeLines.length - 1) * lineDelayMs + lineTypingMs

export function HeroCodeVisual() {
	const [typingKey, setTypingKey] = useState(0)

	useEffect(() => {
		const interval = window.setInterval(() => {
			setTypingKey((value) => value + 1)
		}, typingDurationMs + resetPauseMs)

		return () => window.clearInterval(interval)
	}, [])

	return (
		<div className="code-scene" aria-hidden="true">
			<div className="video-grid" />
			<div className="video-glow video-glow-red" />
			<div className="video-glow video-glow-teal" />

			<div className="video-chip video-chip-react">
				<span className="chip-square react-square" />
				React Native
			</div>
			<div className="video-chip video-chip-firebase">
				<span className="chip-square firebase-square" />
				Firebase
			</div>
			<div className="video-chip video-chip-node">
				<span className="chip-square node-square" />
				Node.js
			</div>

			<div className="video-stat video-stat-years">
				<strong>2.5</strong>
				<span>Years Exp</span>
			</div>
			<div className="video-stat video-stat-apps">
				<strong>6+</strong>
				<span>Production Apps</span>
			</div>

			<div className="video-terminal">
				<div className="video-terminal-inner">
					<div className="video-terminal-bar">
						<span className="win-dot red" />
						<span className="win-dot yellow" />
						<span className="win-dot green" />
						<span className="video-file">developer.js</span>
					</div>
					<div className="video-terminal-body" key={typingKey}>
						{codeLines.map((line, index) => (
							<div
								className="typed-code-line"
								key={index}
								style={
									{
										'--chars': line.chars,
										'--delay': `${(index * lineDelayMs) / 1000}s`,
									} as CSSProperties
								}
							>
								{line.content}
							</div>
						))}
						<span
							className="video-cursor"
							style={{ '--cursor-delay': `${typingDurationMs / 1000}s` } as CSSProperties}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
