import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Gauge, Droplet, Zap, Wind, Thermometer, ArrowRight, Star } from "lucide-react";

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "air", name: "Air Monitoring" },
    { id: "water", name: "Water Quality" },
    { id: "stack", name: "Stack Monitoring" },
  ];

  const products = [
    {
      id: 1,
      name: "Air Quality Monitoring System",
      category: "air",
      description: "Comprehensive air quality monitoring with real-time data collection and analysis capabilities.",
      features: ["PM2.5 & PM10 Detection", "Gas Analysis", "Real-time Alerts", "Data Logging"],
      icon: Wind,
      image: "/placeholder-product-1.jpg",
      rating: 4.8,
      price: "Contact for Quote",
      specifications: {
        "Measurement Range": "0-1000 μg/m³",
        "Accuracy": "±5%",
        "Response Time": "< 10 seconds",
        "Operating Temperature": "-20°C to +50°C",
        "Power Supply": "12V DC / 24V AC",
        "Communication": "RS485, Ethernet, Wi-Fi"
      },
      detailedDescription: "Our Air Quality Monitoring System provides continuous, accurate measurement of particulate matter and gaseous pollutants. Featuring advanced laser scattering technology and electrochemical sensors, this system delivers laboratory-grade precision in field conditions. The integrated data logger stores up to 2 years of measurements, while wireless connectivity enables real-time monitoring from any location.",
      applications: ["Environmental Monitoring", "Industrial Emissions", "Urban Air Quality", "Research Studies"],
      certifications: ["ISO 9001", "CE Marking", "FCC Certified"]
    },
    {
      id: 2,
      name: "Weather Station",
      category: "air",
      description: "Professional weather monitoring station for meteorological data collection and environmental analysis.",
      features: ["Multi-parameter Monitoring", "Wireless Connectivity", "Weather Forecasting", "Historical Data"],
      icon: Thermometer,
      image: "/placeholder-product-2.jpg"
    },
    {
      id: 3,
      name: "Continuous Ambient Air Quality Monitoring System",
      category: "air",
      description: "Advanced ambient air quality monitoring with continuous data collection and regulatory compliance.",
      features: ["24/7 Monitoring", "Regulatory Compliance", "Remote Access", "Auto Calibration"],
      icon: Monitor,
      image: "/placeholder-product-3.jpg"
    },
    {
      id: 4,
      name: "Plume Analyzer",
      category: "stack",
      description: "Precision plume analysis system for industrial emission monitoring and environmental compliance.",
      features: ["Emission Analysis", "Opacity Measurement", "Compliance Reporting", "Real-time Monitoring"],
      icon: Gauge,
      image: "/placeholder-product-4.jpg"
    },
    {
      id: 5,
      name: "Continuous Emission Monitoring System",
      category: "stack",
      description: "Complete emission monitoring solution for industrial stacks with real-time data transmission.",
      features: ["Multi-gas Detection", "Data Transmission", "Compliance Reports", "Remote Monitoring"],
      icon: Monitor,
      image: "/placeholder-product-5.jpg"
    },
    {
      id: 6,
      name: "Sound Level Meter",
      category: "air",
      description: "Professional noise monitoring equipment for environmental noise assessment and control.",
      features: ["Precision Measurement", "Data Logging", "Frequency Analysis", "Portable Design"],
      icon: Gauge,
      image: "/placeholder-product-6.jpg"
    },
    {
      id: 7,
      name: "Tube Dilution Stack Particulate Monitor",
      category: "stack",
      description: "Advanced particulate monitoring system for stack emissions with high accuracy and reliability.",
      features: ["Particulate Detection", "Stack Integration", "Continuous Operation", "Low Maintenance"],
      icon: Monitor,
      image: "/placeholder-product-7.jpg"
    },
    {
      id: 8,
      name: "Stack Opacity Analyzer",
      category: "stack",
      description: "Optical monitoring system for measuring stack opacity and ensuring environmental compliance.",
      features: ["Optical Analysis", "Real-time Display", "Alarm Systems", "Weather Resistant"],
      icon: Gauge,
      image: "/placeholder-product-8.jpg"
    },
    {
      id: 9,
      name: "Water Analyzer",
      category: "water",
      description: "Comprehensive water quality analysis system for multiple parameters and real-time monitoring.",
      features: ["Multi-parameter Analysis", "Real-time Results", "Data Storage", "Easy Calibration"],
      icon: Droplet,
      image: "/placeholder-product-9.jpg"
    },
    {
      id: 10,
      name: "Digital Ground Water Level Recorder",
      category: "water",
      description: "Automated groundwater level monitoring with digital recording and data transmission capabilities.",
      features: ["Automated Recording", "Data Transmission", "Long Battery Life", "Weatherproof Design"],
      icon: Gauge,
      image: "/placeholder-product-10.jpg"
    },
    {
      id: 11,
      name: "Electromagnetic Flowmeter",
      category: "water",
      description: "High-precision electromagnetic flow measurement for liquid flow monitoring applications.",
      features: ["High Accuracy", "No Moving Parts", "Wide Range", "Easy Installation"],
      icon: Zap,
      image: "/placeholder-product-11.jpg"
    },
    {
      id: 12,
      name: "Digital Data Logger",
      category: "all",
      description: "Universal data logging solution for various environmental parameters with wireless connectivity.",
      features: ["Multi-channel Input", "Wireless Connectivity", "Data Storage", "Remote Access"],
      icon: Monitor,
      image: "/placeholder-product-12.jpg"
    }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-4">
            Advanced Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of environmental monitoring and engineering products 
            designed to deliver precise, reliable, and innovative solutions for various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-gradient-accent text-white shadow-accent" 
                  : "hover:border-accent hover:text-accent"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <product.icon className="w-16 h-16 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-accent/20 transition-all duration-300"></div>
                  
                  {/* Product Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 text-xs bg-white/90 text-primary backdrop-blur-sm"
                  >
                    {categories.find(cat => cat.id === product.category)?.name.split(' ')[0]}
                  </Badge>

                  {/* Rating */}
                  {product.rating && (
                    <div className="absolute top-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-primary">{product.rating}</span>
                    </div>
                  )}

                  {/* View Details Button */}
                  <Button 
                    size="sm" 
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-primary hover:bg-accent hover:text-white backdrop-blur-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
                
                <div className="p-6">
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2 flex-1">
                      {product.name}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCard(expandedCard === product.id ? null : product.id)}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedCard === product.id ? 'rotate-90' : ''}`} />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    {product.price && (
                      <div className="text-lg font-bold text-accent">
                        {product.price}
                      </div>
                    )}
                    {product.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Expandable Features */}
                  <div className={`space-y-2 mb-4 transition-all duration-300 ${expandedCard === product.id ? 'max-h-none' : 'max-h-20 overflow-hidden'}`}>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="flex-1 bg-gradient-accent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      View Details
                    </Button>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                    >
                      Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                We offer custom engineering solutions tailored to your specific requirements. 
                Contact our team to discuss your unique project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4"
                >
                  Request Custom Solution
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  Download Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;