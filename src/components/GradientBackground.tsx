import React, { useEffect, useRef } from 'react';
import '../styles/GradientBackground.css';

type ManagedBackgroundProps = {
  title: string;
  subtitle: string;
};

const ManagedBackground = ({ title, subtitle }: ManagedBackgroundProps) => {
  const interRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const radiusX = 80;
    const radiusY = 60;
    const speed = 0.0008;

    const move = (time: number) => {

      const tgX = Math.sin(time * speed) * radiusX;
      const tgY = Math.cos(time * speed * 0.8) * radiusY;

      if (interRef.current) {
        interRef.current.style.transform = `translate(${Math.round(tgX)}px, ${Math.round(tgY)}px)`;
      }
      
      animationFrameId = requestAnimationFrame(move);
    };

    animationFrameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="gradient-bg">
      <div className="content-overlay">
        <h1 className="managed-text-title">{title}</h1>
        <span className="managed-text-sub">{subtitle}</span>
      </div>

      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        {/* The "interactive" blob is now the "floating" blob */}
        <div ref={interRef} className="interactive"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ManagedBackground;