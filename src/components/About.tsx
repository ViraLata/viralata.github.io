import { Card } from "@/components/ui/card";
import { Mic, Camera, Headphones, Settings } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mic,
      title: "Áudio Profissional",
      description: "Gravação de som cristalino com microfones de última geração e equipamentos de processamento de áudio."
    },
    {
      icon: Camera,
      title: "Produção de Vídeo HD",
      description: "Capacidades de vídeo 4K com iluminação profissional e configurações multi-câmera para visuais impressionantes."
    },
    {
      icon: Headphones,
      title: "Transmissão Ao Vivo",
      description: "Streaming em tempo real em todas as principais plataformas com integração e monitoramento perfeitos."
    },
    {
      icon: Settings,
      title: "Produção Completa",
      description: "Serviços completos de pós-produção incluindo edição, mixagem e otimização de conteúdo."
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sobre Nosso Estúdio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos um estúdio de criação de conteúdo de ponta dedicado a ajudar criadores, empresas e influenciadores 
            a produzir conteúdo digital excepcional que se destaca no cenário competitivo de hoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-3xl p-12 border border-border/30">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Por Que Escolher Nosso Estúdio?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Conteúdos Criados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-glow mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;