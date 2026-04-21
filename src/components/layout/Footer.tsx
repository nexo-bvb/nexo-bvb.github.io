import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full rounded-none border-t border-white/5 bg-black px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="font-orbitron font-bold tracking-[4px] text-lg text-white">NEXO.BVB</div>
        <div className="font-exo-2 tracking-[1.5px] uppercase text-[10px] text-zinc-600">
          ©2024 ARCHITECT HUD. ALL RIGHTS RESERVED.
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center md:justify-end gap-6 font-exo-2 tracking-[1.5px] uppercase text-xs">
        <Link to="#" className="text-zinc-600 hover:text-white transition-colors duration-200">PRIVACY POLICY</Link>
        <Link to="#" className="text-zinc-600 hover:text-white transition-colors duration-200">TERMS OF SERVICE</Link>
        <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-200">INSTAGRAM</a>
        <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-200">LINKEDIN</a>
      </div>
    </footer>
  );
}
