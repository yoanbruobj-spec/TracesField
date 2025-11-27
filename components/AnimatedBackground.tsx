"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ========== SMOOTH SPRING CONFIGS ==========
const smoothSpring = {
  damping: 30,
  stiffness: 100,
  mass: 0.8,
};

const ultraSmoothSpring = {
  damping: 40,
  stiffness: 80,
  mass: 1,
};

// ========== ANIMATED GRID BACKGROUND ==========
export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-accelerated">
      <div className="absolute inset-0 grid-background-animated opacity-30 hw-accelerated" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
}

// ========== PREMIUM MESH GRADIENT ==========
export function MeshGradientBackground() {
  // Memoized transition configs for smoother animations
  const orbTransition = useMemo(() => ({
    duration: 25,
    repeat: Infinity,
    ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number], // Custom smooth easing
  }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-accelerated">
      {/* Animated gradient orbs - optimized with GPU acceleration */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-red-500/30 via-red-400/20 to-transparent blur-3xl hw-accelerated"
        animate={{
          x: [0, 80, 40, 0],
          y: [0, 40, 80, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          ...orbTransition,
          duration: 30,
        }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-purple-500/25 via-violet-400/15 to-transparent blur-3xl hw-accelerated"
        animate={{
          x: [0, -60, -30, 0],
          y: [0, -50, -100, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          ...orbTransition,
          duration: 28,
          delay: 3,
        }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-transparent blur-3xl hw-accelerated"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          ...orbTransition,
          duration: 32,
          delay: 5,
        }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-pink-400/10 to-transparent blur-3xl hw-accelerated"
        animate={{
          x: [0, 30, -15, 0],
          y: [0, 60, 30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          ...orbTransition,
          duration: 35,
          delay: 2,
        }}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

// ========== FLOATING PARTICLES (Canvas) - OPTIMIZED ==========
export function FloatingParticles({ count = 40, color = "220, 38, 38" }: { count?: number; color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    pulseSpeed: number;
    pulseOffset: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Device pixel ratio for sharp rendering
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    updateSize();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 100);
    };
    window.addEventListener("resize", handleResize);

    // Initialize particles
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      speedX: Math.random() * 0.2 - 0.1,
      speedY: Math.random() * 0.2 - 0.1,
      opacity: Math.random() * 0.4 + 0.2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;
    let lastTime = performance.now();
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function animate(currentTime: number) {
      const deltaTime = currentTime - lastTime;

      // Frame rate limiting for consistent 60fps
      if (deltaTime >= frameInterval) {
        lastTime = currentTime - (deltaTime % frameInterval);

        const width = canvas!.width / dpr;
        const height = canvas!.height / dpr;

        ctx!.clearRect(0, 0, width, height);
        time += 0.5;

        // Batch draw particles
        ctx!.shadowBlur = 0; // Disable shadow for performance

        particlesRef.current.forEach((particle) => {
          // Update position with smooth movement
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Wrap around edges
          if (particle.x > width) particle.x = 0;
          if (particle.x < 0) particle.x = width;
          if (particle.y > height) particle.y = 0;
          if (particle.y < 0) particle.y = height;

          // Smooth pulsing opacity
          particle.opacity = 0.25 + Math.sin(time * particle.pulseSpeed + particle.pulseOffset) * 0.15;

          // Draw particle
          ctx!.beginPath();
          ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${color}, ${particle.opacity})`;
          ctx!.fill();
        });

        // Draw connections (optimized - only check nearby particles)
        ctx!.lineWidth = 0.3;
        const connectionDistance = 100;

        for (let i = 0; i < particlesRef.current.length; i++) {
          const a = particlesRef.current[i];
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const b = particlesRef.current[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectionDistance * connectionDistance) {
              const distance = Math.sqrt(distSq);
              ctx!.beginPath();
              ctx!.moveTo(a.x, a.y);
              ctx!.lineTo(b.x, b.y);
              ctx!.strokeStyle = `rgba(${color}, ${0.08 * (1 - distance / connectionDistance)})`;
              ctx!.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-35"
      style={{
        willChange: "auto",
        contain: "strict",
      }}
    />
  );
}

// ========== SPOTLIGHT EFFECT (Mouse Follow) - OPTIMIZED ==========
export function SpotlightEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth spring config for butter-smooth mouse following
  const springConfig = useMemo(() => ({
    damping: 35,
    stiffness: 80,
    mass: 0.5,
    restSpeed: 0.001,
    restDelta: 0.001
  }), []);

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Throttled mouse move handler for performance
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          mouseX.set(lastX);
          mouseY.set(lastY);
          rafId = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-10 gpu-accelerated"
      style={{
        background: useTransform(
          [x, y],
          ([latestX, latestY]) =>
            `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(220, 38, 38, 0.04), transparent 40%)`
        ),
        willChange: "background",
      }}
    />
  );
}

// ========== AURORA BACKGROUND - OPTIMIZED ==========
export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-accelerated">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

      {/* Aurora waves - with optimized animation */}
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
        <defs>
          <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.25">
              <animate attributeName="stop-opacity" values="0.25;0.4;0.25" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15">
              <animate attributeName="stop-opacity" values="0.15;0.3;0.15" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.25">
              <animate attributeName="stop-opacity" values="0.25;0.4;0.25" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="15" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M0,200 Q250,100 500,200 T1000,200 L1000,400 L0,400 Z"
          fill="url(#aurora1)"
          filter="url(#glow)"
          animate={{
            d: [
              "M0,200 Q250,100 500,200 T1000,200 L1000,400 L0,400 Z",
              "M0,210 Q250,130 500,190 T1000,210 L1000,400 L0,400 Z",
              "M0,190 Q250,90 500,210 T1000,190 L1000,400 L0,400 Z",
              "M0,200 Q250,100 500,200 T1000,200 L1000,400 L0,400 Z",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
          }}
          style={{ willChange: "d" }}
        />
      </svg>
    </div>
  );
}

// ========== MORPHING BLOBS - OPTIMIZED ==========
export function MorphingBlobs() {
  const blobTransition = useMemo(() => ({
    repeat: Infinity,
    ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
  }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-accelerated">
      {/* Blob 1 */}
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-red-500/15 to-red-600/8 blob blur-2xl hw-accelerated"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          ...blobTransition,
          duration: 30,
        }}
        style={{ willChange: "transform" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/12 to-violet-600/8 blob blur-2xl hw-accelerated"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          ...blobTransition,
          duration: 35,
        }}
        style={{ willChange: "transform" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/8 to-cyan-500/8 blob blur-2xl hw-accelerated"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          ...blobTransition,
          duration: 28,
        }}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}

// ========== GEOMETRIC SHAPES - OPTIMIZED ==========
export function GeometricShapes() {
  const shapes = useMemo(() => [
    { type: "circle", size: 60, x: "10%", y: "20%", delay: 0 },
    { type: "square", size: 40, x: "80%", y: "15%", delay: 1 },
    { type: "triangle", size: 50, x: "70%", y: "70%", delay: 2 },
    { type: "circle", size: 30, x: "20%", y: "80%", delay: 0.5 },
  ], []);

  const shapeTransition = useMemo(() => ({
    repeat: Infinity,
    ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
  }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-accelerated">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute hw-accelerated"
          style={{ left: shape.x, top: shape.y, willChange: "transform, opacity" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.08, 0.2, 0.08],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
            y: [0, -15, 0],
          }}
          transition={{
            ...shapeTransition,
            duration: 12 + i * 3,
            delay: shape.delay,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full border-2 border-red-500/15"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="border-2 border-purple-500/15 rotate-45"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              className="border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent border-b-blue-500/15"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ========== GRADIENT ORB - OPTIMIZED ==========
export function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl hw-accelerated ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.25, 0.4, 0.25],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      }}
      style={{ willChange: "transform, opacity" }}
    />
  );
}

// ========== NOISE OVERLAY ==========
export function NoiseOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
      <svg className="w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

// ========== 3D CARD TILT EFFECT - OPTIMIZED ==========
export function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Ultra-smooth spring for 3D card effect
  const springConfig = useMemo(() => ({
    damping: 25,
    stiffness: 150,
    mass: 0.5,
  }), []);

  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set((y - centerY) / 25);
    rotateY.set((centerX - x) / 25);
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 hw-accelerated ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}

// ========== GLOWING CURSOR - OPTIMIZED ==========
export function GlowingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = useMemo(() => ({
    damping: 25,
    stiffness: 200,
    mass: 0.3,
  }), []);

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX - 16;
      lastY = e.clientY - 16;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          mouseX.set(lastX);
          mouseY.set(lastY);
          rafId = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hw-accelerated"
      style={{
        x,
        y,
        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
        willChange: "transform",
      }}
    />
  );
}

// ========== ANIMATED COUNTER ==========
export function AnimatedCounter({
  value,
  duration = 2,
  suffix = ""
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

// ========== SCROLL PROGRESS BAR - OPTIMIZED ==========
export function ScrollProgress() {
  const scaleX = useMotionValue(0);
  const smoothScaleX = useSpring(scaleX, {
    damping: 30,
    stiffness: 150,
    mass: 0.5,
  });

  useEffect(() => {
    let rafId: number;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPosition = window.scrollY;
          scaleX.set(scrollPosition / totalHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 z-50 origin-left hw-accelerated"
      style={{ scaleX: smoothScaleX, willChange: "transform" }}
    />
  );
}
