import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our legal services",
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container px-4">
        {/* Heading */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4" role="list" aria-label="FAQ items">
            {items.map((item, index) => {
              const isOpen = openItems.has(index);
              return (
                <article
                  key={index}
                  className="bg-white rounded-lg border border-border shadow-sm"
                  role="listitem"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  {/* Question */}
                  <h3
                    className="text-lg font-semibold text-primary"
                    id={`faq-question-${index}`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors rounded-lg"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp
                          className="w-5 h-5 text-muted-foreground flex-shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDown
                          className="w-5 h-5 text-muted-foreground flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </h3>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`px-6 pb-6 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;
