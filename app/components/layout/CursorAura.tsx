'use client'

import { useEffect, useRef } from 'react'

export function CursorAura() {
	const auraRef = useRef<HTMLDivElement>(null)
	const dotRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!window.matchMedia('(pointer: fine)').matches) {
			return
		}

		let frame = 0
		let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
		const current = { ...target }

		const render = () => {
			current.x += (target.x - current.x) * 0.18
			current.y += (target.y - current.y) * 0.18
			auraRef.current?.style.setProperty('--cursor-x', `${current.x}px`)
			auraRef.current?.style.setProperty('--cursor-y', `${current.y}px`)
			dotRef.current?.style.setProperty('--cursor-x', `${current.x}px`)
			dotRef.current?.style.setProperty('--cursor-y', `${current.y}px`)

			if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
				frame = requestAnimationFrame(render)
			} else {
				frame = 0
			}
		}

		const handlePointerMove = (event: PointerEvent) => {
			target = { x: event.clientX, y: event.clientY }
			document.documentElement.dataset.cursorActive = 'true'
			if (!frame) {
				frame = requestAnimationFrame(render)
			}
		}
		const handlePointerLeave = () => {
			document.documentElement.dataset.cursorActive = 'false'
		}

		window.addEventListener('pointermove', handlePointerMove, { passive: true })
		window.addEventListener('pointerleave', handlePointerLeave)
		return () => {
			cancelAnimationFrame(frame)
			delete document.documentElement.dataset.cursorActive
			window.removeEventListener('pointermove', handlePointerMove)
			window.removeEventListener('pointerleave', handlePointerLeave)
		}
	}, [])

	return (
		<>
			<div ref={auraRef} className="cursor-aura" />
			<div ref={dotRef} className="cursor-dot" />
		</>
	)
}
