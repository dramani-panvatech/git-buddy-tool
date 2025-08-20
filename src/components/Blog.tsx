import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "Understanding Your Rights in a Personal Injury Case",
      excerpt: "Learn about the key rights and protections available to you when pursuing a personal injury claim, and how to ensure you receive fair compensation.",
      category: "Personal Injury",
      readTime: "5 min read",
      date: "January 15, 2025",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop"
    },
    {
      title: "The Divorce Process: What to Expect in California",
      excerpt: "A comprehensive guide to navigating the divorce process in California, from filing to final settlement, with expert legal insights.",
      category: "Family Law",
      readTime: "7 min read",
      date: "January 10, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "Immigration Law Updates: What You Need to Know",
      excerpt: "Stay informed about the latest changes in immigration law and how they may affect your case or application process.",
      category: "Immigration",
      readTime: "6 min read",
      date: "January 5, 2025",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Header Section */}
        <div className="text-center mb-20 relative" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-24 h-1 bg-accent rounded-full"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground text-sm font-bold">📚</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Legal Insights &<br />
            <span className="text-accent">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert analysis, practical guidance, and the latest developments 
            in law that directly impact you and your business.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border group"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 150)}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden" data-aos="zoom-in" data-aos-delay={400 + (index * 150)}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3" data-aos="fade-right" data-aos-delay={500 + (index * 150)}>
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors" data-aos="fade-right" data-aos-delay={600 + (index * 150)}>
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed" data-aos="fade-right" data-aos-delay={700 + (index * 150)}>
                  {article.excerpt}
                </p>
                
                <button 
                  className="text-accent font-semibold hover:text-accent-light transition-colors flex items-center group"
                  data-aos="fade-right"
                  data-aos-delay={800 + (index * 150)}
                >
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Blog;