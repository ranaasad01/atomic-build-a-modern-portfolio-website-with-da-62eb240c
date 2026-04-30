import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/ui/SectionWrapper";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ProjectsSection, ContactSection, FooterSection } from "@/components/ui/Badge";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ScrollToTop />
    </>
  );
}
