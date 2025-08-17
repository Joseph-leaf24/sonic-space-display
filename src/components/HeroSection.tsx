import { Button } from "@/components/ui/button";
import { Mail, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/sound-engineer-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Sound Engineer Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 profile-image"
          />
          <h1 className="text-6xl font-heading font-bold mb-4">
            <span className="gradient-text">Alex Thompson</span>
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-6 font-heading">
            Professional Sound Engineer & Audio Producer
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            With over 8 years of experience in audio production, mixing, and mastering, 
            I specialize in creating pristine soundscapes for music, film, and digital media. 
            From recording sessions to final master, I bring your audio vision to life with 
            precision and creativity.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="font-semibold px-8">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="font-semibold px-8">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="mt-8">
          <Button variant="ghost" size="lg">
            <Mail className="w-5 h-5 mr-2" />
            alex@soundstudio.com
          </Button>
        </div>
        
        <div className="mt-16">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;