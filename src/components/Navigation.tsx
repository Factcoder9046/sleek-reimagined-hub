import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown, Wind, Droplet, Gauge, Monitor, Thermometer, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import heroAirQuality from "@/assets/hero-air-quality.jpg";
import heroWaterTreatment from "@/assets/hero-water-treatment.jpg";
import heroIndustrial from "@/assets/hero-industrial-1.jpg";
import heroEnvironmental from "@/assets/hero-environmental-2.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const productCategories = [
    { 
      id: "air", 
      name: "Air Quality Monitoring", 
      href: "/products?category=air", 
      icon: Wind,
      description: "Advanced air quality monitoring solutions",
      image: heroAirQuality,
      products: [
        { name: "Air Quality Monitor", icon: Monitor },
        { name: "Weather Station", icon: Thermometer },
        { name: "Ambient Air System", icon: Wind },
        { name: "Sound Level Meter", icon: Gauge },
      ]
    },
    { 
      id: "water", 
      name: "Water Quality Systems", 
      href: "/products?category=water", 
      icon: Droplet,
      description: "Comprehensive water analysis solutions",
      image: heroWaterTreatment,
      products: [
        { name: "Water Analyzer", icon: Droplet },
        { name: "Ground Water Recorder", icon: Gauge },
        { name: "Flow Meter", icon: Zap },
        { name: "Digital Data Logger", icon: Monitor },
      ]
    },
    { 
      id: "stack", 
      name: "Stack Emission Monitoring", 
      href: "/products?category=stack", 
      icon: Gauge,
      description: "Industrial emission monitoring systems",
      image: heroIndustrial,
      products: [
        { name: "Plume Analyzer", icon: Gauge },
        { name: "CEMS System", icon: Monitor },
        { name: "Particulate Monitor", icon: Wind },
        { name: "Opacity Analyzer", icon: Gauge },
      ]
    },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 8077774614</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>qengsolutions@gmail.com</span>
            </div>
          </div>
          <div className="text-xs opacity-90">
            Naya Nagar CDF Industrial Area, Aligarh, Uttar Pradesh
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "top-0 bg-background/95 backdrop-blur-md shadow-custom-md py-2"
            : "top-0 md:top-[44px] bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-accent w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <div>
                <div className={cn(
                  "font-bold text-lg transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-white"
                )}>QESPL</div>
                <div className={cn(
                  "text-xs transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                )}>Engineering Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "transition-colors duration-300 relative group",
                    isScrolled 
                      ? "text-foreground hover:text-accent" 
                      : "text-white hover:text-accent"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Products Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProductsMenu(true)}
                onMouseLeave={() => setShowProductsMenu(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 transition-colors duration-300 relative group outline-none",
                    isScrolled 
                      ? "text-foreground hover:text-accent" 
                      : "text-white hover:text-accent"
                  )}
                >
                  Products
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    showProductsMenu && "rotate-180"
                  )} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Mega Menu Dropdown */}
                {showProductsMenu && (
                  <div 
                    className="fixed left-0 right-0 top-full bg-background/98 backdrop-blur-md border-t border-border shadow-2xl animate-fade-in z-50"
                    onMouseEnter={() => setShowProductsMenu(true)}
                    onMouseLeave={() => {
                      setShowProductsMenu(false);
                      setHoveredCategory(null);
                    }}
                  >
                    <div className="container mx-auto px-4 py-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Left Column - Categories */}
                        <div className="col-span-4 space-y-2">
                          <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                            Product Categories
                          </div>
                          {productCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                              <div
                                key={category.id}
                                onMouseEnter={() => setHoveredCategory(category.id)}
                                className={cn(
                                  "group relative p-4 rounded-lg transition-all duration-300 cursor-pointer",
                                  hoveredCategory === category.id
                                    ? "bg-accent/10 border-l-4 border-accent"
                                    : "hover:bg-secondary/50 border-l-4 border-transparent"
                                )}
                              >
                                <Link to={category.href} className="flex items-start gap-4">
                                  <div className={cn(
                                    "p-3 rounded-lg transition-all duration-300",
                                    hoveredCategory === category.id
                                      ? "bg-accent text-white"
                                      : "bg-secondary/50 text-accent"
                                  )}>
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                      {category.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                      {category.description}
                                    </p>
                                  </div>
                                  <ArrowRight className={cn(
                                    "h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                    hoveredCategory === category.id && "opacity-100"
                                  )} />
                                </Link>
                              </div>
                            );
                          })}
                          
                          {/* View All Products Link */}
                          <Link 
                            to="/products" 
                            className="flex items-center gap-2 p-4 mt-4 rounded-lg bg-gradient-accent text-white hover:shadow-accent transition-all duration-300 group"
                          >
                            <span className="font-semibold">View All Products</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Right Column - Products & Image */}
                        <div className="col-span-8">
                          {hoveredCategory ? (
                            <div className="grid grid-cols-2 gap-6 h-full">
                              {/* Products List */}
                              <div className="space-y-3">
                                <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                                  Featured Products
                                </div>
                                {productCategories
                                  .find(cat => cat.id === hoveredCategory)
                                  ?.products.map((product, idx) => {
                                    const ProductIcon = product.icon;
                                    return (
                                      <Link
                                        key={idx}
                                        to={`/products?category=${hoveredCategory}`}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300 group"
                                      >
                                        <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-accent/10 transition-colors">
                                          <ProductIcon className="h-4 w-4 text-accent" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                          {product.name}
                                        </span>
                                      </Link>
                                    );
                                  })}
                              </div>

                              {/* Category Image */}
                              <div className="relative rounded-xl overflow-hidden group h-full">
                                <img
                                  src={productCategories.find(cat => cat.id === hoveredCategory)?.image}
                                  alt={productCategories.find(cat => cat.id === hoveredCategory)?.name}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                  <h4 className="text-white font-bold text-xl mb-2">
                                    {productCategories.find(cat => cat.id === hoveredCategory)?.name}
                                  </h4>
                                  <p className="text-white/90 text-sm">
                                    Explore our complete range of professional monitoring solutions
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center space-y-4">
                                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden">
                                  <img
                                    src={heroEnvironmental}
                                    alt="Products"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">
                                  Hover over a category
                                </h3>
                                <p className="text-muted-foreground max-w-md">
                                  Discover our wide range of environmental monitoring solutions designed for precision and reliability
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button asChild variant="default" className="bg-gradient-accent text-white hover:shadow-accent">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors duration-300",
                isScrolled 
                  ? "text-foreground hover:bg-secondary" 
                  : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Products Section */}
                <div className="border-t border-border pt-4">
                  <div className="text-sm font-semibold text-muted-foreground mb-3">Products</div>
                  {productCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.id}
                        to={category.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-2.5 text-foreground hover:text-accent transition-colors duration-300"
                      >
                        <Icon className="h-4 w-4 text-accent" />
                        <span>{category.name}</span>
                      </Link>
                    );
                  })}
                </div>

                <Button asChild variant="default" className="bg-gradient-accent text-white w-full mt-4">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;