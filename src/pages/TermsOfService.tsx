import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services provided by NextStepIT ("Company," "we," "us," or "our"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                NextStepIT provides digital marketing, web development, app development, cloud services, and related technology solutions. Our services include but are not limited to SEO, social media marketing, website design and development, mobile application development, and cloud infrastructure management.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of NextStepIT or its licensors and are protected by copyright, trademark, and other intellectual property laws. Upon full payment, clients receive ownership of custom work created specifically for them, unless otherwise specified in the project agreement.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>All fees are quoted in USD unless otherwise specified</li>
                <li>A deposit may be required before project commencement</li>
                <li>Invoices are due within 30 days of receipt unless otherwise agreed</li>
                <li>Late payments may incur interest charges</li>
                <li>We reserve the right to suspend services for overdue accounts</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Project Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to deliver all projects within the agreed timeframe. However, delivery dates are estimates and may be affected by factors outside our control, including client delays in providing required materials or feedback. We will communicate any anticipated delays as soon as possible.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Revisions and Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                The number of revisions included in a project will be specified in the project proposal. Additional revisions beyond the agreed scope may incur extra charges. Major changes to project scope after work has begun may require a revised quote and timeline.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We agree to maintain the confidentiality of any proprietary or sensitive information shared with us during the course of our engagement. This obligation survives the termination of our business relationship. We expect clients to similarly respect any confidential information we may share.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, NextStepIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless NextStepIT and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate our engagement with written notice. Upon termination, you agree to pay for all services rendered up to the termination date. We reserve the right to terminate services immediately if you breach these Terms or engage in conduct that we determine to be harmful to our business or reputation.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms or our services shall first be addressed through good-faith negotiation. If a resolution cannot be reached, the dispute shall be settled through binding arbitration in accordance with applicable laws.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which NextStepIT operates, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-muted rounded-lg">
                <p className="text-foreground font-semibold">NextStepIT</p>
                <p className="text-muted-foreground">Email: legal@nextstepit.com</p>
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

export default TermsOfService;
