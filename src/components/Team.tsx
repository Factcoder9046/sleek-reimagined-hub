import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mohd Abu Saad",
      role: "Director",
      expertise: "Strategic Leadership & Engineering Management",
      image: "/lovable-uploads/team-member-1.jpg", // Placeholder - would use actual images
      bio: "Leading the company with over 15 years of experience in engineering solutions and strategic business development.",
      skills: ["Leadership", "Strategy", "Engineering Management"]
    },
    {
      name: "Irshad Ahmad",
      role: "Director",
      expertise: "Technical Innovation & Product Development",
      image: "/lovable-uploads/team-member-2.jpg", // Placeholder
      bio: "Driving technical innovation with expertise in geospatial technology and product development.",
      skills: ["Innovation", "Product Development", "Geospatial Tech"]
    },
    {
      name: "Mohd Sufian",
      role: "Director",
      expertise: "Operations & Quality Assurance",
      image: "/lovable-uploads/team-member-3.jpg", // Placeholder
      bio: "Ensuring operational excellence and quality standards across all projects and deliverables.",
      skills: ["Operations", "Quality Assurance", "Project Management"]
    },
    {
      name: "Mohd Imran",
      role: "Technical Manager",
      expertise: "System Integration & Technical Solutions",
      image: "/lovable-uploads/team-member-4.jpg", // Placeholder
      bio: "Managing technical implementations and system integrations for complex engineering projects.",
      skills: ["System Integration", "Technical Solutions", "Team Management"]
    },
    {
      name: "Mohd Akif",
      role: "Sr. Developer",
      expertise: "Software Development & System Architecture",
      image: "/lovable-uploads/team-member-5.jpg", // Placeholder
      bio: "Developing robust software solutions and architecting scalable systems for engineering applications.",
      skills: ["Software Development", "System Architecture", "Full Stack Development"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Meet Our Experts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Dynamic <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Quick Engineering Solutions, our dynamic team of professionals, experts in engineering, 
            technology, and environmental sciences, collaborates to provide innovative solutions for 
            today's environmental challenges.
          </p>
        </div>

        {/* Team Illustration */}
        <div className="flex justify-center mb-16 animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-accent rounded-full flex items-center justify-center opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">👥</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              TEAM
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-slide-in-left overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                {/* Profile Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-50">👤</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {member.role}
                  </Badge>
                  
                  <p className="text-sm font-medium text-accent mb-3">
                    {member.expertise}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Contact Actions */}
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-colors duration-300">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-custom-lg animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              With a shared commitment to excellence, creativity, and innovation, 
              we are the architects of a brighter, more sustainable future.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-card rounded-xl">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">Committed to delivering the highest quality solutions</p>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl">
              <div className="text-3xl mb-4">💡</div>
              <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">Pioneering new approaches to engineering challenges</p>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Working together to achieve exceptional results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;