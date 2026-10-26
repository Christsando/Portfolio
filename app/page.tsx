import HeroSection from "./components/hero-section";
import Footer from "./components/footer-section";
import AboutMe from "./components/aboutme-section";
import Navbar from "./components/navbar-section";
import ProjectDetail from "./components/projectdetail-section";
import Project from "./components/projects-section";
import Skills from "./components/skills-section";

export default function Home() {
  return (
    <div className="bg-[#0B0B0B] text-white antialiased">
      <Navbar />

      <main className="flex flex-col w-full min-h-screen max-w-6xl mx-auto transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Project />

      </main>

      <Footer />
    </div>
  );
}