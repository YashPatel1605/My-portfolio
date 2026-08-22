'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const deviceDurationMs = 6800

export function HeroCodeVisual() {
	const [device, setDevice] = useState<'laptop' | 'phone'>('laptop')
	const [tilt, setTilt] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const interval = window.setInterval(() => {
			setDevice((value) => (value === 'laptop' ? 'phone' : 'laptop'))
		}, deviceDurationMs)

		return () => window.clearInterval(interval)
	}, [])

	const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
		const bounds = event.currentTarget.getBoundingClientRect()
		const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
		const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
		setTilt({ x: Math.max(-1, Math.min(1, y)), y: Math.max(-1, Math.min(1, x)) })
	}

	return (
		<div
			className={`code-scene device-${device}`}
			onPointerMove={handlePointerMove}
			onPointerLeave={() => setTilt({ x: 0, y: 0 })}
			style={{ '--tilt-x': `${tilt.x * 5}deg`, '--tilt-y': `${tilt.y * 7}deg` } as CSSProperties}
			aria-hidden="true"
		>
			<div className="video-grid" />
			<div className="video-glow video-glow-red" />
			<div className="video-glow video-glow-teal" />
			<div className="device-orbit orbit-one" />
			<div className="device-orbit orbit-two" />

			<div className="device-stage">
				<div className="device-shadow" />
				<div className="laptop-device">
					<div className="laptop-screen">
						<div className="screen-camera" />
						<DeviceInterface />
					</div>
					<div className="laptop-base">
						<span />
					</div>
				</div>
				<div className="phone-device">
					<div className="phone-screen">
						<div className="phone-speaker" />
						<DeviceInterface compact />
					</div>
				</div>
			</div>

			<div className="device-label">
				<span className="label-pulse" /> YASH / COMPUTER ENGINEERING
			</div>
			<div className="device-mode">
				<span /> WEB + MOBILE EXPERIENCE
			</div>
			<div className="device-metrics">
				<strong>6+</strong>
				<span>shipped products</span>
				<i />
			</div>
			<div className="device-stack">
				<span>React</span>
				<span>Next.js</span>
				<span>React Native</span>
			</div>
		</div>
	)
}

function DeviceInterface({ compact = false }: { compact?: boolean }) {
	return (
		<div className={`device-interface${compact ? ' compact' : ''}`}>
			<div className="interface-top">
				<span>developer.js</span>
				<b>LIVE</b>
			</div>
			<div className="interface-content">
				<div className="developer-avatar">
					<Image src="/assets/yash_Image.jpeg" alt="" fill sizes="78px" />
				</div>
				<div className="interface-copy">
					<span className="interface-kicker">AVAILABLE FOR WORK</span>
					<strong>YASH PATEL</strong>
					<span className="interface-role">WEB + MOBILE DEVELOPER</span>
				</div>
			</div>
			<div className="interface-lines">
				<i />
				<i />
				<i />
			</div>
			<div className="interface-footer">
				<span>BUILDING WITH</span>
				<b>TS</b>
				<b>RN</b>
				<b>API</b>
			</div>
		</div>
	)
}
