import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Radio, 
  Video, 
  Podcast, 
  Users, 
  Zap, 
  Star,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Radio,
      title: "Transmissão Ao Vivo",
      description: "Streaming multiplataforma com overlays profissionais, alertas e ferramentas de engajamento da audiência.",
      features: ["Twitch, YouTube, Facebook", "Overlays e alertas personalizados", "Configuração multi-câmera", "Monitoramento em tempo real"],
      price: "A partir de R$ 150/sessão"
    },
    {
      icon: Podcast,
      title: "Produção de Podcast",
      description: "Produção completa de podcast desde a gravação até a distribuição em todas as principais plataformas.",
      features: ["Gravação profissional", "Edição e mixagem de áudio", "Criação de intro/outro", "Distribuição em plataformas"],
      price: "A partir de R$ 200/episódio"
    },
    {
      icon: Video,
      title: "Conteúdo em Vídeo",
      description: "Produção de vídeo de alta qualidade para YouTube, redes sociais e campanhas de marketing.",
      features: ["Gravação em vídeo 4K", "Edição profissional", "Correção de cor", "Motion graphics"],
      price: "A partir de R$ 300/projeto"
    },
    {
      icon: Users,
      title: "Parcerias de Marca",
      description: "Criação estratégica de conteúdo para colaborações de marca e conteúdo patrocinado.",
      features: ["Integração de marca", "Conteúdo patrocinado", "Métricas de performance", "Insights de audiência"],
      price: "Preço personalizado"
    },
    {
      icon: Zap,
      title: "Estratégia de Conteúdo",
      description: "Planejamento abrangente de conteúdo e otimização para máximo alcance e engajamento.",
      features: ["Calendário de conteúdo", "Otimização SEO", "Rastreamento de analytics", "Estratégias de crescimento"],
      price: "A partir de R$ 100/mês"
    },
    {
      icon: Star,
      title: "Produção Completa",
      description: "Serviços de produção completos para projetos de conteúdo em larga escala e campanhas.",
      features: ["Planejamento de pré-produção", "Equipe profissional", "Pós-produção", "Estratégia de distribuição"],
      price: "Orçamento personalizado"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Do streaming ao vivo à produção completa, oferecemos serviços abrangentes de criação de conteúdo 
            adaptados às suas necessidades e audiência únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-500 hover:shadow-card hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="border-t border-border/30 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={scrollToContact}
                    className="hover:bg-primary/20 hover:text-primary group/btn"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Iniciar Seu Projeto
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;