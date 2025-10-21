import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, ExternalLink } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "projects", name: "Projects" },
    { id: "team", name: "Team Events" },
    { id: "equipment", name: "Equipment" },
    { id: "facilities", name: "Facilities" },
  ];

  const images = [
    {
      id: 1,
      title: "Air Quality Monitoring Installation",
      category: "projects",
      description: "Professional installation of air quality monitoring systems at industrial site.",
      image: "/placeholder-gallery-1.jpg"
    },
    {
      id: 2,
      title: "Team Meeting & Planning",
      category: "team",
      description: "Strategic planning session with our engineering team discussing project roadmaps.",
      image: "/placeholder-gallery-2.jpg"
    },
    {
      id: 3,
      title: "Weather Station Setup",
      category: "projects",
      description: "Deployment of advanced weather monitoring station for environmental data collection.",
      image: "/placeholder-gallery-3.jpg"
    },
    {
      id: 4,
      title: "Laboratory Equipment",
      category: "equipment",
      description: "State-of-the-art laboratory equipment for precision testing and calibration.",
      image: "/placeholder-gallery-4.jpg"
    },
    {
      id: 5,
      title: "Client Site Visit",
      category: "projects",
      description: "On-site consultation and assessment for custom monitoring solution implementation.",
      image: "/placeholder-gallery-5.jpg"
    },
    {
      id: 6,
      title: "Team Training Session",
      category: "team",
      description: "Technical training workshop for team members on latest monitoring technologies.",
      image: "/placeholder-gallery-6.jpg"
    },
    {
      id: 7,
      title: "Stack Monitoring System",
      category: "projects",
      description: "Installation and commissioning of continuous emission monitoring system.",
      image: "/placeholder-gallery-7.jpg"
    },
    {
      id: 8,
      title: "Office Facilities",
      category: "facilities",
      description: "Modern office spaces designed for collaboration and innovative thinking.",
      image: "/placeholder-gallery-8.jpg"
    },
    {
      id: 9,
      title: "Field Equipment Testing",
      category: "equipment",
      description: "Field testing and validation of portable monitoring equipment before deployment.",
      image: "/placeholder-gallery-9.jpg"
    },
    {
      id: 10,
      title: "Conference Participation",
      category: "team",
      description: "Team participation in industry conferences and knowledge sharing events.",
      image: "/placeholder-gallery-10.jpg"
    },
    {
      id: 11,
      title: "Water Quality Monitoring",
      category: "projects",
      description: "Implementation of comprehensive water quality monitoring system.",
      image: "/placeholder-gallery-11.jpg"
    },
    {
      id: 12,
      title: "Manufacturing Facility",
      category: "facilities",
      description: "Clean room manufacturing facility for precision instrument assembly.",
      image: "/placeholder-gallery-12.jpg"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Capture Moments
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our journey through images showcasing our projects, team activities, 
            state-of-the-art equipment, and modern facilities.
          </p>
        </div>

        {/* Nature Inspired Header Image */}
        <div className="mb-12 animate-scale-in">
          <Card className="relative h-80 bg-gradient-to-r from-accent/20 to-success/20 overflow-hidden border-0 shadow-custom-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Engineering Nature's Future</h3>
                <p className="text-lg opacity-90 max-w-2xl">
                  Where technology meets environmental stewardship - capturing moments that matter
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-gradient-accent text-white shadow-accent" 
                  : "hover:border-accent hover:text-accent"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className="group bg-background border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl opacity-40">📸</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 text-xs bg-white/90 text-primary"
                  >
                    {categories.find(cat => cat.id === image.category)?.name}
                  </Badge>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
          >
            <Search className="w-4 h-4 mr-2" />
            Load More Images
          </Button>
        </div>

        {/* Modal for Image Detail */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {images.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 hover:bg-secondary rounded-full transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl opacity-40">📸</div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {images.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;