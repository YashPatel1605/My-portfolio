import { PortfolioShell } from "./components/PortfolioShell";
import { profile, projects, skills } from "./data/portfolio";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    email: profile.email,
    telephone: profile.phone,
    knowsAbout: skills.flatMap((group) => group.items),
    hasOccupation: {
      "@type": "Occupation",
      name: "React Native Developer",
      skills: skills.flatMap((group) => group.items).join(", "),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      name: "Yash Patel Portfolio",
    },
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      description: project.summary,
      applicationCategory: project.category,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioShell />
    </>
  );
}
