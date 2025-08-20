
import { Scale, Building, Briefcase, Shield, Heart, FileText, Globe, Baby, UserCheck, Calculator, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const practiceAreas = [
    {
      icon: Building,
      title: "Real Estate Law",
      description: "Streamline property transactions, closings, and real estate management with specialized tools.",
      href: "/who-we-serve/real-estate"
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Manage employment cases, HR compliance, and workplace disputes efficiently.",
      href: "/who-we-serve/employment"
    },
    {
      icon: Shield,
      title: "Insurance Defense",
      description: "Handle insurance defense cases with specialized case management and billing features.",
      href: "/who-we-serve/insurance-defense"
    },
    {
      icon: Scale,
      title: "Litigation",
      description: "Comprehensive litigation management with case tracking, discovery, and court scheduling.",
      href: "/who-we-serve/litigation"
    },
    {
      icon: Heart,
      title: "Personal Injury",
      description: "Manage personal injury cases with client intake, medical records, and settlement tracking.",
      href: "/who-we-serve/personal-injury"
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Estate planning and probate case management with document automation and client portals.",
      href: "/who-we-serve/estate-planning"
    },
    {
      icon: Globe,
      title: "Intellectual Property",
      description: "IP case and portfolio management with deadline tracking and renewal management.",
      href: "/who-we-serve/intellectual-property"
    },
    {
      icon: Shield,
      title: "Criminal Law",
      description: "Criminal defense case management with court scheduling and client communication tools.",
      href: "/who-we-serve/criminal-law"
    },
    {
      icon: Globe,
      title: "Immigration Law",
      description: "Immigration case tracking with form management and client status updates.",
      href: "/who-we-serve/immigration"
    },
    {
      icon: Baby,
      title: "Family Law",
      description: "Family law case management with custody tracking and financial calculations.",
      href: "/who-we-serve/family-law"
    },
    {
      icon: Scale,
      title: "General Practice",
      description: "Multi-practice area management for firms handling diverse legal matters.",
      href: "/who-we-serve/general-practice"
    }
  ];

  const roles = [
    {
      icon: Building,
      title: "Firm Admins & Office Managers",
      description: "Streamline administrative tasks, manage staff schedules, and oversee firm operations with comprehensive administrative tools."
    },
    {
      icon: UserCheck,
      title: "Firm Partners",
      description: "Make strategic decisions with powerful analytics, financial reporting, and performance metrics to grow your practice."
    },
    {
      icon: Calculator,
      title: "Bookkeepers & Accountants",
      description: "Manage firm finances with integrated accounting, automated billing, expense tracking, and financial reporting."
    }
  ];

  const firmSizes = [
    {
      icon: Home,
      title: "Smaller Firms",
      subtitle: "1-30 Employees",
      description: "Perfect for solo practitioners and small firms looking to streamline operations and grow their practice."
    },
    {
      icon: Building,
      title: "Larger Firms",
      subtitle: "30+ Employees",
      description: "Enterprise-grade features for larger firms with advanced reporting, multi-user management, and custom workflows."
    }
  ];

  return (
    <>
      <SEO 
        title="Who We Serve - Legal Practice Areas & Firm Types | Care Chakra"
        description="Care Chakra serves all practice areas including real estate, employment, litigation, personal injury, and more. Perfect for firms of all sizes."
        keywords="legal practice areas, real estate law software, employment law, litigation management, personal injury software"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Who We Serve
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Care Chakra serves legal professionals across all practice areas and firm sizes, providing tailored solutions for every legal specialty.
                </p>
              </div>
            </div>
          </section>

          {/* Practice Areas Section */}
          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Practice Areas</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Specialized features and workflows designed for your specific legal practice area.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {practiceAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={area.href}
                    className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Roles Section */}
          <section className="bg-muted/30 py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles We Support</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tools and features designed for different roles within your legal practice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {roles.map((role, index) => (
                  <div key={index} className="bg-card rounded-2xl p-8 shadow-lg text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                      <role.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
                    <p className="text-muted-foreground">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Firm Sizes Section */}
          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Firm Size</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Scalable solutions that grow with your practice, from solo attorneys to large firms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {firmSizes.map((size, index) => (
                  <div key={index} className="bg-card rounded-2xl p-8 shadow-lg text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                      <size.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{size.title}</h3>
                    <p className="text-primary font-medium mb-4">{size.subtitle}</p>
                    <p className="text-muted-foreground">{size.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/5 py-20">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to See How Care Chakra Works for Your Practice?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how our specialized features can transform your legal practice, regardless of your practice area or firm size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  Get Started
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WhoWeServe;
