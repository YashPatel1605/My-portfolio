import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const dynamic = 'force-dynamic'

export async function GET() {
	const resumePath = path.join(process.cwd(), 'public', 'assets', 'yash-patel-resume.pdf')

	try {
		const resume = await readFile(resumePath)

		return new Response(resume, {
			headers: {
				'Cache-Control': 'no-store',
				'Content-Disposition': 'attachment; filename="yash-patel-resume.pdf"',
				'Content-Type': 'application/pdf',
			},
		})
	} catch {
		return new Response('Resume not found', { status: 404 })
	}
}
