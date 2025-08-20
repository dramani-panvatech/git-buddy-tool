
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/PracticeAreas"; // This is now ProductFeatures
import PracticeAreas from "@/components/About"; // This is now PracticeAreas
import About from "@/components/Testimonials"; // This is now About
import Resources from "@/components/Blog"; // This is now Resources
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import FAQ from "@/components/FAQ";

const Index = () => {
  const faqItems = [
    {
      question: "What is Care Chakra practice management software?",
      answer: "Care Chakra is a comprehensive legal practice management software that helps law firms streamline operations, manage cases, automate workflows, and improve profitability through integrated case management, billing, document management, and client communication tools."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a free trial with full access to all features. No credit card is required to start your trial, and you can explore the platform risk-free to see how it can benefit your firm."
    },
    {
      question: "What practice areas does your software support?",
      answer: "Our software supports all practice areas including real estate law, employment law, insurance defense, litigation, personal injury, estate planning, intellectual property, criminal law, immigration law, and family law."
    },
    {
      question: "How does the billing and accounting system work?",
      answer: "Our integrated billing and accounting system includes customizable rate cards, time tracking, automated invoice generation, payment processing, and comprehensive financial reporting to help you increase billable time and improve cash flow."
    },
    {
      question: "Is there mobile app support?",
      answer: "Yes, we provide mobile apps for both iOS and Android, allowing you to manage your practice, access case information, and stay connected with clients from anywhere."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 support through multiple channels including phone, email, and live chat. Our team of experts is always available to help you get the most out of our platform."
    }
  ];

  return (
    <>
      <SEO 
        title="Care Chakra - Expert Legal Services & Consultation | Poway, CA"
        description="Care Chakra practice management software makes life easier for everyone in your firm. Streamline operations with case management, automated workflows, billing, and more. Start free trial today."
        keywords="legal practice management software, case management, legal software, law firm management, billing software, document management, legal workflows, legal practice automation"
        url="https://ringremind.com/"
      />
      <SkipNavigation />
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <ProductFeatures />
          <PracticeAreas />
          <Resources />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
