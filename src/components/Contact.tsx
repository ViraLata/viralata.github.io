import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, MapPin, Zap } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number (include country code without + or spaces)
    const whatsappNumber = "1234567890"; // Replace with your number
    const message = "Olá! Tenho interesse nos seus serviços de criação de conteúdo.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Clock,
      title: "Tempo de Resposta",
      detail: "Em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Área de Atendimento",
      detail: "Mundial Remoto"
    },
    {
      icon: Zap,
      title: "Início do Projeto",
      detail: "Na mesma semana"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Vamos Criar Juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pronto para elevar seu conteúdo? Entre em contato e vamos discutir como podemos dar vida à sua visão.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.detail}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-12 border border-border/30 animate-fade-in-up">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
              <MessageCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Inicie Seu Projeto Hoje
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Clique no botão abaixo para iniciar uma conversa no WhatsApp. Responderemos rapidamente 
              com um orçamento personalizado para seu projeto.
            </p>
          </div>

          <Button 
            variant="whatsapp"
            size="lg"
            onClick={openWhatsApp}
            className="text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Conversar no WhatsApp
          </Button>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>💬 Resposta rápida garantida • 🎯 Consulta gratuita • 🚀 Início rápido do projeto</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/20 backdrop-blur-sm border-border/30 text-left">
            <h4 className="text-xl font-semibold mb-4 text-foreground">O que Esperar</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Resposta imediata no WhatsApp
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Consulta gratuita e avaliação do projeto
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Orçamento personalizado em 24 horas
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Início do projeto na mesma semana
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/20 backdrop-blur-sm border-border/30 text-left">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Pronto para Compartilhar</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Seus objetivos e visão de conteúdo
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Plataformas preferenciais e audiência
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Considerações de cronograma e orçamento
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Qualquer material de referência ou ideias
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;