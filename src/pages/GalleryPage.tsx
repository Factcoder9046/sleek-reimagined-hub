import Navigation from "@/components/Navigation";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Camera, Image, Video, Award } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const mediaStats = [
    { icon: Image, label: "Photo Gallery", value: "500+", color: "text-accent", description: "Project photos and installations" },
    { icon: Video, label: "Video Content", value: "50+", color: "text-success", description: "Demonstration videos and tutorials" },
    { icon: Camera, label: "Live Projects", value: "100+", color: "text-primary", description: "Ongoing project documentation" },
    { icon: Award, label: "Success Stories", value: "25+", color: "text-accent", description: "Featured case studies" }
  ];

  const highlights = [
    {
      title: "Environmental Impact",
      description: "Showcasing how our monitoring solutions contribute to environmental protection and sustainability.",
      icon: "🌱",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Technological Innovation",
      description: "Behind-the-scenes look at our cutting-edge technology and engineering processes.",
      icon: "⚡",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Team Excellence",
      description: "Capturing moments of collaboration, training, and professional development.",
      icon: "👥",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Client Success",
      description: "Documenting successful project implementations and satisfied client partnerships.",
      icon: "🎯",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-primary bg-white/90">
              Media Gallery
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Visual
              <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Journey
              </span>
              <span className="block">of Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of project images, team activities, and technological innovations 
              that showcase the QESPL experience and our commitment to engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Media Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {mediaStats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-bounce-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-foreground font-medium mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gallery Highlights */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Gallery Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the different aspects of our work through carefully curated visual content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-2xl`}>
                      {highlight.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {highlight.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                      >
                        View Collection
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
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

      {/* Featured Showcase */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured <span className="text-accent">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A special collection of our most impactful projects and memorable moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card 
                key={index}
                className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl opacity-40">📸</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 text-xs bg-accent text-white"
                    >
                      Featured
                    </Badge>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Camera className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">View Details</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      Project Showcase {index + 1}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      Detailed documentation of our engineering solutions and their real-world impact.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <Gallery />

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg animate-scale-in">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Want to See Your Project Here?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us document your success story and showcase your project as part of our growing portfolio 
                of engineering excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/services">
                    Our Services
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

export default GalleryPage;