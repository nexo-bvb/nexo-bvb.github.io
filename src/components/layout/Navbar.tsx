import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SOBRE', path: '/sobre' },
    { name: 'SERVIÇOS', path: '/servicos' },
    { name: 'CONTATO', path: '/contato' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={cn(
        "fixed top-0 w-full z-50 rounded-none border-b border-white/10 flex justify-between items-center px-6 md:px-12 py-4 max-w-full mx-auto transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      )} style={{ boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none" }}>
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-[4px] font-orbitron text-white">
          NEXO.BVB
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "font-orbitron uppercase tracking-[4px] font-bold text-[12px] px-2 py-1 transition-colors duration-300",
                  isActive ? "text-white border-b-2 border-white" : "text-zinc-500 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        
        <Link to="/contato" className="hidden md:block">
          <Button variant="primary" className="text-xs py-2 px-6">
            INICIAR_PROJETO
          </Button>
        </Link>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-orbitron uppercase tracking-[4px] font-bold text-lg p-4 border-l-2 transition-colors",
                    isActive ? "text-white border-white bg-white/5" : "text-zinc-500 border-transparent"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link to="/contato" onClick={() => setMobileMenuOpen(false)} className="mt-8">
               <Button variant="primary" className="w-full">
                 INICIAR_PROJETO
               </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
