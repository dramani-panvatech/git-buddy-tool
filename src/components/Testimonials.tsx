import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Family Law Client",
      content: "RingRemind made my divorce process so much easier than I expected. They were compassionate, professional, and always kept me informed. I couldn't recommend them more highly.",
      rating: 5,
      location: "Poway, CA"
    },
    {
      name: "Michael R.",
      role: "Personal Injury Client",
      content: "After my car accident, I was overwhelmed with medical bills and insurance companies. RingRemind fought hard for my rights and got me the compensation I deserved.",
      rating: 5,
      location: "San Diego, CA"
    },
    {
      name: "Jennifer L.",
      role: "Immigration Client",
      content: "The immigration process was incredibly complex, but RingRemind guided us through every step. They helped our family stay together and achieve our American dream.",
      rating: 5,
      location: "Escondido, CA"
    },
    {
      name: "David K.",
      role: "Criminal Defense Client",
      content: "When I was facing serious charges, RingRemind provided aggressive defense and got my case dismissed. They truly care about their clients and fight for justice.",
      rating: 5,
      location: "Carlsbad, CA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with RingRemind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 150)}
            >
              <div className="flex items-center mb-4" data-aos="fade-right" data-aos-delay={400 + (index * 150)}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 italic" data-aos="fade-up" data-aos-delay={500 + (index * 150)}>
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-between" data-aos="fade-up" data-aos-delay={600 + (index * 150)}>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div data-aos="zoom-in" data-aos-delay="900">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Cases Successfully Resolved</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1000">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1100">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Years of Legal Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;