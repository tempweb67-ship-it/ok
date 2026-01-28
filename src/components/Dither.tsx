import { useEffect, useRef } from 'react';

interface DitherProps {
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
}

export default function Dither({
  waveColor = [1, 0, 0.3],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  colorNum = 4,
  waveAmplitude = 0.42,
  waveFrequency = 3,
  waveSpeed = 0.05,
}: DitherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      if (!disableAnimation) {
        time += waveSpeed;
      }

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const nx = x / width;
          const ny = y / height;

          const dx = nx - mouseRef.current.x;
          const dy = ny - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseEffect = enableMouseInteraction
            ? Math.exp(-dist * dist / (mouseRadius * mouseRadius))
            : 0;

          const wave1 = Math.sin(nx * waveFrequency * Math.PI * 2 + time);
          const wave2 = Math.sin(ny * waveFrequency * Math.PI * 2 + time * 0.8);
          const wave3 = Math.sin((nx + ny) * waveFrequency * Math.PI + time * 0.6);

          let value =
            (wave1 + wave2 + wave3) * waveAmplitude +
            mouseEffect * 0.5;

          value = (value + 1) / 2;
          value = Math.max(0, Math.min(1, value));

          const quantized = Math.floor(value * colorNum) / colorNum;

          const idx = (y * width + x) * 4;
          data[idx] = quantized * waveColor[0] * 255;
          data[idx + 1] = quantized * waveColor[1] * 255;
          data[idx + 2] = quantized * waveColor[2] * 255;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (!disableAnimation) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    waveColor,
    disableAnimation,
    enableMouseInteraction,
    mouseRadius,
    colorNum,
    waveAmplitude,
    waveFrequency,
    waveSpeed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
