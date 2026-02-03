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

    // Characters with more variety
    const chars = '010123456789$+-*/=%"#&@ABCD'; // Added letters for cyberpunk feel
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * canvas.height / fontSize); // Random start for variety

    let lastTime = 0;
    const fps = 30; // Smoother control
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      if (timestamp - lastTime >= interval) {
        lastTime = timestamp;

        // Stronger fade for clearer trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Adjusted for better visibility
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Random brightness + occasional purple accent
          const brightness = Math.random() * 0.5 + 0.5; // 0.5–1.0
          const color = Math.random() > 0.95 ? '#ff00ff' : (brightness > 0.8 ? '#00ff80' : '#00ff41');
          ctx.globalAlpha = brightness;
          ctx.fillStyle = color;

          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(text, x, y);

          // Random speed (0.5–1.5) for variety
          drops[i] += Math.random() * 1 + 0.5;

          // Reset with randomness
          if (y > canvas.height && Math.random() > 0.97) {
            drops[i] = 0;
          }
        }

        ctx.globalAlpha = 1;
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
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
        opacity: 0.2, // Slightly higher for energy without distraction
      }}
    />
  );
};

export default MatrixRain;