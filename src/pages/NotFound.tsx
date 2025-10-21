import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <div className="mb-8 animate-bounce-in">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="animate-fade-in">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, even the best engineering solutions sometimes need recalibration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-accent text-white hover:shadow-accent px-8 py-3"
            >
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="hover:border-accent hover:text-accent px-8 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
