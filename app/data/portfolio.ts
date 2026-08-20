import type { LucideIcon } from 'lucide-react'
import {
	BellRing,
	Bot,
	BriefcaseBusiness,
	Code2,
	Database,
	GraduationCap,
	MapPinned,
	MessageCircle,
	PanelsTopLeft,
	ShoppingBag,
	Smartphone,
	Workflow,
} from 'lucide-react'

export const profile = {
	name: 'Yash Patel',
	role: 'Frontend Developer',
	headline: 'Modern Frontend, Mobile UI & Workflow Automation',
	email: 'patelyash9712@gmail.com',
	phone: '+91 7041099374',
	phoneHref: 'tel:+917041099374',
	githubHref: 'https://github.com/YashPatel1605',
	linkedInHref: 'https://www.linkedin.com/in/yash1605',
	resumeHref: '/assets/yash-patel-resume.pdf',
	videoHref: '/assets/react-native-developer-video.mp4',
	summary:
		'Frontend Developer with 2.5 years of experience shipping production mobile applications, responsive web platforms, APIs, and n8n workflows. I specialize in polished React and Next.js interfaces, React Native apps, real-time features, live location tracking, push notifications, chat, Firebase, MongoDB, WebSocket/Socket.io, Node.js, Express.js, and API integrations.',
	shortSummary:
		'I build modern frontend experiences, production-ready mobile apps, backend APIs, Firebase systems, and n8n automations that help teams move faster.',
}

export const highlights = [
	{ value: '2.5+', label: 'Years Experience' },
	{ value: '6+', label: 'Production Apps & Website' },
	{ value: '1,000+', label: 'End Users Served' },
	{ value: '5+', label: 'n8n Workflows' },
]

export const skills = [
	{
		title: 'Mobile & Web',
		icon: Smartphone,
		items: [
			'React Native',
			'React.js',
			'Next.js',
			'Redux',
			'HTML',
			'CSS',
			'Tailwind CSS',
			'Bootstrap',
		],
	},
	{
		title: 'Backend & APIs',
		icon: Database,
		items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CRUD', 'Authentication', 'Routing'],
	},
	{
		title: 'Realtime Systems',
		icon: MessageCircle,
		items: ['Firebase Realtime DB', 'Firestore', 'WebSocket', 'Socket.io', 'Push Notifications'],
	},
	{
		title: 'Tools & Automation',
		icon: Workflow,
		items: ['n8n', 'Workflow Automation', 'API Integration', 'Strapi', 'Git', 'GitHub'],
	},
	{
		title: 'Languages',
		icon: Code2,
		items: ['JavaScript', 'TypeScript'],
	},
	{
		title: 'Applied AI',
		icon: Bot,
		items: ['LangChain', 'Automation Logic', 'API Orchestration'],
	},
]

export const experiences = [
	{
		company: 'Shiv Shakti Softech',
		location: '',
		title: 'Web/Mobile Application Developer',
		type: 'Full-time',
		period: 'Jan 2024 - August 2026',
		points: [
			'Built and shipped 6+ cross-platform mobile and web applications using React Native, React.js, and Next.js across e-commerce, community, and social-impact domains, serving 1,000+ end users.',
			'Engineered real-time push notification and chat systems using Firebase and WebSocket/Socket.io across 3 production apps.',
			'Built continuous background location tracking with Firebase Realtime Database and Background Geolocation Tracker, delivering live updates to an admin dashboard at 6-second intervals.',
			'Designed 5+ n8n automation workflows integrated with push notification triggers to automate business processes and improve user engagement.',
		],
	},
	{
		company: 'Scale Tech Solutions Pvt. Ltd.',
		location: 'Ahmedabad',
		title: 'College Internship - Training',
		type: 'Internship',
		period: 'July 2023 - Nov 2023',
		points: [
			'Used JavaScript libraries and frameworks to improve application functionality and user experience.',
			'Worked with Visual Studio Code as the primary IDE for coding, debugging, and project management.',
			'Used Git and GitHub for version control, codebase integrity, and collaborative development with team members.',
		],
	},
]

export type Project = {
	name: string
	category: string
	platform: string
	period?: string
	status?: string
	application?: string
	links?: {
		label: string
		href: string
	}[]
	summary: string
	impact: string[]
	tech: string[]
	icon: LucideIcon
}

