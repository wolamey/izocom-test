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
    <div
      className="fixed pointer-events-none z-[1] mix-blend-multiply"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      {/* Основной красный blur */}
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
      {/* Вторичное свечение */}
      <div
        className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 60%)',
          filter: 'blur(20px)',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
