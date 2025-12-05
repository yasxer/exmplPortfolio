'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-9999 mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-9999 mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CursorFollower;
