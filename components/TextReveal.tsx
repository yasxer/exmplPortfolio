'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

const TextReveal = ({ text, className = '', delay = 0 }: TextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, { 
      opacity: 0, 
      y: 50,
      rotationX: -15,
    });

    // Animate to final state with GSAP
    gsap.to(el, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.4,
      ease: 'power4.out',
      delay: delay,
    });
  }, [delay]);

  return (
    <div 
      ref={textRef} 
      className={className}
      style={{ perspective: '1000px' }}
    >
      {text}
    </div>
  );
};

export default TextReveal;
