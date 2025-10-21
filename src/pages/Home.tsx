import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Award, Users, Star, CheckCircle, TrendingUp, Globe, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import industryEnvironmental from "@/assets/industry-environmental.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industrySmartCity from "@/assets/industry-smart-city.jpg";
import industryRenewable from "@/assets/industry-renewable.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Solutions",
      description: "Rapid deployment and implementation of cutting-edge engineering solutions.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Industry-leading security standards and 99.9% uptime reliability.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Award,
      title: "Award Winning Quality",
      description: "Recognized excellence in engineering solutions and customer satisfaction.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with decades of combined engineering experience.",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const quickStats = [
    { label: "Projects Delivered", value: "500+", color: "text-accent" },
    { label: "Years Experience", value: "15+", color: "text-success" },
    { label: "Happy Clients", value: "50+", color: "text-primary" },
    { label: "Countries Served", value: "10+", color: "text-accent" }
  ];

  const industries = [
    {
      title: "Environmental Monitoring",
      description: "Advanced air and water quality monitoring solutions for environmental compliance.",
      icon: Globe,
      image: industryEnvironmental,
      projects: "120+ Projects",
      gradient: "from-green-400 to-emerald-500",
      features: ["Real-time monitoring", "Compliance reporting", "Data analytics"]
    },
    {
      title: "Industrial Automation",
      description: "Smart automation systems for enhanced operational efficiency and productivity.",
      icon: Target,
      image: industryManufacturing,
      projects: "80+ Installations",
      gradient: "from-blue-400 to-cyan-500",
      features: ["Process control", "Quality assurance", "Performance optimization"]
    },
    {
      title: "Smart City Solutions",
      description: "Innovative urban infrastructure monitoring for sustainable smart cities.",
      icon: Lightbulb,
      image: industrySmartCity,
      projects: "60+ Deployments",
      gradient: "from-teal-400 to-cyan-500",
      features: ["Traffic management", "Energy efficiency", "Public safety"]
    },
    {
      title: "Renewable Energy",
      description: "Cutting-edge R&D solutions for clean energy innovation and sustainability.",
      icon: Lightbulb,
      image: industryRenewable,
      projects: "50+ Innovations",
      gradient: "from-purple-400 to-pink-500",
      features: ["Solar monitoring", "Wind analysis", "Grid integration"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Environmental Director",
      company: "GreenTech Industries",
      quote: "QESPL's monitoring solutions have revolutionized our environmental compliance. Their expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechFlow Solutions",
      quote: "The automation systems provided by QESPL increased our efficiency by 40%. Exceptional quality and support.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Research Lead",
      company: "InnovLab Corp",
      quote: "Their innovative approach to problem-solving has been instrumental in our breakthrough discoveries.",
      rating: 5
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Consultation",
      description: "We analyze your requirements and provide tailored recommendations."
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our experts create detailed designs and implementation strategies."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional installation and integration with rigorous testing."
    },
    {
      step: "04",
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to ensure optimal performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Client Logos Section */}
      <ClientLogos />
      
      {/* Features Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,theme(colors.accent.DEFAULT)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,theme(colors.primary.DEFAULT)_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-accent">QESPL</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our innovative approach to engineering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {quickStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-scale-in">
            <Card className="bg-gradient-hero text-white border-0 shadow-custom-lg max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-12 relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Project?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join hundreds of satisfied clients who trust QESPL for their engineering solutions.
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
                        Explore Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-primary bg-accent/10">
              Industry Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Specialized <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering tailored engineering solutions across diverse industries with proven expertise and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {industries.map((industry, index) => (
              <Card 
                key={industry.title}
                className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={`${industry.title} solutions`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-accent/60 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{industry.title}</h3>
                    <p className="text-sm opacity-90">{industry.projects}</p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-white/90 text-primary backdrop-blur-sm"
                  >
                    {industry.projects}
                  </Badge>
                </div>
                
                <CardContent className="p-6 relative">
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {industry.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge variant="secondary" className="mb-4 text-primary bg-success/10">
                Innovation & Technology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pioneering the <span className="text-accent">Future</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At QESPL, we're constantly pushing the boundaries of what's possible. Our commitment to 
                innovation drives us to develop cutting-edge solutions that transform industries.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Advanced IoT Integration",
                  "AI-Powered Analytics",
                  "Real-time Monitoring Systems",
                  "Sustainable Engineering Practices"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild
                size="lg"
                className="bg-gradient-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Link to="/services">
                  Explore Innovation
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="animate-scale-in">
              <Card className="bg-gradient-card border-0 shadow-custom-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">25+</div>
                      <div className="text-sm text-muted-foreground">Patents Filed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success mb-2">98%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">150+</div>
                      <div className="text-sm text-muted-foreground">Innovations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We <span className="text-accent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from consultation to ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <Card 
                key={process.step}
                className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {process.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-primary bg-success/10">
              Client Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      {testimonial.company}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;