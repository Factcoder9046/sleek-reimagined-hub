import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Settings, Cpu, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud infrastructure solutions designed to scale with your business needs, ensuring reliability and performance.",
      features: ["Scalable Infrastructure", "Data Security", "24/7 Monitoring", "Cost Optimization"]
    },
    {
      icon: Settings,
      title: "Automation Solutions",
      description: "Streamline your operations with cutting-edge automation technologies that increase efficiency and reduce manual overhead.",
      features: ["Process Automation", "Smart Controls", "Real-time Monitoring", "Custom Integration"]
    },
    {
      icon: Cpu,
      title: "PCB Designing",
      description: "Professional PCB design and development services for electronic products, from concept to manufacturing-ready designs.",
      features: ["Custom PCB Design", "Prototype Development", "Testing & Validation", "Manufacturing Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Elevating Your Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Quick Engineering Solutions, our commitment extends beyond services. 
            It's an experience crafted for excellence. We specialize in delivering 
            tailored solutions that not only meet but exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="bg-gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Delivering Exceptional Solutions for Your Needs
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our services are designed to meet the unique needs and goals of our clients, 
            providing personalized solutions to help them achieve success.
          </p>
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">We pride ourselves on delivering exceptional quality and value</div>
              <div className="text-muted-foreground">using the latest tools and technologies to deliver results that exceed expectations.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;