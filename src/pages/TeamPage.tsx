import Navigation from "@/components/Navigation";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  const departments = [
    {
      name: "Engineering",
      description: "Expert engineers specializing in environmental monitoring and geospatial technology solutions.",
      icon: "⚙️",
      teamSize: "15+ Engineers",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Research & Development",
      description: "Innovative minds driving the future of engineering solutions and technological advancement.",
      icon: "🔬",
      teamSize: "8+ Researchers",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Quality Assurance",
      description: "Dedicated professionals ensuring the highest standards of quality and reliability.",
      icon: "✅",
      teamSize: "6+ Specialists",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Customer Support",
      description: "Committed support team providing excellent customer service and technical assistance.",
      icon: "🎧",
      teamSize: "10+ Agents",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const companyStats = [
    { icon: Users, label: "Team Members", value: "50+", color: "text-accent" },
    { icon: GraduationCap, label: "PhD Holders", value: "12+", color: "text-success" },
    { icon: Briefcase, label: "Years Combined Experience", value: "200+", color: "text-primary" },
    { icon: Award, label: "Certifications", value: "25+", color: "text-accent" }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and innovative solutions to complex engineering challenges.",
      icon: "💡",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      title: "Collaborative Spirit",
      description: "Teamwork and collaboration are at the heart of everything we do at QESPL.",
      icon: "🤝",
      color: "bg-gradient-to-r from-blue-400 to-cyan-500"
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, workshops, and skill development programs.",
      icon: "📚",
      color: "bg-gradient-to-r from-green-400 to-emerald-500"
    },
    {
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between professional achievements and personal well-being.",
      icon: "⚖️",
      color: "bg-gradient-to-r from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen pt-[100px] md:pt-[144px]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-primary bg-white/90">
              Our Team
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Meet the
              <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Experts Behind
              </span>
              <span className="block">Our Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our dynamic team of professionals, experts in engineering, technology, and environmental sciences, 
              collaborates to provide innovative solutions for today's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {companyStats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-bounce-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Departments */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Departments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each department brings specialized expertise to deliver comprehensive engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={dept.name}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${dept.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-2xl`}>
                      {dept.icon}
                    </div>
                    
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {dept.teamSize}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {dept.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Team Content */}
      <Team />

      {/* Company Culture */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values and principles that guide our team and shape our work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <Card 
                key={value.title}
                className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg text-2xl`}>
                      {value.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg animate-scale-in">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Growing Team
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation 
                and excellence in engineering solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Competitive Benefits</h4>
                  <p className="text-sm text-white/80">Health insurance, retirement plans, and performance bonuses</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Professional Growth</h4>
                  <p className="text-sm text-white/80">Training programs, certifications, and career advancement</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Flexible Work</h4>
                  <p className="text-sm text-white/80">Remote work options and flexible scheduling</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/contact">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/about">
                    Learn About Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;