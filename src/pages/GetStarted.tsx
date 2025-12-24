import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Shield, Clock, MessageCircle, ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Let's Build Something
            <br />
            <span className="text-gradient">Great Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question about features, pricing, need a demo, or
            anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="font-semibold text-foreground">hello@nextstepit.com</p>
                    <p className="text-sm text-muted-foreground">We usually reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <p className="font-semibold text-foreground">+91 9182029042</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 6pm IST.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Headquarters</p>
                    <p className="font-semibold text-foreground">1st Floor IT Hub</p>
                    <p className="text-sm text-muted-foreground">Nizamabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Connect instantly</h3>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5736!2d78.0938!3d18.6725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQwJzIxLjAiTiA3OMKwMDUnMzcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll help you find the right solution.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input placeholder="John Doe" className="bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input type="email" placeholder="john@company.com" className="bg-white" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input placeholder="+1 (555) 000-0000" className="bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <Input placeholder="Tech Solutions Inc." className="bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">How can we help?</label>
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="cloud-services">Cloud Services</SelectItem>
                      <SelectItem value="web-development">Web Development & Design</SelectItem>
                      <SelectItem value="app-development">App Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Detailed Message</label>
                  <Textarea 
                    placeholder="Tell us more about your project goals, timeline, and requirements..."
                    rows={5}
                    className="bg-white"
                  />
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  Let's Take the Next Step
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  By clicking submit, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Secure & Confidential</h3>
                <p className="text-sm text-muted-foreground">All discussions are NDA protected.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fast Response</h3>
                <p className="text-sm text-muted-foreground">You'll hear from us within 24 hours.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">Initial project assessment is on us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
