
import React, { useEffect } from 'react';
import { FileText, CheckCircle, Scale, Search, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PC_1 from "../img/CC_3.png";
import PC_2 from "../img/CC_2.png";
import PC_3 from "../img/CC_1.png";

const content = {
  label: "Care Chakra - Dashboard",
  heading: "Smart Legal Dashboard",
  paragraph: `Leverage AI-driven insights and document management tools to streamline your legal workflow.`,
  buttonText: "Learn More",
  href: "#features",
  image: PC_1,
};

const content2 = {
  label: "Case View",
  heading: "AI-Driven Case Management",
  paragraph: `Get an intelligent summary of case status, key milestones, and critical updates—powered by AI insights.`,
  buttonText: "Learn More",
  href: "#features",
  image: PC_2,
};

const content3 = {
  label: "Appointment",
  heading: "Virtual Appointments",
  paragraph: `Experience hassle-free virtual visits powered by AI for scheduling, notifications, and patient engagement.`,
  buttonText: "Learn More",
  href: "#features",
  image: PC_3,
};

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const styles = {
    container: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'space-between' as const,
      padding: '105px 0px 105px 30px',
      maxWidth: '100rem',
      margin: 'auto',
      flexWrap: 'wrap' as const,
    },
    textContent: {
      flex: '1 1 500px',
      maxWidth: '50%',
      minWidth: 0,
      padding: '0 30px',
    },
    label: {
      display: 'inline-block',
      background: '#ccff00',
      padding: '6px 12px',
      fontSize: '14px',
      borderRadius: '6px',
      color: '#111',
      marginBottom: '20px',
      fontWeight: 600,
    },
    heading: {
      fontSize: '42px',
      fontWeight: 700,
      margin: '20px 0',
      color: '#111',
    },
    paragraph: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '30px',
      lineHeight: 1.6,
    },
    button: {
      display: 'inline-block',
      padding: '14px 24px',
      fontSize: '16px',
      backgroundColor: '#000',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer' as const,
      userSelect: 'none' as const,
    },
    imageContainer: {
      flex: '1 1 400px',
      textAlign: 'right' as const,
      minWidth: 0,
    },
    imageContainerLeft: {
      flex: '1 1 400px',
      textAlign: 'left' as const,
      minWidth: 0,
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    },
  };

  const renderSection = (data: any, isImageLeft = false) => (
    <div style={styles.container} className="container">
      {isImageLeft && (
        <div style={styles.imageContainerLeft} className="imageContainerLeft">
          <img src={data.image} alt={`${data.label} Image`} style={styles.image} />
        </div>
      )}

      <div style={styles.textContent} className="textContent mt-10" data-aos="fade-right">
        <span style={styles.label}>{data.label}</span>
        <h1 style={styles.heading}>{data.heading}</h1>
        <p style={styles.paragraph}>{data.paragraph}</p>
        <button
          style={styles.button}
          onClick={() => window.location.href = data.href}
          aria-label={data.buttonText}
        >
          {data.buttonText} <span aria-hidden="true">→</span>
        </button>
      </div>

      {!isImageLeft && (
        <div style={styles.imageContainer} className="imageContainer" data-aos="fade-left">
          <img src={data.image} alt={`${data.label} Image`} style={styles.image} />
        </div>
      )}
    </div>
  );

  return (
    <>
      <SEO 
        title="Product - Care Chakra Legal Solutions"
        description="Discover our comprehensive legal practice management software with AI-driven case management, document automation, and client portal features."
        keywords="legal software, case management, document automation, legal practice management"
      />
      
      <Header />
      
      <main className="min-h-screen">
        <style>{`
          @media (max-width: 768px) {
            .container {
              flex-direction: column !important;
              padding: 40px 20px !important;
            }
            .textContent, .imageContainer, .imageContainerLeft {
              max-width: 100% !important;
              text-align: center !important;
              flex: none !important;
            }
            .imageContainer {
              margin-top: 30px;
            }
            .imageContainerLeft {
              margin-bottom: 30px;
            }
            h1 {
              font-size: 28px !important;
            }
            p {
              font-size: 16px !important;
            }
          }
        `}</style>

        {/* Section 1: content – text left, image right */}
        {renderSection(content, false)}

        {/* Section 2: content2 – image left, text right */}
        {renderSection(content2, true)}

        {/* Section 3: content – text left, image right again */}
        {renderSection(content3, false)}

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our legal practice management system provides comprehensive functionality to streamline law firm operations
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Legal Document Management */}
              <div data-aos="fade-up">
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-blue-500">
                  <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-2xl w-20 h-20">
                    <FileText size={48} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Legal Document Management</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive document management system for legal professionals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Document automation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Contract management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Version control</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Secure storage</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Case Management System */}
              <div data-aos="fade-up" data-aos-delay={100}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-green-500">
                  <div className="flex items-center justify-center mb-6 bg-green-50 rounded-2xl w-20 h-20">
                    <Scale size={48} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Case Management System</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Integrated case management platform for law firms and legal departments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Case tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Client management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Calendar integration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Billing automation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Legal Research Tools */}
              <div data-aos="fade-up" data-aos-delay={200}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-purple-500">
                  <div className="flex items-center justify-center mb-6 bg-purple-50 rounded-2xl w-20 h-20">
                    <Search size={48} className="text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Legal Research Tools</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Advanced research and analysis tools for legal professionals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Case law search</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Legal analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Citation tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Research automation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Client Portal */}
              <div data-aos="fade-up" data-aos-delay={300}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-l-yellow-500">
                  <div className="flex items-center justify-center mb-6 bg-yellow-50 rounded-2xl w-20 h-20">
                    <Users size={48} className="text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Client Portal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Secure client portal for document sharing and communication.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Secure messaging</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Document sharing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Status updates</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Payment processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Product;
