import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, CheckCircle, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions that exceed client expectations.",
      color: "text-accent"
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Pioneering new approaches and technologies to solve complex engineering challenges.",
      color: "text-success"
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Building trust through consistent performance and dependable service delivery.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand their needs and deliver tailored solutions.",
      color: "text-accent"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Experience", icon: TrendingUp },
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Satisfied Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Target }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Our Company
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who <span className="text-accent">We Are</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Quick Engineering Solutions, our dynamic team of professionals excels in engineering, 
            technology, and environmental sciences, collaborating to provide innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <div className="animate-slide-in-left">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-custom-lg">
              <Badge variant="secondary" className="mb-6">Our Story</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Empowering Progress Through Swift and Innovative Engineering Solutions
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the engineering landscape, Quick Engineering Solutions 
                  Pvt Ltd has been at the forefront of technological innovation for over a decade. Our journey 
                  began with a simple yet powerful mission: to deliver swift, reliable, and cutting-edge 
                  engineering solutions that drive progress across industries.
                </p>
                <p>
                  From humble beginnings to becoming a trusted name in geospatial technology and environmental 
                  monitoring, we have consistently pushed the boundaries of what's possible. Our commitment to 
                  excellence, combined with our innovative approach, has enabled us to serve clients across 
                  diverse sectors while maintaining the highest standards of quality and reliability.
                </p>
                <p>
                  Today, we stand as your reliable partner in efficiency and excellence, ready to tackle 
                  the most complex engineering challenges with creative solutions and unwavering dedication.
                </p>
              </div>
            </div>
          </div>

          {/* Company Image/Illustration */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-accent rounded-2xl p-8 shadow-custom-lg text-white">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-white/90">
                    To be the leading provider of innovative engineering solutions that drive sustainable 
                    progress and create lasting value for our clients and communities.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="text-center">
                      <div className="text-2xl font-bold mb-1">{achievement.number}</div>
                      <div className="text-sm text-white/80">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-accent text-white group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="animate-fade-in">
          <Card className="bg-primary text-primary-foreground border-0 shadow-custom-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Why Choose QESPL?</h3>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                  With a shared commitment to excellence, creativity, and innovation, 
                  we are the architects of a brighter, more sustainable future.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">Proven Expertise</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Years of experience delivering successful projects across diverse industries and applications.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">Innovative Solutions</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Cutting-edge technology and creative approaches to solve your most complex challenges.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">Client-Centric Approach</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Dedicated support and personalized service to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;