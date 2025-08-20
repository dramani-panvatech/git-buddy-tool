
import { Scale, Building, FileText, Users, Shield, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Corporate Law",
      description: "Comprehensive legal support for mergers, acquisitions, compliance, and corporate governance.",
      features: ["M&A Transactions", "Corporate Compliance", "Board Advisory", "Securities Law"]
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Expert guidance through complex property transactions and development projects.",
      features: ["Property Acquisitions", "Development Law", "Zoning & Planning", "Lease Negotiations"]
    },
    {
      icon: FileText,
      title: "Contract Law",
      description: "Drafting, reviewing, and negotiating contracts to protect your business interests.",
      features: ["Contract Drafting", "Dispute Resolution", "Risk Assessment", "Compliance Review"]
    },
    {
      icon: Users,
      title: "Employment Law",
      description: "Navigate workplace regulations and protect your organization's human capital.",
      features: ["Employee Relations", "Workplace Policies", "Discrimination Claims", "Executive Agreements"]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      description: "Safeguard your innovations, trademarks, and creative works with strategic IP protection.",
      features: ["Patent Protection", "Trademark Registration", "Copyright Law", "Trade Secrets"]
    },
    {
      icon: Briefcase,
      title: "Litigation",
      description: "Aggressive representation in complex commercial disputes and civil litigation.",
      features: ["Commercial Disputes", "Class Action Defense", "Arbitration", "Appeals"]
    }
  ];

  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title text-primary mb-6">
            Comprehensive Legal Services
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            From startup formation to complex litigation, we provide strategic legal counsel 
            across all practice areas to help you achieve your objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card-elevated group hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="subsection-title text-primary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
