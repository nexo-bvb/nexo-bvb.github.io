import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(Number((totalScroll / windowHeight) * 100));
      setScrollY(totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative text-on-background">
      <CustomCursor />
      
      {/* Scroll Progress */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Global HUD Background with Parallax (40% speed) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] hud-bg"
        style={{ backgroundPositionY: `${scrollY * 0.4}px` }}
      ></div>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col pt-24 z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
