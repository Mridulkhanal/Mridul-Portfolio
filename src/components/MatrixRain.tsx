import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize function
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Characters
    const chars = '010123456789$+-*/=%"#&@';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Fade trail (stronger black overlay = clearer visibility)
      ctx.fillStyle = 'rgba(45, 35, 35, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brighter heads + fade tail
        const brightness = Math.random() * 0.4 + 0.6; // 0.6–1.0
        ctx.globalAlpha = brightness;
        ctx.fillStyle = brightness > 0.9 ? '#00ff80' : '#00ff41'; // brighter green for heads

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, x, y);

        // Reset drop randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50); // slower = more visible trails

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
        opacity: 0.18, // slightly higher for visibility
        border: '1px solid red', // TEMP DEBUG BORDER — remove later if visible
      }}
    />
  );
};

export default MatrixRain;