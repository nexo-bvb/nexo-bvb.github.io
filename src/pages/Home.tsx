import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

function BlinkingDots() {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const i = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.');
    }, 500);
    return () => clearInterval(i);
  }, []);
  return <span className="inline-block w-4 text-left">{dots}</span>;
}

function HoverLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMouse({ 
          x: clientX - rect.left, 
          y: clientY - rect.top 
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none select-none"
      style={{
        WebkitMaskImage: `radial-gradient(circle 300px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)`,
        maskImage: `radial-gradient(circle 300px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)`
      }}
    >
      <svg className="w-[100vw] max-w-[1200px] fill-white" viewBox="0 0 375 375" preserveAspectRatio="xMidYMid meet">
        <defs>
          <clipPath id="logoClip">
            <rect x="0" width="235" y="0" height="159" />
          </clipPath>
        </defs>
        <g transform="translate(68, 108)">
          <g clipPath="url(#logoClip)">
            <g transform="translate(1.315407, 118.272147)">
              <path d="M 105.84375 -109.796875 C 102.46875 -109.796875 99.351562 -108.925781 96.5 -107.1875 C 93.65625 -105.445312 91.414062 -103.148438 89.78125 -100.296875 C 88.144531 -97.453125 87.328125 -94.289062 87.328125 -90.8125 L 87.328125 -10.4375 C 87.328125 -7.800781 88.25 -5.5625 90.09375 -3.71875 C 91.9375 -1.875 94.179688 -0.953125 96.828125 -0.953125 L 97.140625 -0.953125 L 97.140625 0 L 59.796875 0 L 24.359375 -102.203125 L 24.359375 -19.9375 C 24.359375 -16.5625 25.175781 -13.421875 26.8125 -10.515625 C 28.445312 -7.617188 30.6875 -5.300781 33.53125 -3.5625 C 36.382812 -1.820312 39.5 -0.953125 42.875 -0.953125 L 42.875 0 L 4.75 0 L 4.75 -0.953125 C 8.226562 -0.953125 11.363281 -1.820312 14.15625 -3.5625 C 16.957031 -5.300781 19.203125 -7.617188 20.890625 -10.515625 C 22.578125 -13.421875 23.421875 -16.5625 23.421875 -19.9375 L 23.421875 -100.296875 C 23.421875 -102.929688 22.492188 -105.171875 20.640625 -107.015625 C 18.796875 -108.867188 16.554688 -109.796875 13.921875 -109.796875 L 13.453125 -109.796875 L 13.453125 -110.75 L 50.9375 -110.75 L 86.375 -8.546875 L 86.375 -90.8125 C 86.375 -94.289062 85.53125 -97.453125 83.84375 -100.296875 C 82.15625 -103.148438 79.914062 -105.445312 77.125 -107.1875 C 74.332031 -108.925781 71.195312 -109.796875 67.71875 -109.796875 L 67.71875 -110.75 L 105.84375 -110.75 Z M 105.84375 -109.796875 " />
            </g>
            <g transform="translate(122.33412, 118.272147)">
              <path d="M 80.203125 -86.21875 L 68.1875 -65.015625 L 99.515625 -9.65625 C 100.671875 -7.644531 102.273438 -5.769531 104.328125 -4.03125 C 106.390625 -2.289062 108.472656 -1.265625 110.578125 -0.953125 L 110.578125 0 L 60.90625 0 L 60.90625 -0.953125 C 62.800781 -1.054688 64.378906 -1.765625 65.640625 -3.078125 C 66.910156 -4.398438 67.546875 -5.957031 67.546875 -7.75 C 67.546875 -9.125 67.179688 -10.335938 66.453125 -11.390625 L 47.625 -44.765625 L 35.59375 -23.421875 C 34.332031 -21.203125 33.703125 -18.722656 33.703125 -15.984375 C 33.703125 -12.078125 34.992188 -8.695312 37.578125 -5.84375 C 40.160156 -3 43.296875 -1.367188 46.984375 -0.953125 L 46.984375 0 L 4.75 0 L 4.75 -0.953125 C 8.757812 -1.472656 12.6875 -2.921875 16.53125 -5.296875 C 20.382812 -7.671875 23.941406 -10.570312 27.203125 -14 C 30.472656 -17.425781 33.113281 -20.929688 35.125 -24.515625 L 47.140625 -45.71875 L 15.828125 -101.09375 C 14.765625 -103.09375 13.175781 -104.960938 11.0625 -106.703125 C 8.957031 -108.441406 6.851562 -109.472656 4.75 -109.796875 L 4.75 -110.75 L 54.421875 -110.75 L 54.421875 -109.796875 C 52.628906 -109.691406 51.070312 -108.976562 49.75 -107.65625 C 48.4375 -106.34375 47.78125 -104.785156 47.78125 -102.984375 C 47.78125 -102.253906 47.882812 -101.597656 48.09375 -101.015625 C 48.300781 -100.429688 48.566406 -99.878906 48.890625 -99.359375 L 67.71875 -65.96875 L 79.734375 -87.328125 C 81.109375 -89.753906 81.796875 -92.234375 81.796875 -94.765625 C 81.796875 -98.671875 80.472656 -102.046875 77.828125 -104.890625 C 75.191406 -107.734375 72.03125 -109.367188 68.34375 -109.796875 L 68.34375 -110.75 L 110.578125 -110.75 L 110.578125 -109.796875 C 106.679688 -109.265625 102.78125 -107.8125 98.875 -105.4375 C 94.976562 -103.070312 91.421875 -100.171875 88.203125 -96.734375 C 84.984375 -93.304688 82.316406 -89.800781 80.203125 -86.21875 Z M 80.203125 -86.21875 " />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center border-b border-white/10 overflow-hidden" id="home">
        {/* Background Logo with Interactive Gradient */}
        <HoverLogo />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
          <Reveal delay={100}>
            <p className="font-exo-2 text-zinc-500 tracking-[4px] text-sm mb-6 uppercase flex items-center justify-center">
              Terminal Ativo // Initializing<BlinkingDots />
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="animate-float">
              <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-bold tracking-[2px] sm:tracking-[4px] mb-8 leading-tight uppercase inline-block cursor-default">
                {"SUA MARCA NO".split("").map((char, i) => (
                  <span key={i} className="hover:text-black transition-colors duration-200">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <br/>
                {"PRÓXIMO NÍVEL.".split("").map((char, i) => (
                  <span key={`grad-${i}`} className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 hover:from-black hover:to-black transition-all duration-200">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/servicos">
                <Button variant="primary">Ver Serviços</Button>
              </Link>
              <a href="https://wa.me/5595984401878?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os." target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Fale Conosco</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. TECH STACK (MARQUEE) */}
      <section className="border-b border-white/10 bg-surface-container-lowest overflow-hidden py-12 relative flex group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee space-x-16 px-8">
          {[1, 2, 3, 4].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center space-x-16 flex-shrink-0">
              {[
                'React.js', 'TypeScript', 'Tailwind', 'Next.js', 'Figma', 'Node.js', 'Vite'
              ].map((tech, i) => (
                <div key={`${groupIndex}-${i}`} className="group/tech flex items-center justify-center cursor-default">
                  <span className="text-zinc-700 group-hover/tech:text-white transition-colors duration-300 font-mono text-xl opacity-50 group-hover/tech:opacity-100 mr-2 transform -translate-x-2 group-hover/tech:translate-x-0">{"["}</span>
                  <span className="font-orbitron text-2xl md:text-3xl font-bold tracking-[2px] text-zinc-600 group-hover/tech:text-white transition-all duration-300 whitespace-nowrap uppercase">
                    {tech}
                  </span>
                  <span className="text-zinc-700 group-hover/tech:text-white transition-colors duration-300 font-mono text-xl opacity-50 group-hover/tech:opacity-100 ml-2 transform translate-x-2 group-hover/tech:translate-x-0">{"]"}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-24 border-b border-white/10 relative" id="servicos">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal delay={100} direction="left">
            <div className="mb-16 border-l-2 border-white pl-4">
              <h2 className="font-orbitron text-sm tracking-[4px] text-zinc-500 mb-2 uppercase">Core Functions</h2>
              <h3 className="font-orbitron text-3xl font-bold tracking-[2px] uppercase">O Que Fazemos</h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'design_services', title: 'Identidade Visual', desc: 'Construção de marcas sólidas com DNA único. Design geométrico, tipografia premium e paletas intencionais.', num: '01' },
              { icon: 'code_blocks', title: 'Desenvolvimento Web', desc: 'Terminais digitais de alta performance. Interfaces arquitetônicas desenhadas para conversão e impacto visual.', num: '02' },
              { icon: 'campaign', title: 'Estratégia Digital', desc: 'Mapeamento de jornada e posicionamento técnico. Transformamos dados em narrativas de mercado precisas.', num: '03' }
            ].map((service, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="group border border-white/10 bg-surface-container-low p-8 relative overflow-hidden hover:border-white/30 transition-all duration-300 h-full">
                  <div className="absolute top-0 right-0 p-4 font-orbitron text-xs text-zinc-700">{service.num}</div>
                  <span className="material-symbols-outlined text-4xl mb-6 text-zinc-400 group-hover:text-white transition-colors">{service.icon}</span>
                  <h4 className="font-orbitron text-xl font-bold tracking-[1px] mb-4 uppercase">{service.title}</h4>
                  <p className="font-exo-2 text-sm text-zinc-400 leading-relaxed">{service.desc}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
