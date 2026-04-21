import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export function Services() {
  return (
    <div className="w-full">
      {/* INNER HERO */}
      <header className="relative min-h-[614px] flex flex-col justify-center px-6 md:px-24 py-20 border-b border-outline-variant/20 bg-surface">
        {/* Breadcrumb */}
        <div className="absolute top-8 left-6 md:left-24 flex items-center gap-2 font-label text-[10px] text-secondary-fixed-dim uppercase tracking-[2px]">
          <a className="hover:text-primary transition-colors" href="/">HOME</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary">SERVIÇOS</span>
        </div>
        
        <div className="max-w-4xl mt-12 relative z-10">
          <Reveal delay={100}>
            <span className="inline-block border border-outline-variant/40 px-4 py-1 text-[10px] font-label text-secondary uppercase tracking-[3px] mb-8 bg-surface-container-lowest/50 backdrop-blur-sm">
              O QUE ENTREGAMOS
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-[2px] md:tracking-[4px] text-primary mb-6 leading-tight">
              NOSSAS <span className="text-secondary-fixed-dim">SOLUÇÕES</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-body text-base md:text-lg text-secondary-fixed-dim max-w-2xl leading-relaxed">
              Arquitetura digital de alta performance. Desenvolvemos interfaces, identidades e estratégias posicionadas para dominância de mercado. Precisão técnica aliada ao design brutalista.
            </p>
          </Reveal>
        </div>
      </header>

      {/* SECTION 1 — INTRO */}
      <section className="px-6 md:px-24 py-12 bg-surface-container-low border-b border-outline-variant/20">
        <Reveal direction="right">
          <span className="text-[10px] font-label text-secondary uppercase tracking-[3px] mb-4 block">VISÃO GERAL</span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-[1px] md:tracking-[2px] text-primary">
            SOLUÇÕES QUE TRANSFORMAM
          </h2>
          <div className="w-16 h-[2px] bg-outline-variant mt-6"></div>
        </Reveal>
      </section>

      {/* SECTION 2 — SERVICES GRID */}
      <section className="px-6 md:px-24 py-24 bg-surface">
        <div className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-[2px] text-primary">NÚCLEO OPERACIONAL</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-outline-variant/20">
          {[
            { num: '01', icon: 'fingerprint', tag: 'BRANDING', title: 'Identidade Visual', desc: 'Construção de marcas sólidas e memoráveis. Sistemas visuais completos projetados para transmitir autoridade e consistência.', price: 'R$ 1.200' },
            { num: '02', icon: 'code', tag: 'DEV', title: 'Desenvolvimento Web', desc: 'Plataformas de alta performance codificadas com as tecnologias mais recentes. Foco em velocidade, SEO e experiência.', price: 'R$ 2.400' },
            { num: '03', icon: 'polyline', tag: 'UI/UX', title: 'Design de Alto Impacto', desc: 'Suporte de design contínuo para peças gráficas, interfaces e materiais publicitários que demandam conversão imediata.', price: 'R$ 600', isMonthly: true },
            { num: '04', icon: 'radar', tag: 'ESTRATÉGIA', title: 'Posicionamento de Marca', desc: 'Consultoria estratégica para alinhar sua comunicação verbal e visual, definindo arquétipos, tom de voz e diretrizes claras.', price: 'R$ 1.800' },
            { num: '05', icon: 'share', tag: 'CONTEÚDO', title: 'Social Media', desc: 'Gestão de presença digital. Criação de linha editorial, design de posts e estratégia de engajamento baseada em dados.', price: 'R$ 900', isMonthly: true },
            { num: '06', icon: 'target', tag: 'PERFORMANCE', title: 'Captação de Clientes', desc: 'Implementação de funis de venda e gestão de tráfego pago (Ads) direcionados para geração de leads qualificados.', price: 'R$ 1.500', isMonthly: true }
          ].map((service, i) => (
            <Reveal key={i} delay={(i % 3) * 150} direction="up">
              <article className="relative p-8 border border-outline-variant/20 bg-surface-container-lowest group hover:bg-surface-container-low transition-colors duration-300 h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-headline text-xl text-outline font-bold">{service.num}</span>
                  <span className="material-symbols-outlined text-3xl text-secondary">{service.icon}</span>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-outline-variant/40 text-[9px] font-label text-secondary uppercase tracking-[1px] bg-surface-dim">{service.tag}</span>
                </div>
                <h3 className="font-headline text-lg font-bold tracking-[1.5px] text-primary mb-4 uppercase">{service.title}</h3>
                <p className="font-body text-sm text-secondary-fixed-dim mb-8 line-clamp-3">
                  {service.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER (Inverted) */}
      <section className="bg-primary py-24 px-6 md:px-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-[2px] text-on-primary uppercase">
              Não encontrou o que precisa?
            </h2>
            <a href="https://wa.me/5595984401878?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary whitespace-nowrap">
                SOLICITAR ORÇAMENTO
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
