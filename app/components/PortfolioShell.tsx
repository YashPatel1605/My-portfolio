"use client";

import dynamic from "next/dynamic";
import { BackToTop } from "./layout/BackToTop";
import { Background } from "./layout/Background";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { HeroSection } from "./sections/HeroSection";
import { LazySection } from "./ui/LazySection";

const AboutSection = dynamic(() => import("./sections/AboutSection").then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import("./sections/SkillsSection").then((mod) => mod.SkillsSection));
const ProjectsSection = dynamic(() => import("./sections/ProjectsSection").then((mod) => mod.ProjectsSection));
const ExperienceSection = dynamic(() => import("./sections/ExperienceSection").then((mod) => mod.ExperienceSection));
const EducationSection = dynamic(() => import("./sections/EducationSection").then((mod) => mod.EducationSection));
const ServicesSection = dynamic(() => import("./sections/ServicesSection").then((mod) => mod.ServicesSection));
const ResumeSection = dynamic(() => import("./sections/ResumeSection").then((mod) => mod.ResumeSection));
const ContactSection = dynamic(() => import("./sections/ContactSection").then((mod) => mod.ContactSection));

export function PortfolioShell() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <HeroSection />
        <LazySection component={AboutSection} minHeight={680} />
        <LazySection component={SkillsSection} minHeight={620} />
        <LazySection component={ProjectsSection} minHeight={720} />
        <LazySection component={ExperienceSection} minHeight={560} />
        <LazySection component={EducationSection} minHeight={380} />
        <LazySection component={ServicesSection} minHeight={560} />
        <LazySection component={ResumeSection} minHeight={360} />
        <LazySection component={ContactSection} minHeight={620} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
