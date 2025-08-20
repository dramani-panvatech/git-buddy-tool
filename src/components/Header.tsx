import { useState, useEffect } from "react";
import { Menu, X, Rocket, FolderOpen, Workflow, BarChart3, CreditCard, FileText, Users, Scale, Building, Shield, UserCheck, Calculator, MapPin, Heart, Baby, Globe, Briefcase, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const productFeatures = [
  {
    icon: FolderOpen,
    title: "Case Management",
    description: "Comprehensive case tracking with intelligent organization, deadline management, and client communication tools.",
    href: "/product#case-management"
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline repetitive tasks with customizable automation that saves time and reduces human error.",
    href: "/product#automated-workflows"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights with customizable dashboards and detailed performance metrics for your firm.",
    href: "/product#analytics"
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Integrated billing system with automated invoicing, payment tracking, and financial reporting.",
    href: "/product#billing"
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Secure document storage with version control, automated templates, and collaboration features.",
    href: "/product#document-management"
  },
  {
    icon: UserCheck,
    title: "Client Portal",
    description: "Secure client communication hub with document sharing, appointment scheduling, and case updates.",
    href: "/product#client-portal"
  }
];

const practiceAreas = [
  {
    icon: Scale,
    title: "Our Legal Software Solutions",
    description: "Comprehensive legal practice management",
    href: "/who-we-serve/legal-software"
  },
  {
    icon: Building,
    title: "Real Estate Law",
    description: "Streamline property transactions and management",
    href: "/who-we-serve/real-estate"
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Manage employment cases efficiently",
    href: "/who-we-serve/employment"
  },
  {
    icon: Shield,
    title: "Insurance Defense",
    description: "Handle insurance defense cases",
    href: "/who-we-serve/insurance-defense"
  },
  {
    icon: Scale,
    title: "Litigation",
    description: "Comprehensive litigation management",
    href: "/who-we-serve/litigation"
  },
  {
    icon: Heart,
    title: "Personal Injury",
    description: "Manage personal injury cases",
    href: "/who-we-serve/personal-injury"
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Estate planning and probate management",
    href: "/who-we-serve/estate-planning"
  },
  {
    icon: Globe,
    title: "Intellectual Property",
    description: "IP case and portfolio management",
    href: "/who-we-serve/intellectual-property"
  },
  {
    icon: Shield,
    title: "Criminal Law",
    description: "Criminal defense case management",
    href: "/who-we-serve/criminal-law"
  },
  {
    icon: Globe,
    title: "Immigration Law",
    description: "Immigration case tracking",
    href: "/who-we-serve/immigration"
  },
  {
    icon: Baby,
    title: "Family Law",
    description: "Family law case management",
    href: "/who-we-serve/family-law"
  },
  {
    icon: Scale,
    title: "General Practice",
    description: "Multi-practice area management",
    href: "/who-we-serve/general-practice"
  }
];

const roles = [
  {
    icon: Building,
    title: "Firm Admins & Office Managers",
    description: "Administrative oversight and management"
  },
  {
    icon: UserCheck,
    title: "Firm Partners",
    description: "Strategic decision making and oversight"
  },
  {
    icon: Calculator,
    title: "Bookkeepers & Accountants",
    description: "Financial management and reporting"
  }
];

const firmSizes = [
  {
    icon: Home,
    title: "Smaller Firms",
    description: "1-30 Employees"
  },
  {
    icon: Building,
    title: "Larger Firms",
    description: "30+ Employees"
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { handleNavClick } = useSmoothScroll();

  const navLinks = [
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-nav border-b border-border/50"
          : "bg-gradient-to-r from-background/95 to-background/90 backdrop-blur-sm"
      }`}
    >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo - Make it clickable */}
        <Link to="/" className="transition-transform hover:scale-105 duration-300">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {/* Product Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            <button 
              className="text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary/5 group"
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              Product
              <svg className={`h-4 w-4 transition-transform duration-300 ${isProductOpen ? 'rotate-180' : ''} group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 mt-3 w-[600px] bg-background rounded-2xl shadow-dropdown border border-border/50 backdrop-blur-xl z-50 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-xl mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Legal Practice Management</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive software that streamlines every aspect of your firm's operations</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-2">
                    {productFeatures.map((feature, idx) => (
                      <Link
                        key={idx}
                        to={feature.href}
                        className="flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:shadow-md cursor-pointer group"
                        onClick={() => setIsProductOpen(false)}
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                          <feature.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to="/product"
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-semibold transition-all duration-300 hover:translate-x-1 group"
                      onClick={() => setIsProductOpen(false)}
                    >
                      Learn more about case management 
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Who We Serve Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsWhoWeServeOpen(true)}
            onMouseLeave={() => setIsWhoWeServeOpen(false)}
          >
            <button 
              className="text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary/5 group"
              onClick={() => setIsWhoWeServeOpen(!isWhoWeServeOpen)}
            >
              Who We Serve
              <svg className={`h-4 w-4 transition-transform duration-300 ${isWhoWeServeOpen ? 'rotate-180' : ''} group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isWhoWeServeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 mt-3 w-[800px] bg-background rounded-2xl shadow-dropdown border border-border/50 backdrop-blur-xl z-50 p-6 overflow-hidden"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {/* Practice Areas */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-primary/20">Practice Areas</h3>
                      <div className="space-y-3">
                        {practiceAreas.slice(0, 5).map((area, idx) => (
                          <Link
                            key={idx}
                            to={area.href}
                            className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 cursor-pointer group"
                            onClick={() => setIsWhoWeServeOpen(false)}
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                              <area.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                              {area.title}
                            </span>
                          </Link>
                        ))}
                        <Link
                          to="/who-we-serve"
                          className="text-primary hover:text-primary/80 text-sm font-medium pl-2"
                          onClick={() => setIsWhoWeServeOpen(false)}
                        >
                          View all practice areas →
                        </Link>
                      </div>
                    </div>

                    {/* Roles */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-primary/20">Roles</h3>
                      <div className="space-y-3">
                        {roles.map((role, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 p-2 rounded-lg"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                              <role.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-foreground block">
                                {role.title}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {role.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Firm Size */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-primary/20">Firm Size</h3>
                      <div className="space-y-3">
                        {firmSizes.map((size, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 p-2 rounded-lg"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                              <size.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-foreground block">
                                {size.title}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {size.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/5 group"
            >
              {link.label}
              <span className="absolute left-3 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
            </Link>
          ))}

          <Link to="/pricing" className="relative text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/5 group">
            Pricing
            <span className="absolute left-3 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://stageadmin.ringremind.com/Onboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-accent-foreground font-semibold rounded-full shadow-lg hover:shadow-xl px-6 py-2.5 transition-all duration-300 hover:scale-105 group">
              <Rocket className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className="w-6 h-6 text-foreground hover:text-primary transition-colors" /> : 
            <Menu className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border/50 bg-gradient-to-b from-background to-background/95 backdrop-blur-xl"
          >
            <nav className="container px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://stageadmin.ringremind.com/Onboarding"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-6 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-accent-foreground font-semibold rounded-full shadow-lg hover:shadow-xl py-3 transition-all duration-300 group">
                  <Rocket className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Get Started
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
