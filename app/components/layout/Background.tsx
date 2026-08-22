import { CursorAura } from './CursorAura'

export function Background() {
	return (
		<>
			<div className="bg-fixed" aria-hidden="true">
				<div className="bg-grid" />
				<div className="bg-orb orb-1" />
				<div className="bg-orb orb-2" />
				<div className="bg-orb orb-3" />
			</div>
			<CursorAura />
		</>
	)
}
