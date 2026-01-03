import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animateCursor = () => {
      positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.15);
      positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        mixBlendMode: 'difference',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
