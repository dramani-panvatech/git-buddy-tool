
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

export const sendToTeams = async (formData, setVal) => {
  const payload = {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    summary: "📩 New Contact Form Submission From Care Chakra",
    themeColor: "0076D7",
    title: `📥 New Inquiry from ${formData.firstName} ${formData.lastName}`,
    sections: [
      {
        activityTitle: `👤 **${formData.firstName} ${formData.lastName}**`,
        activitySubtitle: `📅 Submitted on ${new Date().toLocaleString()}`,
        activityImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        facts: [
          { name: "📧 Email", value: `[${formData.email}](mailto:${formData.email})` },
          { name: "📱 Phone", value: formData.phone ? `[${formData.phone}](tel:${formData.phone})` : "N/A" },
          { name: "💼 Matter Type", value: formData.matterType || "N/A" },
          { name: "📝 Message", value: `> ${formData.message}` },
        ],
        markdown: true
      }
    ],
    potentialAction: [
      {
        "@type": "OpenUri",
        name: "📧 Reply via Email",
        targets: [
          { os: "default", uri: `mailto:${formData.email}` }
        ]
      },
      {
        "@type": "OpenUri",
        name: "📞 Call Now",
        targets: [
          { os: "default", uri: `tel:${formData.phone || ''}` }
        ]
      }
    ]
  };

  try {
    const response = await axios.post("https://stage.panvatech.com/send_to_teams", payload, {
      headers: { "Content-Type": "application/json" },
      maxBodyLength: Infinity
    });

    if (response.status === 200) {
      setVal({ firstName: "", lastName: "", email: "", phone: "", matterType: "", message: "" });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "There was an error while submitting your request. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    console.error("Error sending message to Teams:", error);
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "There was an error while submitting your request. Please try again later.",
      confirmButtonColor: "#d33",
    });
  }
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "1-800-916-2459",
      subtitle: "Available 24/7 for emergencies",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "sales@panvatech.com",
      subtitle: "We respond within 2 hours",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "14269 Danielson St, Suite 400",
      subtitle: "Poway, CA 92064",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Weekend consultations available",
      color: "text-orange-600"
    }
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    matterType: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors: typeof errors = { firstName: "", lastName: "", email: "", message: "" };

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      valid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Please tell us about your situation.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      try {
        // Send form data to Teams
        await sendToTeams(form, setForm);

        setSubmitted(true);
      } catch (error) {
        console.error("Form submission failed:", error);
      } finally {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
          >
            Get Your<br />
            <span className="text-primary/80">Legal Consultation</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your legal needs? Contact us today for a confidential consultation with our experienced legal team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12" data-aos="fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={form.firstName}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-2 focus:border-primary"
                        aria-invalid={!!errors.firstName}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-2 focus:border-primary"
                        aria-invalid={!!errors.lastName}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john.doe@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                      aria-invalid={!!errors.email}
                      required
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      value={form.phone}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="matterType" className="block text-sm font-semibold text-foreground mb-2">
                      Legal Matter Type
                    </label>
                    <select
                      id="matterType"
                      className="w-full h-12 p-3 border-2 border-input rounded-xl bg-background focus:border-primary focus:outline-none"
                      name="matterType"
                      value={form.matterType}
                      onChange={handleChange}
                    >
                      <option value="">Select a practice area</option>
                      <option value="family-law">Family Law</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="immigration">Immigration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Tell us about your situation *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your legal matter..."
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="rounded-xl border-2 focus:border-primary resize-none"
                      aria-invalid={!!errors.message}
                      required
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Schedule Free Consultation
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. All consultations are confidential.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-left" data-aos-delay="400">
            {/* Contact Details */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-200"
                      data-aos="fade-up"
                      data-aos-delay={500 + (index * 100)}
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Our Location
              </h3>
              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6696.808951040994!2d-117.020342!3d32.940329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfb0dfb0bc705%3A0x36702894f19912e1!2s14269%20Danielson%20St%20%23400%2C%20Poway%2C%20CA%2092064%2C%20USA!5e0!3m2!1sen!2sin!4v1753358872621!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Legal Office Location"
                />
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>✓ Free parking available</p>
                <p>✓ Wheelchair accessible</p>
                <p>✓ Public transit nearby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
