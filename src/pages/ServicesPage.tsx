import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We analyze your requirements and provide expert recommendations.",
      icon: Users,
      color: "from-blue-400 to-cyan-500"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Detailed project planning with timelines and resource allocation.",
      icon: Clock,
      color: "from-purple-400 to-pink-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert execution with continuous monitoring and quality control.",
      icon: Zap,
      color: "from-green-400 to-emerald-500"
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing maintenance and support for optimal performance.",
      icon: Shield,
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const benefits = [
    "24/7 Technical Support",
    "ISO Certified Processes",
    "Experienced Professionals",
    "Cutting-edge Technology",
    "Competitive Pricing",
    "Guaranteed Results",
    "Fast Turnaround Time",
    "Comprehensive Documentation"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Industrial Solutions Ltd",
      role: "Operations Manager",
      quote: "QESPL's monitoring solutions have revolutionized our environmental compliance. Outstanding service!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Green Tech Industries",
      role: "Environmental Director",
      quote: "Their expertise in geospatial technology helped us optimize our operations significantly.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Smart City Solutions",
      role: "Project Lead",
      quote: "Professional, reliable, and innovative. QESPL exceeded our expectations in every aspect.",
      rating: 5
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
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Engineering Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From cloud infrastructure to environmental monitoring, we deliver cutting-edge solutions 
              that drive efficiency, reliability, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <Card 
                key={step.step}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center relative z-10">
                  <div className="text-6xl font-bold text-accent/20 absolute top-4 right-4">
                    {step.step}
                  </div>
                  
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center p-4 bg-gradient-card rounded-lg shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Content */}
      <Services />

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients who trust QESPL.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-accent">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg animate-scale-in overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our engineering solutions can transform your business operations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Link to="/products">
                      View Our Products
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;