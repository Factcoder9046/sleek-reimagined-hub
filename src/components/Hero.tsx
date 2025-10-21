import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroWaterTreatment from "@/assets/hero-water-treatment.jpg";
import heroAirQuality from "@/assets/hero-air-quality.jpg";
import heroWaterPurification from "@/assets/hero-water-purification.jpg";
import heroAtmospheric from "@/assets/hero-atmospheric.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Animated Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-hero overflow-hidden">
        
        {/* Rising Water Bubbles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => {
            const size = Math.random() * 16 + 6; // 6-22px
            
            return (
              <div
                key={`bubble-${i}`}
                className="absolute rounded-full bg-blue-400/15 backdrop-blur-sm border border-blue-300/20 animate-float"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  bottom: `-${Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 15}s`,
                  filter: 'blur(0.3px)'
                }}
              />
            );
          })}
        </div>

        {/* Water and Air Themed Glowing Orbs */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl animate-slow-spin"></div>
            </div>
          ))}
        </div>
        
        {/* Water Wave Gradients */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(59,130,246,0.25)_0%,transparent_60%)] animate-wave-1"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(125,211,252,0.2)_0%,transparent_60%)] animate-wave-2"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(14,165,233,0.18)_0%,transparent_70%)] animate-wave-3"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(96,165,250,0.15)_0%,transparent_65%)] animate-wave-4"></div>
        </div>

        {/* Water Droplet Grid Pattern */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full animate-grid-shift" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="water-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="0" cy="0" r="0.6" fill="rgba(96,165,250,0.3)" className="animate-pulse"/>
                <circle cx="4" cy="4" r="0.4" fill="rgba(125,211,252,0.2)" className="animate-pulse"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#water-grid)" />
          </svg>
        </div>

        {/* Flowing Water Currents */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waterFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(96,165,250,0)" />
                <stop offset="50%" stopColor="rgba(96,165,250,0.4)" />
                <stop offset="100%" stopColor="rgba(96,165,250,0)" />
              </linearGradient>
              <linearGradient id="waterFlow2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(125,211,252,0)" />
                <stop offset="50%" stopColor="rgba(125,211,252,0.35)" />
                <stop offset="100%" stopColor="rgba(125,211,252,0)" />
              </linearGradient>
            </defs>
            <path d="M 0,200 Q 250,180 500,200 T 1000,200" stroke="url(#waterFlow1)" strokeWidth="2.5" fill="none" className="animate-flow-1"/>
            <path d="M 0,600 Q 300,580 600,600 T 1000,600" stroke="url(#waterFlow2)" strokeWidth="2" fill="none" className="animate-flow-2"/>
            <path d="M 0,400 Q 400,370 800,400 T 1000,400" stroke="url(#waterFlow1)" strokeWidth="1.5" fill="none" className="animate-flow-3"/>
          </svg>
        </div>

        {/* Air Quality Ripples */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`ripple-${i}`}
              className="absolute animate-energy-pulse"
              style={{
                left: `${15 + i * 18}%`,
                top: `${25 + (i % 2) * 45}%`,
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${7 + Math.random() * 3}s`
              }}
            >
              <div className="w-3 h-3 bg-cyan-400/50 rounded-full">
                <div className="absolute inset-0 bg-cyan-300/30 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse scale-150"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Water & Air Technology Image Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Water Treatment Scene */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroWaterTreatment})`,
            animation: 'fadeInOut 16s infinite',
            animationDelay: '0s'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Air Quality Monitoring Scene */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroAirQuality})`,
            animation: 'fadeInOut 16s infinite',
            animationDelay: '4s'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Water Purification Scene */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroWaterPurification})`,
            animation: 'fadeInOut 16s infinite',
            animationDelay: '8s'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Atmospheric Research Scene */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroAtmospheric})`,
            animation: 'fadeInOut 16s infinite',
            animationDelay: '12s'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="text-sm font-medium">🚀 Innovative Engineering Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-left">
            Geospatial Technology,
            <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              Engineering an Accurate Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
            Empowering progress through swift and innovative engineering solutions. 
            Quick Engineering Solutions Pvt Ltd is your partner in efficiency and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;