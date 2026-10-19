import { useEffect, useState, useRef } from 'react';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const targetRef = useRef({ x: -200, y: -200 });
  const currentRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Плавная интерполяция — минимальная задержка для естественного ощущения
      const lerp = 0.15;
      currentRef.current = {
        x: currentRef.current.x + (targetRef.current.x - currentRef.current.x) * lerp,
        y: currentRef.current.y + (targetRef.current.y - currentRef.current.y) * lerp,
      };
      setPos({ ...currentRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Для светлых фонов */}
      <div
        className="fixed pointer-events-none z-[1] mix-blend-multiply"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle at center,
              rgba(220, 38, 38, 0.15) 0%,
              rgba(220, 38, 38, 0.08) 25%,
              rgba(220, 38, 38, 0.03) 50%,
              transparent 75%
            )`,
            filter: 'blur(30px)',
          }}
        />
      </div>
      
      {/* Для темных фонов */}
      <div
        className="fixed pointer-events-none z-[1] mix-blend-screen"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      >
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle at center,
              rgba(220, 38, 38, 0.12) 0%,
              rgba(220, 38, 38, 0.06) 25%,
              rgba(220, 38, 38, 0.02) 50%,
              transparent 75%
            )`,
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,100,100,0.15) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </>
  );
}
