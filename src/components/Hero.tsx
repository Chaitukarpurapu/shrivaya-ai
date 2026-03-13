import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/30" />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-12 inline-block"
        >
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-purple-500 to-indigo-500 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center shadow-2xl shadow-amber-500/50">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                <motion.path
                  d="M50 10 L60 35 L85 35 L65 50 L75 75 L50 60 L25 75 L35 50 L15 35 L40 35 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ originX: '50px', originY: '50px' }}
                />
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <motion.line
                    key={angle}
                    x1="50"
                    y1="50"
                    x2={50 + 25 * Math.cos((angle * Math.PI) / 180)}
                    y2={50 + 25 * Math.sin((angle * Math.PI) / 180)}
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: angle / 100,
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-purple-200 to-amber-200 bg-clip-text text-transparent"
        >
          Shrivaya AI
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-5xl font-light mb-4 text-amber-100"
        >
          Divine Intelligence for the Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Shrivaya AI empowers creators, businesses and innovators with powerful artificial intelligence
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white text-lg font-semibold shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            Start Using AI
          </span>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex justify-center gap-12 text-purple-300"
        >
          {['1M+ Users', 'Trusted AI', '24/7 Support'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="text-center cursor-pointer"
            >
              <div className="text-2xl font-bold text-amber-300">{item.split(' ')[0]}</div>
              <div className="text-sm">{item.split(' ').slice(1).join(' ')}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-amber-400 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
