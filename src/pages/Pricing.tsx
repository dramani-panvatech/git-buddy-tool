
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$39",
      period: "per user/month",
      description: "Perfect for solo practitioners and small firms getting started",
      features: [
        "Case Management",
        "Document Storage (5GB)",
        "Basic Billing & Invoicing",
        "Client Portal",
        "Email Support",
        "Mobile App Access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$69",
      period: "per user/month",
      description: "Ideal for growing firms that need advanced features",
      features: [
        "Everything in Starter",
        "Advanced Case Management",
        "Document Storage (25GB)",
        "Time Tracking",
        "Advanced Billing & Accounting",
        "Custom Reports",
        "Phone Support",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large firms with complex needs and custom requirements",
      features: [
        "Everything in Professional",
        "Unlimited Document Storage",
        "Advanced Analytics",
        "Custom Workflows",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Integrations",
        "Single Sign-On (SSO)"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="Care Chakra Pricing - Affordable Legal Practice Management Software"
        description="Choose the perfect Care Chakra plan for your firm. Transparent pricing with no hidden fees. Start your free trial today."
        keywords="legal software pricing, practice management cost, legal billing software price"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Choose the plan that fits your firm's needs. All plans include a 30-day free trial with no credit card required.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-card rounded-2xl p-8 shadow-lg ${
                      plan.popular ? "ring-2 ring-primary scale-105" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.price !== "Custom" && (
                          <span className="text-muted-foreground ml-1">/{plan.period}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                      size="lg"
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-muted/30 py-20">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer a 30-day free trial with full access to all features. No credit card required to get started.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, PayPal, and ACH transfers for annual subscriptions.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Is my data secure?</h3>
                  <p className="text-muted-foreground">
                    Yes, we use bank-level encryption and are fully compliant with legal industry security standards.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
