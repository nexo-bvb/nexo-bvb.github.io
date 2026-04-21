import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: string;
  children: string; // Must be string for the scramble effect
}

export function Button({ variant = 'primary', icon, className, children, ...props }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<number | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (spanRef.current && !isHovered) {
      setContainerWidth(spanRef.current.getBoundingClientRect().width);
    }
  }, [children, isHovered]);

  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      clearInterval(intervalRef.current!);

      intervalRef.current = window.setInterval(() => {
        setDisplayText(
          children
            .split('')
            .map((letter, index) => {
              if (index < iteration) return children[index];
              if (letter === ' ') return ' ';
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iteration >= children.length) {
          clearInterval(intervalRef.current!);
        }

        iteration += 1 / 2; // Controls the speed of the effect
      }, 30);
    } else {
      clearInterval(intervalRef.current!);
      setDisplayText(children);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isHovered, children]);

  return (
    <button 
      className={cn(
        variant === 'primary' ? 'btn-primary' : 'btn-outline',
        icon && 'group flex items-center gap-2',
        className
      )}
      onMouseEnter={(e) => {
        setIsHovered(true);
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        props.onMouseLeave?.(e);
      }}
      {...props}
    >
      <span 
        ref={spanRef}
        style={{ 
          display: 'inline-block', 
          width: containerWidth ? `${containerWidth}px` : 'auto',
          whiteSpace: 'nowrap',
          textAlign: 'center'
        }}
      >
        {displayText}
      </span>
      {icon && (
        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
}
