import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Award, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const productCategories = [
    {
      title: "Environmental Monitoring",
      description: "Comprehensive solutions for air, water, and soil quality monitoring with real-time data collection.",
      icon: "🌍",
      productCount: "25+ Products",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Industrial Automation",
      description: "Smart automation systems that optimize industrial processes and improve operational efficiency.",
      icon: "⚙️",
      productCount: "15+ Solutions",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Data Logging Systems",
      description: "Advanced data collection and analysis tools for comprehensive monitoring and reporting.",
      icon: "📊",
      productCount: "20+ Systems",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Geospatial Technology",
      description: "Cutting-edge GPS and mapping solutions for precision location-based applications.",
      icon: "🗺️",
      productCount: "10+ Tools",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "All products meet international quality standards and certifications."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art technology with continuous innovation and updates."
    },
    {
      icon: Settings,
      title: "Customizable Solutions",
      description: "Tailored products to meet specific industry and application requirements."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Comprehensive technical support and maintenance services."
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
              Our Products
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Innovative
              <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Product Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of cutting-edge products designed to deliver 
              precision, reliability, and excellence across various industries and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our diverse range of products organized by industry and application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {productCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="group bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-700 hover:-translate-y-4 animate-slide-in-left overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg text-2xl`}>
                      {category.icon}
                    </div>
                    
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {category.productCount}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                      >
                        Explore Products
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

          {/* Advantages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={advantage.title}
                className="group bg-gradient-card border-0 shadow-custom-sm hover:shadow-custom-md transition-all duration-500 hover:-translate-y-2 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {advantage.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Content */}
      <Products />

      {/* Technical Specifications */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Technical <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our products are engineered with precision and built to meet the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-0 shadow-custom-lg animate-slide-in-left">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Research & Development</h3>
                <p className="text-muted-foreground mb-6">
                  Continuous innovation through dedicated R&D initiatives and partnerships with leading institutions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Advanced prototyping facilities</li>
                  <li>• Collaborative research programs</li>
                  <li>• Patent-pending technologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-custom-lg animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground mb-6">
                  Rigorous testing procedures ensure every product meets our exacting quality standards.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• ISO certified processes</li>
                  <li>• Multi-stage quality checks</li>
                  <li>• Environmental testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-custom-lg animate-slide-in-right">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Manufacturing</h3>
                <p className="text-muted-foreground mb-6">
                  State-of-the-art manufacturing facilities with precision assembly and quality control.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Clean room assembly</li>
                  <li>• Automated production lines</li>
                  <li>• Real-time quality monitoring</li>
                </ul>
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
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our engineering team can develop customized products tailored to your specific requirements and applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/contact">
                    Request Custom Product
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

export default ProductsPage;