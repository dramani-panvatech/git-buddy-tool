import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import attorneyPhoto from "@/assets/attorney-photo.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful outcomes for our clients"
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Deep understanding of law and legal precedents"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Every client receives dedicated, individualized care"
    },
    {
      icon: Clock,
      title: "Timely Response",
      description: "Quick response times and regular case updates"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="relative z-10">
              <img
                src={attorneyPhoto}
                alt="Attorney Sarah Johnson - Experienced legal professional at RingRemind"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                loading="lazy"
              />
            </div>
            {/* Subtle decorative background */}
            <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl -z-10" aria-hidden="true"></div>
          </div>

          {/* Content Side */}
          <div data-aos="fade-left" data-aos-delay="400">
            <h2 
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            >
              About RingRemind Legal Services
            </h2>
            
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p data-aos="fade-up" data-aos-delay="500">
                At RingRemind, we believe legal guidance should be empowering, not intimidating. 
                Our team listens with empathy and fights with precision, ensuring you feel 
                supported every step of the way.
              </p>
              
              <p data-aos="fade-up" data-aos-delay="600">
                Led by experienced attorney Sarah Johnson, our practice has been serving 
                individuals and families in Poway and surrounding areas for over 25 years. We understand that legal issues 
                can be overwhelming, which is why we're committed to providing clear, 
                compassionate guidance tailored to your unique situation.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" role="list" aria-label="Our core values">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3" 
                    role="listitem"
                    data-aos="fade-up"
                    data-aos-delay={700 + (index * 100)}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-accent" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="1200">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-light"
                aria-label="Schedule a consultation with our legal team"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                aria-label="Download our legal guide"
              >
                Download Our Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;