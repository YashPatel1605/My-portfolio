'use client'

import { ComponentType, useEffect, useRef, useState } from 'react'

type LazySectionProps = {
	component: ComponentType
	minHeight?: number
	sectionId?: string
}

export function LazySection({
	component: Component,
	minHeight = 420,
	sectionId,
}: LazySectionProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState(false)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const node = ref.current

		if (!node) {
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					requestAnimationFrame(() => setReady(true))
					observer.disconnect()
				}
			},
			{ rootMargin: '320px 0px' },
		)

		observer.observe(node)
		return () => {
			observer.disconnect()
			setReady(false)
		}
	}, [])

	return (
		<div
			ref={ref}
			data-section-id={sectionId}
			className={`lazy-section ${visible ? 'lazy-section-visible' : ''} ${ready ? 'lazy-section-ready' : ''}`}
			style={{ minHeight: visible ? undefined : minHeight }}
		>
			{visible ? (
				<Component />
			) : (
				<div className="section-loader" role="status" aria-label="Loading portfolio section">
					<span />
					<span />
					<span />
				</div>
			)}
		</div>
	)
}
