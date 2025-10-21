import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Star, Shield, Award, Download, Quote, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Monitor, Gauge, Droplet, Zap, Wind, Thermometer } from "lucide-react";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Air Quality Monitoring System",
      category: "air",
      description: "Comprehensive air quality monitoring with real-time data collection and analysis capabilities.",
      features: ["PM2.5 & PM10 Detection", "Gas Analysis", "Real-time Alerts", "Data Logging"],
      icon: Wind,
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
      certifications: ["ISO 9001", "CE Marking", "FCC Certified"],
      technicalSpecs: {
        "Detection Method": "Laser Scattering + Electrochemical",
        "Measurement Parameters": "PM2.5, PM10, SO2, NO2, CO, O3",
        "Data Storage": "2 years internal memory",
        "Connectivity": "4G/WiFi/Ethernet",
        "Display": "7-inch color touchscreen",
        "Dimensions": "350 × 280 × 150 mm",
        "Weight": "8.5 kg",
        "Certification": "CE, FCC, RoHS"
      }
    },
    {
      id: 2,
      name: "Weather Station",
      category: "air",
      description: "Professional weather monitoring station for meteorological data collection and environmental analysis.",
      features: ["Multi-parameter Monitoring", "Wireless Connectivity", "Weather Forecasting", "Historical Data"],
      icon: Thermometer,
      rating: 4.7,
      price: "₹2,50,000",
      specifications: {
        "Temperature Range": "-40°C to +70°C",
        "Humidity Range": "0-100% RH",
        "Wind Speed": "0-60 m/s",
        "Pressure Range": "300-1100 hPa",
        "Data Logger": "1 year storage",
        "Power": "Solar + Battery backup"
      },
      detailedDescription: "Advanced meteorological station combining precision sensors with intelligent data processing. Features automated weather forecasting algorithms and integration with satellite data for enhanced accuracy.",
      applications: ["Agriculture", "Aviation", "Research", "Environmental Monitoring"],
      certifications: ["WMO Standards", "ISO 9001", "CE Marking"]
    },
    {
      id: 3,
      name: "Water Quality Sensor",
      category: "water",
      description: "Advanced sensor for real-time water quality analysis and pollution detection.",
      features: ["pH Monitoring", "Turbidity Measurement", "Dissolved Oxygen", "Contaminant Detection"],
      icon: Droplet,
      rating: 4.6,
      price: "$1,800",
      specifications: {
        "pH Range": "0-14",
        "Turbidity Range": "0-1000 NTU",
        "DO Range": "0-20 mg/L",
        "Temperature Range": "0-50°C",
        "Power Supply": "5V DC",
        "Communication": "Bluetooth, USB"
      },
      detailedDescription: "Our Water Quality Sensor utilizes optical and electrochemical techniques to provide accurate, continuous measurement of key water quality parameters. Designed for both freshwater and marine environments, this sensor is ideal for environmental monitoring, aquaculture, and industrial wastewater treatment.",
      applications: ["River Monitoring", "Aquaculture", "Wastewater Treatment", "Drinking Water"],
      certifications: ["EPA Compliant", "CE Marking"]
    },
    {
      id: 4,
      name: "Energy Consumption Meter",
      category: "energy",
      description: "Smart meter for monitoring energy usage and optimizing power consumption.",
      features: ["Real-time Monitoring", "Remote Control", "Usage Analysis", "Alert Notifications"],
      icon: Zap,
      rating: 4.5,
      price: "$850",
      specifications: {
        "Voltage Range": "100-240V AC",
        "Current Range": "0-100A",
        "Frequency": "50/60 Hz",
        "Accuracy": "±1%",
        "Communication": "Wi-Fi, Zigbee",
        "Data Storage": "Cloud-based"
      },
      detailedDescription: "Our Energy Consumption Meter provides detailed insights into energy usage patterns, enabling users to identify inefficiencies and reduce costs. With remote control capabilities and real-time alerts, this meter is perfect for smart homes, commercial buildings, and industrial facilities.",
      applications: ["Smart Homes", "Commercial Buildings", "Industrial Facilities", "Energy Audits"],
      certifications: ["Energy Star", "FCC Certified"]
    },
    {
      id: 5,
      name: "Industrial Vibration Sensor",
      category: "industrial",
      description: "Robust vibration sensor for monitoring machinery health and preventing equipment failure.",
      features: ["Triaxial Measurement", "Frequency Analysis", "Threshold Alerts", "Predictive Maintenance"],
      icon: Gauge,
      rating: 4.9,
      price: "$2,200",
      specifications: {
        "Frequency Range": "1-1000 Hz",
        "Amplitude Range": "0-25 mm/s",
        "Accuracy": "±2%",
        "Operating Temperature": "-40°C to +85°C",
        "Power Supply": "24V DC",
        "Communication": "RS485, Ethernet"
      },
      detailedDescription: "Our Industrial Vibration Sensor provides early detection of machinery faults, enabling proactive maintenance and preventing costly downtime. Featuring triaxial measurement and advanced frequency analysis, this sensor is ideal for monitoring pumps, motors, and other critical equipment.",
      applications: ["Pumps", "Motors", "Gearboxes", "Compressors"],
      certifications: ["ISO 10816", "CE Marking"]
    },
    {
      id: 6,
      name: "Smart Agriculture Kit",
      category: "agriculture",
      description: "Integrated kit for precision agriculture, including soil sensors, weather station, and irrigation control.",
      features: ["Soil Moisture", "Nutrient Levels", "Weather Data", "Automated Irrigation"],
      icon: Monitor,
      rating: 4.7,
      price: "$3,500",
      specifications: {
        "Soil Moisture Range": "0-100%",
        "Nutrient Range": "0-200 ppm",
        "Temperature Range": "-10°C to +60°C",
        "Rainfall": "0-200 mm/hr",
        "Power Supply": "Solar + Battery",
        "Communication": "LoRaWAN"
      },
      detailedDescription: "Our Smart Agriculture Kit provides farmers with the tools they need to optimize crop yields and reduce resource consumption. Featuring soil sensors, a weather station, and automated irrigation control, this kit enables data-driven decision-making and sustainable farming practices.",
      applications: ["Crop Monitoring", "Irrigation Management", "Fertilizer Optimization", "Yield Prediction"],
      certifications: ["Precision Ag Certified", "CE Marking"]
    },
  ];

  const product = products.find(p => p.id === parseInt(productId || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const ProductIcon = product.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gradient-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              Home
            </Button>
            <ChevronRight className="w-4 h-4" />
            <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>
              Products
            </Button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/products")}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Monitoring
                </Badge>
                {product.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-white/70">(124 reviews)</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {product.name}
              </h1>
              
              <p className="text-xl text-white/90 mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {product.detailedDescription || product.description}
              </p>
              
              <div className="flex items-center space-x-4 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold text-accent-light">
                  {product.price}
                </div>
                <div className="flex space-x-2">
                  <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white">
                    <Quote className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Download className="w-4 h-4 mr-2" />
                    Download Spec
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 text-center">
                  <ProductIcon className="w-32 h-32 text-accent-light mx-auto mb-4 animate-bounce-slow" />
                  <div className="text-sm text-white/70 mb-2">Starting from</div>
                  <div className="text-2xl font-bold text-white">{product.price}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Features */}
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-success mr-2" />
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b border-border hover:bg-secondary/20 transition-colors">
                            <td className="py-3 pr-6 font-medium text-foreground">{key}</td>
                            <td className="py-3 text-muted-foreground">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              {product.applications && (
                <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                      <Award className="w-6 h-6 text-primary mr-2" />
                      Applications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-accent transition-colors">
                          <div className="w-3 h-3 bg-gradient-accent rounded-full flex-shrink-0"></div>
                          <span className="text-foreground font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="sticky top-6 animate-slide-in-right">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Need More Information?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get in touch with our technical experts for detailed specifications and custom solutions.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-accent">
                      Request Technical Details
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Demo
                    </Button>
                    <Button variant="outline" className="w-full">
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              {product.certifications && (
                <Card className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
                    <div className="space-y-3">
                      {product.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-success/10 border border-success/20">
                          <Award className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-foreground font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Support */}
              <Card className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Support & Service</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>24/7 Technical Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>On-site Installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Remote Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Annual Maintenance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
