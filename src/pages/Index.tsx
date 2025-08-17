import HeroSection from "@/components/HeroSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SpecializationsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
