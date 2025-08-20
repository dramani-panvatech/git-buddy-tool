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
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-background/95 backdrop-blur"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo - Make it clickable */}
        <Link to="/">
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
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              Product
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl p-6 z-50 border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Our comprehensive legal practice management software streamlines every aspect of your firm's operations</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {productFeatures.map((feature, idx) => (
                      <Link
                        key={idx}
                        to={feature.href}
                        className="flex items-start space-x-3 p-3 rounded-xl transition-all hover:bg-muted/40 cursor-pointer"
                        onClick={() => setIsProductOpen(false)}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to="/product"
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                      onClick={() => setIsProductOpen(false)}
                    >
                      Learn more about case management →
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
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
              onClick={() => setIsWhoWeServeOpen(!isWhoWeServeOpen)}
            >
              Who We Serve
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isWhoWeServeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl p-6 z-50 border"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {/* Practice Areas */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Practice areas</h3>
                      <div className="space-y-3">
                        {practiceAreas.slice(0, 5).map((area, idx) => (
                          <Link
                            key={idx}
                            to={area.href}
                            className="flex items-center space-x-3 p-2 rounded-lg transition-all hover:bg-muted/40 cursor-pointer"
                            onClick={() => setIsWhoWeServeOpen(false)}
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                              <area.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-foreground">
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
                      <h3 className="text-lg font-semibold text-foreground mb-4">Roles</h3>
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
                      <h3 className="text-lg font-semibold text-foreground mb-4">Firm size</h3>
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
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://stageadmin.ringremind.com/Onboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-full shadow-md px-6">
              <Rocket className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden border-t bg-background"
          >
            <nav className="container px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
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
                <Button className="w-full mt-4 bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-full shadow-md">
                  <Rocket className="w-4 h-4 mr-2" />
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
