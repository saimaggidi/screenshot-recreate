import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80 text-center max-w-2xl mx-auto">
            Last updated: December 24, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to NextStepIT ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Project requirements and specifications</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence with us</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, so long as they agree to keep this information confidential.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify or update your personal information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policy of every website you visit.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-muted rounded-lg">
                <p className="text-foreground font-semibold">NextStepIT</p>
                <p className="text-muted-foreground">Email: privacy@nextstepit.com</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
