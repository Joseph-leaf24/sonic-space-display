import { Headphones, Mic, Sliders, Music, Radio, Zap } from "lucide-react";

const SpecializationsSection = () => {
  const specializations = [
    {
      icon: <Sliders className="w-8 h-8" />,
      title: "Mixing & Mastering",
      description: "Professional audio mixing and mastering for all genres",
      skills: ["Pro Tools", "Logic Pro X", "Waves", "FabFilter", "Analog Processing"]
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Recording & Production",
      description: "Studio recording and music production services",
      skills: ["Microphone Techniques", "Studio Design", "Live Recording", "Overdubbing", "Comping"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Post-Production",
      description: "Sound design and audio for film and media",
      skills: ["Dialogue Editing", "Sound Effects", "Foley", "ADR", "5.1 Mixing"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Broadcast Audio",
      description: "Live sound and broadcast engineering",
      skills: ["Live Console", "RF Systems", "Streaming", "Broadcast Standards", "Monitoring"]
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Production",
      description: "Complete music production from concept to release",
      skills: ["Arrangement", "MIDI Programming", "Virtual Instruments", "Beat Making", "Songwriting"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Audio Restoration",
      description: "Professional audio cleanup and restoration",
      skills: ["Noise Reduction", "Spectral Repair", "Vinyl Transfer", "Archive Restoration", "RX Suite"]
    }
  ];

  return (
    <section id="specializations" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Core <span className="gradient-text">Specializations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I specialize in end-to-end audio solutions, from initial recording 
            through to final delivery and distribution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="portfolio-card group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {spec.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {spec.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {spec.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;