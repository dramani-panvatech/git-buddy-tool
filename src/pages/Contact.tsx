
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Care Chakra | Get Your Legal Consultation"
        description="Contact Care Chakra for a confidential consultation. Available 24/7 for emergencies. Call 1-800-916-2459 or email sales@panvatech.com."
        keywords="contact legal services, legal consultation, attorney contact, legal help, law firm contact"
      />
      <SkipNavigation />
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main">
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
