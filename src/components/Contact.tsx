import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Naya Nagar CDF Industrial Area", "Anopshahar Road, Cherat", "Aligarh, Uttar Pradesh 202002", "Uttar Pradesh"],
      color: "text-accent"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8077774614", "+91 74179 27988", "+91 7017962226"],
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["qengsolutions@gmail.com", "info@qespl.com"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Closed"],
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open to your ideas and always ready for a friendly conversation. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="group bg-gradient-card border-0 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-accent text-white group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-sm ${info.color} leading-relaxed`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-custom-md animate-scale-in">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <button
                      key={index}
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-primary text-primary-foreground border-0 shadow-custom-lg animate-slide-in-right">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        required
                        placeholder="Your full name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input 
                        required
                        type="tel"
                        placeholder="Your phone number"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-primary hover:bg-accent hover:text-white py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                  <p className="text-white/80 text-sm">
                    We typically respond within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="border-0 shadow-custom-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit Our Office</h3>
                <p className="text-muted-foreground max-w-md">
                  Located in the heart of Aligarh's industrial area, our office is easily accessible 
                  and equipped with modern facilities for client meetings and demonstrations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;