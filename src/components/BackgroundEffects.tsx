import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  vx: number;
  vy: number;
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 5,
      vx: (Math.random() - 0.5) * 30,
      vy: (Math.random() - 0.5) * 30,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900" />

      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow-effect">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>

        {Array.from({ length: 3 }).map((_, layer) => (
          <g key={`layer-${layer}`}>
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * Math.PI * 2) / 8 + layer * 0.2;
              const radius = 25 + layer * 20;
              const cx = 50 + radius * Math.cos(angle);
              const cy = 50 + radius * Math.sin(angle);
              const nextAngle = ((i + 1) * Math.PI * 2) / 8 + layer * 0.2;
              const nextRadius = 25 + layer * 20;
              const nx = 50 + nextRadius * Math.cos(nextAngle);
              const ny = 50 + nextRadius * Math.sin(nextAngle);

              return (
                <g key={`ring-${layer}-${i}`}>
                  <motion.line
                    x1={`${cx}%`}
                    y1={`${cy}%`}
                    x2={`${nx}%`}
                    y2={`${ny}%`}
                    stroke="rgba(217, 119, 6, 0.3)"
                    strokeWidth="1"
                    animate={{
                      opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                      duration: 3 + layer,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                  <motion.circle
                    cx={`${cx}%`}
                    cy={`${cy}%`}
                    r="2"
                    fill="rgba(251, 191, 36, 0.6)"
                    filter="url(#glow-effect)"
                    animate={{
                      r: [2, 4, 2],
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                      duration: 3 + layer,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </g>
              );
            })}
          </g>
        ))}

        <motion.circle
          cx="50%"
          cy="50%"
          r="15"
          fill="none"
          stroke="rgba(217, 119, 6, 0.2)"
          strokeWidth="1"
          animate={{
            r: [15, 25, 15],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="50%"
          cy="50%"
          r="8"
          fill="none"
          stroke="rgba(251, 191, 36, 0.4)"
          strokeWidth="1"
          strokeDasharray="2,2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(251, 191, 36, 0.8), rgba(168, 85, 247, 0.4))`,
            boxShadow: `0 0 ${particle.size * 4}px rgba(251, 191, 36, 0.6), inset 0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.3)`,
          }}
          animate={{
            y: [0, particle.vy * 2, particle.vy * 4],
            x: [0, particle.vx * 2, particle.vx * 4],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
