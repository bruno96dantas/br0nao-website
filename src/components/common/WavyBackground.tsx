import React, { useContext, useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../../utils/cn";
import { ThemeContext } from "../../context/ThemeContext";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const { darkMode } = useContext(ThemeContext);
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [key, setKey] = useState(0); // Force re-render key
  
  // Default colors based on theme
  const defaultDarkColors = [
    "#00ffa3", // verde neon
    "#ff00aa", // magenta neon
    "#0066ff", // azul neon
    "#9900ff", // roxo neon
    "#00ccff", // ciano neon
  ];
  
  const defaultLightColors = [
    "#006644", // verde escuro
    "#660044", // magenta escuro
    "#003399", // azul escuro
    "#440088", // roxo escuro
    "#0088aa", // ciano escuro
  ];
  
  // Use provided colors or default based on theme
  const waveColors = colors ?? (darkMode ? defaultDarkColors : defaultLightColors);
  
  // Use provided background or default based on theme
  const bgFill = backgroundFill ?? (darkMode ? "rgba(10, 10, 20, 0.8)" : "rgba(240, 240, 250, 0.8)");
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  // Animation function
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let w = ctx.canvas.width = window.innerWidth;
    let h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;
    
    const handleResize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    
    window.addEventListener('resize', handleResize);
    
    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };
    
    const render = () => {
      ctx.fillStyle = bgFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationRef.current = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [blur, waveWidth, waveOpacity, bgFill, waveColors, key]); // Include key in dependencies
  
  // Force re-render when theme changes
  useEffect(() => {
    setKey(prev => prev + 1); // Change key to force re-render
  }, [darkMode]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // Support for Safari
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        key={key} // Add key to force re-creation of canvas element
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;