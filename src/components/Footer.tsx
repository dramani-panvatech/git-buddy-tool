import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "./ui/dialog";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Product", to: "/product" },
    { label: "Who We Serve", to: "/who-we-serve" },
    { label: "Contact", to: "/contact" },
    { label: "Pricing", to: "/pricing" }
  ];

  const practiceAreas = [
    { label: "Real Estate Law", to: "/who-we-serve" },
    { label: "Employment Law", to: "/who-we-serve" },
    { label: "Intellectual Property", to: "/who-we-serve" },
    { label: "Immigration", to: "/who-we-serve" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy-policy" },
    { label: "Terms of Service", href: "#" },
    { label: "Attorney Advertising", href: "#" },
    { label: "Disclaimer", href: "#" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="https://www.panvatech.com/#" aria-label="Panva Technology Home">
              <Logo className="mb-6" textColor="text-white" />
            </a>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering you with expert legal guidance. Serving our community
              with compassion, clarity, and unwavering dedication to justice.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/panvatechology/"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/PanvaTechnology"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
                target="_blank" rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/panvatechnology/"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <Link
                    to={area.to}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">1-800-916-2459</p>
                  <p className="text-sm text-white/60">24/7 Emergency Line</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">sales@panvatech.com</p>
                  <p className="text-sm text-white/60">Quick Response</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/TKKneMcACpkCCu7M8"
                className="flex items-start space-x-3 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">Panva Technology LLC, 14269 Danielson St, Suite 400, Poway, CA 92064.</p>
                  <p className="text-sm text-white/60">Downtown Legal District</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80">
                © {currentYear} Care Chakra. All rights reserved.
              </p>

            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {/* Privacy Policy Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <a
                    href="#privacy-policy"
                    className="text-sm text-white/60 hover:text-accent transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="text-left space-y-4 mt-4">
                      <p>
                        This Privacy Policy describes how Panva Technology collects, uses, and protects your information when you use our website and services. By using our site, you consent to the practices described herein.
                      </p>
                      <h3 className="font-semibold mt-4">Information Collection</h3>
                      <p>
                        We may collect personal information such as your name, email address, phone number, and any other information you provide through our contact forms or communications.
                      </p>
                      <h3 className="font-semibold mt-4">Use of Information</h3>
                      <p>
                        Your information is used to respond to inquiries, provide services, improve our offerings, and communicate updates. We do not sell or share your personal information with third parties except as required by law.
                      </p>
                      <h3 className="font-semibold mt-4">Data Security</h3>
                      <p>
                        We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
                      </p>
                      <h3 className="font-semibold mt-4">Changes to This Policy</h3>
                      <p>
                        We may update this Privacy Policy from time to time. Please review this page periodically for changes.
                      </p>
                      <h3 className="font-semibold mt-4">Contact Us</h3>
                      <p>
                        If you have any questions about this Privacy Policy, please contact us at sales@panvatech.com.
                      </p>
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors">Close</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              {/* Terms of Service Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <a
                    href="#terms-of-service"
                    className="text-sm text-white/60 hover:text-accent transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Terms of Service</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="text-left space-y-4 mt-4">
                      <p>
                        These Terms of Service govern your use of the Panva Technology website and services. By accessing or using our site, you agree to these terms.
                      </p>
                      <h3 className="font-semibold mt-4">Use of Site</h3>
                      <p>
                        You agree to use this site for lawful purposes only and not to engage in any activity that disrupts or interferes with the site.
                      </p>
                      <h3 className="font-semibold mt-4">Intellectual Property</h3>
                      <p>
                        All content on this site is the property of Panva Technology and may not be used without permission.
                      </p>
                      <h3 className="font-semibold mt-4">Limitation of Liability</h3>
                      <p>
                        Panva Technology is not liable for any damages arising from your use of this site.
                      </p>
                      <h3 className="font-semibold mt-4">Changes to Terms</h3>
                      <p>
                        We may update these Terms of Service at any time. Continued use of the site constitutes acceptance of the new terms.
                      </p>
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors">Close</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              {/* Attorney Advertising Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <a
                    href="#attorney-advertising"
                    className="text-sm text-white/60 hover:text-accent transition-colors cursor-pointer"
                  >
                    Attorney Advertising
                  </a>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Attorney Advertising</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="text-left space-y-4 mt-4">
                      <p>
                        This website may be considered attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome.
                      </p>
                      <p>
                        The information provided on this site is for general informational purposes only and should not be construed as legal advice.
                      </p>
                      <p>
                        Please consult an attorney for advice regarding your individual situation.
                      </p>
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors">Close</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              {/* Disclaimer Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <a
                    href="#disclaimer"
                    className="text-sm text-white/60 hover:text-accent transition-colors cursor-pointer"
                  >
                    Disclaimer
                  </a>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Disclaimer</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="text-left space-y-4 mt-4">
                      <p>
                        The information on this website is provided "as is" without any representations or warranties, express or implied. Panva Technology makes no representations or warranties in relation to the information on this website.
                      </p>
                      <p>
                        Nothing on this website constitutes, or is meant to constitute, legal advice of any kind.
                      </p>
                    </div>
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-accent transition-colors">Close</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;