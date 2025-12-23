import { Bot, Database, Waves, Cpu, Sparkles, Zap, Cloud, Shield } from "lucide-react";

const clients = [
  { name: "chatbot", icon: Bot },
  { name: "Soluck", icon: Database },
  { name: "wattse", icon: Waves },
  { name: "Nextech", icon: Cpu },
  { name: "Muast", icon: Sparkles },
  { name: "Zapify", icon: Zap },
  { name: "CloudMax", icon: Cloud },
  { name: "SecureIT", icon: Shield },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Our Clients
        </h2>

        {/* Auto-scrolling clients marquee */}
        <div className="relative">
          <div className="flex animate-marquee">
            {/* First set */}
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mx-8 md:mx-12 flex-shrink-0"
              >
                <client.icon className="w-6 h-6" />
                <span className="text-xl font-semibold whitespace-nowrap">{client.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div
                key={`${client.name}-dup`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mx-8 md:mx-12 flex-shrink-0"
              >
                <client.icon className="w-6 h-6" />
                <span className="text-xl font-semibold whitespace-nowrap">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
