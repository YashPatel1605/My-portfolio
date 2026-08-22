import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://yashpatel.dev'),
	title: {
		default: 'Yash Patel | Frontend & React Native Developer',
		template: '%s | Yash Patel',
	},
	icons: {
		icon: '/assets/yash_Image.jpeg',
		apple: '/assets/yash_Image.jpeg',
	},
	description:
		'Yash Patel is a Frontend Developer building modern React, Next.js, and React Native applications with Firebase, Socket.io, live location tracking, chat, push notifications, and n8n automation.',
	keywords: [
		'Yash Patel',
		'Frontend Developer',
		'React Native Developer',
		'Mobile App Developer',
		'Next.js Developer',
		'Firebase Developer',
		'Socket.io Developer',
		'Web and Mobile Application Development',
	],
	authors: [{ name: 'Yash Patel' }],
	creator: 'Yash Patel',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Yash Patel | Frontend & React Native Developer',
		description:
			'Modern React, Next.js, React Native, Firebase, Socket.io, and n8n automation work across safety, community, and social-impact apps.',
		siteName: 'Yash Patel Portfolio',
		locale: 'en_IN',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Yash Patel | Frontend & React Native Developer',
		description:
			'Frontend Developer with 2.5 years of experience shipping polished web and mobile applications.',
	},
	robots: {
		index: true,
		follow: true,
	},
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	)
}
