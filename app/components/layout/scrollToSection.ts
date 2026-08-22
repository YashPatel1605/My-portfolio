export function scrollToSection(href: string) {
	const sectionId = href.startsWith('#') ? href.slice(1) : href
	const target =
		document.getElementById(sectionId) ??
		document.querySelector<HTMLElement>(`[data-section-id="${sectionId}"]`)

	if (!target) {
		return
	}

	const headerHeight = document.getElementById('siteHeader')?.getBoundingClientRect().height ?? 0
	const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16

	window.history.pushState(null, '', `#${sectionId}`)
	window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
}
