import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yashpatel.dev"),
  title: {
    default: "Yash Patel | React Native Developer",
    template: "%s | Yash Patel",
  },
  description:
    "Yash Patel is a React Native Developer building production mobile and web applications with Firebase, Socket.io, Next.js, live location tracking, chat, push notifications, and n8n automation.",
  keywords: [
    "Yash Patel",
    "React Native Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "Firebase Developer",
    "Socket.io Developer",
    "Web and Mobile Application Development",
  ],
  authors: [{ name: "Yash Patel" }],
  creator: "Yash Patel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Yash Patel | React Native Developer",
    description:
      "Production-ready React Native, React.js, Next.js, Firebase, Socket.io, and n8n automation work across safety, community, and social-impact apps.",
    siteName: "Yash Patel Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Patel | React Native Developer",
    description:
      "React Native Developer with 2.5 years of experience shipping production mobile and web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