export const projects: Project[] = [
	{
		name: 'Karzame',
		category: 'Virtual Safety Application',
		platform: 'Android',
		period: 'July 2024 - December 2025',
		status: 'Live',
		application: 'Mobile Application',
		links: [{ label: 'Play Store', href: 'https://play.google.com/store/search?q=Karzame&c=apps' }],
		summary:
			'A real-time safety tracking application for Nigeria that monitors users during journeys and shares live location with an admin dashboard.',
		impact: [
			'Integrated Firebase Realtime Database with Background Geolocation Tracker.',
			'Delivered location updates every 6 seconds for journey monitoring.',
			'Configured automated push notifications for unexpected delays.',
		],
		tech: ['React Native', 'Firebase Realtime DB', 'Background Location', 'Push Notifications'],
		icon: MapPinned,
	},
	{
		name: 'OaVana',
		category: 'Green Initiative Mobile App',
		platform: 'Android & iOS',
		application: 'Mobile Application',
		period: '3 Months',
		status: 'Live',
		links: [
			{ label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.oavana' },
		],
		summary:
			'A social-impact app where users complete daily environmental pledges to earn tokens and points.',
		impact: [
			'Developed daily random pledges and referral rewards.',
			'Built leaderboard, token management, and user profile flows.',
			'Planned team challenges and token marketplace features.',
		],
		tech: ['React Native', 'MongoDB', 'Node.js', 'Rewards', 'Team Challenges'],
		icon: BellRing,
	},
	{
		name: 'Apna Mandal',
		category: 'Community Management',
		platform: 'Android & iOS',
		period: '6 Months',
		status: 'Live',
		application: 'Mobile Application',
		links: [
			{ label: 'Play Store', href: 'https://play.google.com/store/search?q=apna+mandal&c=apps' },
			{ label: 'App Store', href: 'https://apps.apple.com/in/app/apna-mandal/id6761112400' },
		],
		summary:
			'A community management app that helps social organizations collaborate through one digital platform.',
		impact: [
			'Digitized events, social projects, posts, and donation workflows.',
			'Supported community organizations previously operating manually.',
			'Built cross-platform app flows for Android and iOS.',
		],
		tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Community Management'],
		icon: BriefcaseBusiness,
	},
	{
		name: 'Setu App',
		category: 'Devotional Content Platform',
		platform: 'Android',
		application: 'Mobile Application',
		summary:
			'A devotional and spiritual mobile app with personalized deity-based content and daily highlights.',
		impact: [
			'Added curated content for news, articles, bhajans, aarti, quizzes, and shlokas.',
			'Built temple information, event posts, and personalized daily highlights.',
			'Kept content discovery simple for recurring daily engagement.',
		],
		tech: ['React Native', 'MongoDB', 'Content Feeds', 'Personalization'],
		icon: PanelsTopLeft,
	},
	{
		name: 'Artisan App',
		category: 'Rozgar App',
		platform: 'Android',
		application: 'Mobile Application',
		summary:
			'A dual-flow local hiring platform where artisans list services and users browse local jobs.',
		impact: [
			'Built artisan skill listings, local job browsing, and application workflows.',
			'Integrated real-time chat between users and artisans.',
			'Supported local-area job coordination and communication.',
		],
		tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
		icon: MessageCircle,
	},
	{
		name: 'GYM-Fitness',
		category: 'Fitness Brand Website',
		platform: 'Next.js Web Application',
		application: 'Web Application',
		links: [{ label: 'Live Demo', href: 'https://gym-fitness-eight.vercel.app/' }],
		summary:
			'A responsive fitness and gym web application built as a complete digital platform for memberships, programs, recipes, trainers, fitness tools, store products, and lead generation.',
		impact: [
			'Designed a conversion-focused landing page with hero CTAs, member stats, services, membership plans, testimonials, trainers, and a final join-now call to action.',
			'Planned structured pages for workout programs, recipes, product store, trainer profiles, about, FAQ, contact, and fitness calculators.',
			'Mapped user flows from homepage discovery to program selection, membership conversion, and contact lead capture.',
			'Outlined advanced growth features including trainer booking, user dashboard, progress tracking, and AI workout suggestions.',
		],
		tech: ['Next.js', 'React.js', 'Responsive UI', 'E-commerce', 'Lead Generation'],
		icon: ShoppingBag,
	},
]

export const services = [
	'React Native applications',
	'Responsive web applications',
	'Realtime chat and location tracking',
	'Firebase and REST API integration',
	'n8n workflow automation',
	'Headless CMS builds with Strapi',
]

export const education = {
	icon: GraduationCap,
	school: 'Gujarat Technological University',
	college: 'Government Engineering College, Modasa',
	degree: 'Bachelor of Engineering (B.E.) in Computer Science',
	period: '2020 - 2024',
	cgpa: '8.33',
}
