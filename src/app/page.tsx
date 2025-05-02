import AboutMeSection from '../components/AboutMeSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="dark:text-dark-text dark:bg-dark-background">
      <div className="h-full md:flex relative md:pl-20">
        <div className="md:w-[28%] md:sticky block md:top-0 md:h-screen">
          <Header />
        </div>
        <main className="w-full md:w-[72%] h-full md:overflow-y-auto md:p-16">
          <ThemeToggle />
          <AboutMeSection />
          <ExperienceSection />
          <ProjectsSection />
          <GallerySection />
        </main>
      </div>
      <footer className="text-center p-4">
        &copy; 2025 Michelle Lee Widjaja
      </footer>
    </div>
  );
}
