import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="Legal office background"
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            AI-powered legal software that makes {" "}
            <span className="text-accent">life easier for everyone in your firm</span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Legal support that listens first. Serving our community with compassion and clarity.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-lg px-8 py-4 h-auto"
              aria-label="Schedule your free legal consultation"
            >
              <a href="https://stageadmin.ringremind.com/Onboarding" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
            role="region"
            aria-label="Trust indicators"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="text-center" data-aos="zoom-in" data-aos-delay="900">
              <div className="text-2xl font-bold text-accent" aria-label="500 plus cases won">500+</div>
              <div className="text-sm">Cases Won</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="1000">
              <div className="text-2xl font-bold text-accent" aria-label="25 plus years experience">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="1100">
              <div className="text-2xl font-bold text-accent" aria-label="98 percent client satisfaction">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;