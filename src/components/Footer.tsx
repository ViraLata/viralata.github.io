import { MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const whatsappNumber = "1234567890"; // Replace with your number
    const message = "Olá! Tenho interesse nos seus serviços de criação de conteúdo.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-card/20 border-t border-border/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Sem Dono
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estúdio profissional de criação de conteúdo especializado em streaming, podcasts e conteúdo digital que cativa audiências em todo o mundo.
            </p>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conversar no WhatsApp
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Produção de Transmissão Ao Vivo</li>
              <li>Criação e Distribuição de Podcasts</li>
              <li>Produção de Conteúdo em Vídeo</li>
              <li>Conteúdo de Parcerias de Marca</li>
              <li>Estratégia e Planejamento de Conteúdo</li>
              <li>Serviços de Produção Completa</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Entre em Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>📱 Resposta rápida via WhatsApp</p>
              <p>🎯 Consulta gratuita disponível</p>
              <p>⚡ Início do projeto na mesma semana</p>
              <p>🌍 Serviços remotos mundiais</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Sem Dono. Feito com{" "}
            <Heart className="w-4 h-4 inline text-red-500" />{" "}
            para criadores de conteúdo.
          </p>
          
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              Política de Privacidade
            </button>
            <button className="hover:text-primary transition-colors">
              Termos de Serviço
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;