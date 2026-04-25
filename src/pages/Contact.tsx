import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // Using FormSubmit.co - The first time this runs, it will send an activation email to nexo.bvbcontato@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/nexo.bvbcontato@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `Novo Contato Site Nexo: ${formData.name}`,
            _template: 'box'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const faqs = [
    { q: 'QUAL É O PRAZO MÉDIO DE UM PROJETO?', a: 'O cronograma varia conforme o escopo técnico. Landing pages e identidades básicas levam em média 2-4 semanas. Softwares e apps nativos requerem de 2 a 3 meses.' },
    { q: 'ATENDEM QUAIS SEGMENTOS?', a: 'Atendemos qualquer segmento que busque um posicionamento digital premium e uma estética robusta. Nossos maiores clientes estão em tech, arquitetura, financeiro e automotivo.' },
    { q: 'COMO FUNCIONA O PAGAMENTO?', a: 'Trabalhamos com modelo de entrada (50%) para reserva de sprint e os 50% restantes na entrega técnica.' },
    { q: 'QUANTAS REVISÕES ESTÃO INCLUSAS?', a: 'Garantimos até 3 rodadas de refinamento estrutural. Nosso processo de aprovação contínua minimiza grandes refações.' },
    { q: 'VOCÊS ATENDEM PRESENCIALMENTE?', a: 'Para negócios locais (Boa Vista/RR), o atendimento pode ser presencial ou online, conforme a sua preferência. Para clientes de outras localidades, operamos de forma 100% remota e digital.' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[563px] flex flex-col justify-center items-start px-6 md:px-24 py-20 relative">
        <div className="max-w-4xl">
          <Reveal delay={100}>
            <div className="flex items-center gap-2 mb-6 text-xs font-label text-zinc-500 tracking-[1.5px] uppercase">
              <a className="hover:text-primary transition-colors" href="/">HOME</a>
              <span>/</span>
              <span className="text-primary">CONTATO</span>
            </div>
            <div className="inline-block border border-outline-variant/30 px-3 py-1 mb-6">
              <span className="font-label text-xs tracking-[1.5px] text-primary uppercase">FALE CONOSCO</span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-[2px] md:tracking-[4px] leading-tight mb-6 uppercase">
              Vamos criar algo <span className="text-secondary-fixed-dim block mt-2">extraordinário</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Preencha o formulário ou entre em contato diretamente. Nossa equipe está pronta para processar suas demandas com precisão arquitetônica.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-surface-container-low"></div>
      </section>

      {/* Main 2-Column Section */}
      <section className="px-6 md:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <Reveal direction="right">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[2px] mb-4 uppercase">Fale diretamente com a equipe</h2>
                <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Operamos em um modelo distribuído globalmente, garantindo eficiência e disponibilidade. Utilize os canais abaixo para comunicação direta.
                </p>

                {/* Contact Items */}
                <div className="flex flex-col gap-4">
                  {[
                  { icon: 'mail', label: 'E-MAIL PRINCIPAL', value: 'nexo.bvbcontato@gmail.com' },
                  { icon: 'chat', label: 'WHATSAPP / SIGNAL', value: '(95) 98440-1878' },
                  { icon: 'photo_camera', label: 'INSTAGRAM', value: '@nexo.bvb' },
                  { icon: 'location_on', label: 'OPERAÇÕES', value: 'Boa Vista, Roraima' },
                  { icon: 'schedule', label: 'HORÁRIO (BRT)', value: 'Seg - Sáb, 08:00 - 18:00' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-9 h-9 border border-outline-variant/30 flex items-center justify-center bg-surface-container-lowest group-hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-primary">{item.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label text-[10px] text-zinc-500 tracking-[1px] uppercase">{item.label}</span>
                        <span className="font-body text-sm font-medium">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              {/* Advanced Radar Placeholder */}
              <div className="w-full h-48 bg-surface-container-lowest border border-outline-variant/20 relative overflow-hidden group flex items-center justify-center">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>
                
                {/* Radar Concentric Circles */}
                <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/5 pointer-events-none"></div>
                <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/10 pointer-events-none"></div>
                <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 pointer-events-none"></div>
                <div className="absolute w-[100px] h-[100px] rounded-full border border-primary/30 pointer-events-none"></div>
                
                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-primary/10 pointer-events-none"></div>
                <div className="absolute h-full w-[1px] bg-primary/10 pointer-events-none"></div>
                
                {/* Radar Sweep with Conic Gradient */}
                <div 
                  className="absolute w-[400px] h-[400px] rounded-full animate-[spin_3s_linear_infinite] pointer-events-none"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 70%, rgba(255, 255, 255, 0.15) 100%)',
                    borderRight: '2px solid rgba(255, 255, 255, 0.6)'
                  }}
                ></div>
                
                {/* Pulsing Beacon Dot */}
                <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full"></div>
                
                {/* Coordinates HUD Overlay */}
                <div className="absolute z-10 flex flex-col items-center text-center bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-500 cursor-default">
                  <span className="material-symbols-outlined text-primary mb-2 animate-pulse">my_location</span>
                  <span className="font-label text-[10px] text-zinc-400 tracking-[2px] uppercase mb-1">COORDENADAS: BOA VISTA / RR</span>
                  <span className="font-orbitron text-sm md:text-base font-bold text-white tracking-[2px]">2°49'11.0"N <span className="text-zinc-500">|</span> 60°40'24.0"W</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (60%) - Form */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={100}>
              <div className="border border-outline-variant/30 bg-surface-container-lowest/50 relative">
                <div className="border-b border-outline-variant/30 bg-surface-container-low px-8 py-4 flex justify-between items-center">
                  <span className="font-label text-xs tracking-[1.5px] text-primary uppercase">FORMULÁRIO DE CONTATO</span>
                  <span className="font-body text-[10px] text-zinc-500">SYS.REQ_01</span>
                </div>
                
                <form className="p-8 flex flex-col gap-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block font-label text-[10px] text-zinc-500 tracking-[1px] uppercase mb-2">NOME COMPLETO *</label>
                      <input className="hud-input peer relative z-10" required type="text" name="name" value={formData.name} onChange={handleInputChange} disabled={formStatus === 'loading'} />
                      <div className="scan-line"></div>
                    </div>
                    <div className="relative">
                      <label className="block font-label text-[10px] text-zinc-500 tracking-[1px] uppercase mb-2">E-MAIL PROFISSIONAL *</label>
                      <input className="hud-input peer relative z-10" required type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={formStatus === 'loading'} />
                      <div className="scan-line"></div>
                    </div>
                    <div className="relative">
                      <label className="block font-label text-[10px] text-zinc-500 tracking-[1px] uppercase mb-2">WHATSAPP (OPCIONAL)</label>
                      <input className="hud-input peer relative z-10" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} disabled={formStatus === 'loading'} />
                      <div className="scan-line"></div>
                    </div>
                    <div className="relative">
                      <label className="block font-label text-[10px] text-zinc-500 tracking-[1px] uppercase mb-2">NOME DA EMPRESA</label>
                      <input className="hud-input peer relative z-10" type="text" name="company" value={formData.company} onChange={handleInputChange} disabled={formStatus === 'loading'} />
                      <div className="scan-line"></div>
                    </div>
                    <div className="relative md:col-span-2">
                      <label className="block font-label text-[10px] text-zinc-500 tracking-[1px] uppercase mb-2">TIPO DE SERVIÇO</label>
                      <select className="hud-input appearance-none relative z-10" name="service" value={formData.service} onChange={handleInputChange} disabled={formStatus === 'loading'}>
                        <option disabled value="">Selecione uma opção</option>
                        <option value="ui_ux">Design UI/UX</option>
                        <option value="dev">Desenvolvimento Web</option>
                        <option value="branding">Identidade Visual</option>
                        <option value="other">Outros</option>
                      </select>
                      <div className="absolute right-0 top-1/2 transform translate-y-1/4 pointer-events-none pr-4">
                        <span className="material-symbols-outlined text-zinc-500 text-sm">expand_more</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block font-label text-[10px] text-zinc-500 tracking-[1px] uppercase mb-2">DETALHES DO PROJETO</label>
                    <textarea className="hud-input peer relative z-10 resize-none h-32" placeholder="Descreva os objetivos principais e desafios..." name="details" value={formData.details} onChange={handleInputChange} disabled={formStatus === 'loading'}></textarea>
                    <div className="scan-line"></div>
                  </div>

                  <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="w-full md:w-auto">
                      {formStatus === 'success' && (
                        <div className="flex items-center gap-2 text-green-500 font-label text-xs uppercase tracking-[1px]">
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          Solicitação enviada com sucesso!
                        </div>
                      )}
                      {formStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 font-label text-xs uppercase tracking-[1px]">
                          <span className="material-symbols-outlined text-sm">error</span>
                          Erro de conexão. Tente novamente.
                        </div>
                      )}
                    </div>
                    <Button variant="primary" icon={formStatus === 'loading' ? 'sync' : 'arrow_forward'} disabled={formStatus === 'loading'} className={formStatus === 'loading' ? 'opacity-70 pointer-events-none' : ''}>
                      {formStatus === 'loading' ? 'ENVIANDO...' : 'ENVIAR SOLICITAÇÃO'}
                    </Button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-24 py-24 bg-surface-container-lowest/30 border-y border-surface-container-low relative">
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block border border-outline-variant/30 px-3 py-1 mb-6">
              <span className="font-label text-xs tracking-[1.5px] text-primary uppercase">DÚVIDAS FREQUENTES</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-[2px] uppercase">Perguntas comuns</h2>
          </div>
          
          <div className="flex flex-col border-t border-outline-variant/20">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 100} direction="up">
                <div 
                  className="border-b border-outline-variant/20 group cursor-pointer hover:bg-surface-container-low/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="py-6 px-4 flex justify-between items-center">
                    <h3 className="font-body text-sm font-semibold uppercase tracking-[0.5px]">{faq.q}</h3>
                    <span className={`material-symbols-outlined text-zinc-500 group-hover:text-primary transition-all duration-300 ${openFaq === i ? 'rotate-45 text-primary' : 'group-hover:rotate-90'}`}>
                      add
                    </span>
                  </div>
                  {openFaq === i && (
                    <div className="px-4 pb-6">
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-on-primary py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')]"></div>
        <Reveal>
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[2px] uppercase">SUA MARCA MERECE O MELHOR.</h2>
            <a href="https://wa.me/5595984401878?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-on-primary text-on-primary hover:bg-on-primary hover:text-primary">
                FALAR NO WHATSAPP
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
