import { Bot, Database, Waves, Cpu, Sparkles } from "lucide-react";

const clients = [
  { name: "chatbot", icon: Bot },
  { name: "Soluck", icon: Database },
  { name: "wattse", icon: Waves },
  { name: "Nextech", icon: Cpu },
  { name: "Muast", icon: Sparkles },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Our Clients
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <client.icon className="w-6 h-6" />
              <span className="text-xl font-semibold">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
