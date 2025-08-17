import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Indie Rock Album - 'Northern Lights'",
      artist: "The Arctic Sounds",
      type: "Mixing & Mastering",
      year: "2024",
      description: "Complete mixing and mastering of a 12-track indie rock album featuring dynamic range optimization and analog warmth processing.",
      technologies: ["Pro Tools", "SSL Console", "Vintage Compressors", "Tape Saturation"],
      status: "Released"
    },
    {
      title: "Documentary Film Score",
      artist: "Ocean Dreams Productions",
      type: "Audio Post-Production",
      year: "2024",
      description: "Sound design, dialogue editing, and 5.1 surround mixing for award-winning environmental documentary.",
      technologies: ["Avid Pro Tools", "Dolby Atmos", "iZotope RX", "Foley Recording"],
      status: "In Festival Circuit"
    },
    {
      title: "Podcast Series Production",
      artist: "Tech Talk Weekly",
      type: "Audio Production",
      year: "2023-2024",
      description: "Ongoing audio production for popular tech podcast including remote recording, editing, and sound design.",
      technologies: ["Hindenburg Pro", "Adobe Audition", "Remote Recording", "Noise Reduction"],
      status: "Ongoing"
    },
    {
      title: "Jazz Trio Live Album",
      artist: "Blue Note Collective",
      type: "Recording & Mixing",
      year: "2023",
      description: "Live recording and mixing of intimate jazz performance featuring complex microphone placement and natural reverb capture.",
      technologies: ["Neumann Microphones", "Analog Console", "Tape Recording", "Natural Acoustics"],
      status: "Released"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work spanning music production, film audio, 
            and broadcast engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-accent font-medium mb-1">{project.artist}</p>
              <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
              
              <p className="text-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" variant="outline">
                  <Play className="w-4 h-4 mr-2" />
                  Listen
                </Button>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;