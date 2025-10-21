import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const timeline = [
    {
      year: "2009",
      title: "Company Founded",
      description: "QESPL was established with a vision to revolutionize engineering solutions.",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-blue-400 to-cyan-500"
    },
    {
      year: "2012",
      title: "First Major Contract",
      description: "Secured our first large-scale environmental monitoring project.",
      icon: MapPin,
      color: "bg-gradient-to-r from-green-400 to-emerald-500"
    },
    {
      year: "2015",
      title: "Team Expansion",
      description: "Grew our expert team to 50+ professionals across multiple disciplines.",
      icon: Users,
      color: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      year: "2018",
      title: "Innovation Award",
      description: "Received industry recognition for innovative geospatial technology solutions.",
      icon: Calendar,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Leading provider of engineering solutions with 500+ successful projects.",
      icon: ArrowRight,
      color: "bg-gradient-to-r from-red-400 to-pink-500"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Occupational Health & Safety",
    "NABL Accredited Testing Laboratory",
    "CPCB Authorized Monitoring Agency",
    "Government Approved Vendor"
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
              About QESPL
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Engineering the
              <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Over 15 years of innovation, excellence, and dedication to creating sustainable engineering solutions 
              that make a real difference in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership - discover the milestones that shaped our company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent to-success opacity-30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-center mb-12 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <Card className="bg-gradient-card shadow-custom-lg border-0 hover:shadow-custom-xl transition-all duration-500 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mr-4`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{item.year}</Badge>
                          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <About />

      {/* Certifications Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Certifications & <span className="text-accent">Accreditations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and compliance is validated by leading industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert}
                className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Badge className="text-white text-xs">✓</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {cert}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg animate-scale-in">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Work with Industry Leaders?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our growing list of satisfied clients and experience the QESPL difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4"
                >
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  <Link to="/team">
                    Meet Our Team
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

export default AboutPage;