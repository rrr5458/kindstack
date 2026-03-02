import React, { useEffect, useRef } from 'react';
import '../styles/GradientBackground.css'

const ManagedBackground: React.FC = () => {
  const interRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 15; // Slightly snappier tracking
      curY += (tgY - curY) / 15;
      if (interRef.current) {
        interRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="gradient-bg">
      <div className="content-overlay">
        <h1 className="managed-text-title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
        <span className="managed-text-sub">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
      </div>

      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div ref={interRef} className="interactive"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ManagedBackground;