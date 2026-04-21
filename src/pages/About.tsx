import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export function About() {
  return (
    <div className="w-full">
      {/* Inner Hero */}
      <header className="relative min-h-[614px] flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-surface-dim border-b border-outline-variant/20 overflow-hidden">
        <div className="absolute inset-0 bg-hud-grid bg-hud opacity-50"></div>
        <div className="relative z-10 max-w-4xl mt-12">
          <Reveal delay={100}>
            <div className="flex items-center space-x-2 text-secondary-fixed text-xs tracking-widest font-bold mb-6 font-label">
              <span>HOME</span>
              <span className="text-outline-variant">/</span>
              <span className="text-primary">SOBRE NÓS</span>
            </div>
            
            <span className="inline-block border border-outline-variant/30 px-3 py-1 text-[10px] font-bold tracking-widest text-secondary-fixed mb-8 font-label">
              QUEM SOMOS
            </span>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl font-black tracking-[2px] md:tracking-[4px] mb-6 text-primary uppercase">
              Sobre a NEXO.BVB
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="font-body text-lg md:text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Construindo identidades digitais com precisão arquitetônica. Combinamos design premium e estratégia implacável para marcas que recusam o padrão.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Section 1: Nossa História */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="space-y-8">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold tracking-[1px] md:tracking-[2px] uppercase">
                Nascemos para <span className="text-secondary-fixed">transformar</span>
              </h2>
              <div className="h-px w-24 bg-outline-variant/50"></div>
              <p className="font-body text-on-surface-variant leading-relaxed font-light">
                Fundada na intersecção da arte mecânica e da tecnologia de ponta, a NEXO.BVB surgiu da necessidade de um terminal criativo que rejeita a mesmice. Não criamos apenas sites; projetamos ecossistemas digitais robustos, eficientes e esteticamente dominantes.
              </p>
              <p className="font-body text-on-surface-variant leading-relaxed font-light">
                Nossa equipe opera como arquitetos do espaço virtual, onde cada pixel é colocado com propósito geométrico e cada linha de código é estruturada para máxima performance.
              </p>
            </div>
          </Reveal>
          
          <Reveal direction="left" delay={200}>
            <div className="relative h-[400px] flex items-center justify-center p-8">
              {/* Triple nested frames */}
              <div className="absolute inset-0 border border-outline-variant/20 p-4">
                <div className="absolute inset-4 border border-outline-variant/40 p-4">
                  <div className="absolute inset-8 border border-primary/20 flex items-center justify-center bg-surface-dim/50 backdrop-blur-sm">
                    <span className="font-orbitron font-black text-6xl md:text-8xl tracking-widest text-stroke-ghost transform -rotate-12 select-none text-center">
                      NEXO<br/>.BVB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2: Missão, Visão e Valores */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface-dim border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'rocket_launch', title: 'Missão', desc: 'Elevar marcas através de um design digital de precisão militar, entregando interfaces que não apenas funcionam, mas comandam respeito e autoridade em seus mercados.', delay: '' },
            { icon: 'visibility', title: 'Visão', desc: 'Ser o terminal central de arquitetura digital para corporações do futuro, definindo o padrão de excelência geométrica e performance na web.', delay: 'md:mt-12' },
            { icon: 'diamond', title: 'Valores', desc: 'Absolutismo estético, precisão funcional, transparência algorítmica e a busca incansável pela perfeição técnica em cada vértice.', delay: '' }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className={`border border-outline-variant/30 p-8 bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300 group relative ${item.delay}`}>
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500"></div>
                <span className="material-symbols-outlined text-4xl mb-6 text-primary">{item.icon}</span>
                <h3 className="font-headline text-xl font-bold tracking-[2px] uppercase mb-4">{item.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-on-primary py-24 px-8 md:px-16 text-center">
        <Reveal>
          <h2 className="font-headline text-3xl md:text-5xl font-black tracking-[2px] uppercase mb-8">
            Pronto para fazer parte dessa história?
          </h2>
          <a href="https://wa.me/5595984401878?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary">
              COMEÇAR AGORA
            </Button>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
