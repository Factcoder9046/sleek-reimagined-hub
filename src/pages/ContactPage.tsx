import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Clock, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts for immediate assistance and consultation.",
      action: "+91 8077774614",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us detailed inquiries and we'll respond within 24 hours.",
      action: "qengsolutions@gmail.com",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Schedule a visit to our modern facilities and meet our team in person.",
      action: "Aligarh, Uttar Pradesh",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support through our online chat system during business hours.",
      action: "Start Chat",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const officeInfo = [
    {
      title: "Head Office",
      address: "Naya Nagar CDF Industrial Area, Anopshahar Road, Cherat, Aligarh, Uttar Pradesh 202002",
      phone: "+91 8077774614",
      email: "qengsolutions@gmail.com",
      type: "primary"
    },
    {
      title: "Regional Office",
      address: "Coming Soon - Delhi NCR Region",
      phone: "+91 74179 27988",
      email: "delhi@qespl.com",
      type: "secondary"
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
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Start a
              <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Open to your ideas and always ready for a friendly conversation. 
              Whether you have a project in mind or just want to explore possibilities, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Choose Your Preferred Way to Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple convenient ways to reach us - pick what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left text-center overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {method.description}
                  </p>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    {method.action}
                  </Button>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Locations */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our modern facilities equipped with the latest technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {officeInfo.map((office, index) => (
              <Card 
                key={office.title}
                className={`group border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-slide-in-right ${
                  office.type === 'primary' ? 'bg-gradient-accent text-white' : 'bg-gradient-card'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className={`text-2xl font-bold ${office.type === 'primary' ? 'text-white' : 'text-foreground group-hover:text-accent'} transition-colors duration-300`}>
                      {office.title}
                    </h3>
                    {office.type === 'primary' && (
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        Headquarters
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className={`w-5 h-5 mt-1 flex-shrink-0 ${office.type === 'primary' ? 'text-white' : 'text-accent'}`} />
                      <span className={`text-sm ${office.type === 'primary' ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {office.address}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className={`w-5 h-5 flex-shrink-0 ${office.type === 'primary' ? 'text-white' : 'text-accent'}`} />
                      <span className={`text-sm ${office.type === 'primary' ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {office.phone}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className={`w-5 h-5 flex-shrink-0 ${office.type === 'primary' ? 'text-white' : 'text-accent'}`} />
                      <span className={`text-sm ${office.type === 'primary' ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {office.email}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className={`w-5 h-5 flex-shrink-0 ${office.type === 'primary' ? 'text-white' : 'text-accent'}`} />
                      <span className={`text-sm ${office.type === 'primary' ? 'text-white/90' : 'text-muted-foreground'}`}>
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <Contact />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Partner <span className="text-accent">With Us</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the QESPL difference in customer service and engineering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-0 shadow-custom-lg animate-slide-in-left text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Personalized Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every client receives dedicated attention and customized solutions tailored to their specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-custom-lg animate-scale-in text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We respond to inquiries within 24 hours and provide prompt project timelines and quotes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-custom-lg animate-slide-in-right text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Ongoing Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive support throughout the project lifecycle and beyond, ensuring your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg animate-scale-in">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Vision into Reality?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Take the first step towards innovative engineering solutions. 
                Our team is ready to discuss your project and provide expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/services">
                    Explore Our Services
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
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;