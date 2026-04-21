import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-outer hidden md:block" 
        style={{ 
          top: position.y, 
          left: position.x,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'transparent'
        }}
      />
      <div 
        className="cursor-inner hidden md:block" 
        style={{ 
          top: position.y, 
          left: position.x 
        }}
      />
    </>
  );
}
