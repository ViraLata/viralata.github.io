import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Tech Talk Semanal",
      category: "Podcast",
      description: "Podcast semanal de tecnologia alcançando mais de 50 mil ouvintes em todas as plataformas",
      metrics: "2.5M+ Downloads",
      tags: ["Produção de Áudio", "Distribuição", "Branding"],
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop"
    },
    {
      title: "Setup de Stream Gaming",
      category: "Transmissão Ao Vivo",
      description: "Solução completa de streaming para atleta profissional de esports",
      metrics: "100K+ Seguidores",
      tags: ["Multi-câmera", "Overlays", "Gestão de Stream"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
    },
    {
      title: "Série de Campanha de Marca",
      category: "Conteúdo em Vídeo",
      description: "Série de 6 vídeos para lançamento de marca de tecnologia",
      metrics: "5M+ Visualizações",
      tags: ["Produção 4K", "Motion Graphics", "Integração de Marca"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "Série de Webinars Corporativos",
      category: "Eventos Ao Vivo",
      description: "Série mensal de webinars para empresa da Fortune 500",
      metrics: "10K+ Participantes",
      tags: ["Produção Ao Vivo", "Elementos Interativos", "Multiplataforma"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    },
    {
      title: "Rede de Podcasts de Influenciadores",
      category: "Produção Completa",
      description: "Configuração e gestão completa de rede de podcasts",
      metrics: "500K+ Reproduções Mensais",
      tags: ["Gestão de Rede", "Distribuição", "Analytics"],
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=400&fit=crop"
    },
    {
      title: "Série de Conteúdo Educacional",
      category: "Conteúdo em Vídeo",
      description: "Produção de curso online com elementos interativos",
      metrics: "50K+ Estudantes",
      tags: ["Educacional", "Gravação de Tela", "Animação"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore nosso portfólio de projetos bem-sucedidos de criação de conteúdo abrangendo podcasts, 
            transmissões ao vivo, produção de vídeo e campanhas digitais em larga escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card/40 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 hover:shadow-card hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Metrics Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {project.metrics}
                  </Badge>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-primary hover:text-primary-glow transition-colors cursor-pointer group/link">
                  <span className="text-sm font-medium">Ver Projeto</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4 text-primary-foreground">
              Pronto para Criar Algo Incrível?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Vamos dar vida à sua visão de conteúdo com nossos serviços de produção profissional.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Iniciar Seu Projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;