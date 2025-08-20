import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FolderOpen, 
  Workflow, 
  BarChart3, 
  CreditCard, 
  FileText, 
  Users, 
  MessageSquare,
  ArrowRight 
} from "lucide-react";

const ProductFeatures = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Case Management",
      description: "Manage all your cases in one place with robust case management features that help you track and manage all aspects of a case.",
      learnMore: "Learn more about case management"
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Leave missed deadlines and forgotten tasks behind with powerful workflows that automate routine, time-consuming tasks.",
      learnMore: "Learn more about workflow automation"
    },
    {
      icon: BarChart3,
      title: "Reporting and Analytics",
      description: "Unlock the power of data-driven decision-making with intuitive dashboards and customizable reports for your firm's performance.",
      learnMore: "Learn more about reporting and analytics"
    },
    {
      icon: CreditCard,
      title: "Billing, Accounting & Payments",
      description: "Bring clarity to complex processes with simple, customizable rate cards, time entries, invoices and more.",
      learnMore: "Learn more about billing, accounting & payments"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Bring order to the chaos by keeping your crucial files organized and secured, and automating manual processes.",
      learnMore: "Learn more about document management"
    },
    {
      icon: Users,
      title: "Prospect & Contact Management",
      description: "Organize your crucial contact information in our single, easy-to-navigate dashboard for clients and prospects.",
      learnMore: "Learn more about prospect & contact management"
    }
  ];

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Boost profits & team productivity with legal management software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive legal practice management software streamlines every aspect of your firm's operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary hover:text-primary/80 group-hover:underline"
                >
                  {feature.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;