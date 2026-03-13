import { motion, useInView } from 'framer-motion';
import { BarChart3, MessageSquare, FileText, Zap, TrendingUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface DashboardCard {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  color: string;
  displayValue?: number;
}

const dashboardCards: DashboardCard[] = [
  { title: 'Content Generated', value: '2,847', icon: FileText, color: 'from-pink-500 to-purple-600', displayValue: 2847 },
  { title: 'AI Conversations', value: '1,234', icon: MessageSquare, color: 'from-amber-500 to-orange-600', displayValue: 1234 },
  { title: 'Ideas Created', value: '5,693', icon: Zap, color: 'from-blue-500 to-cyan-600', displayValue: 5693 },
  { title: 'Analytics', value: '98%', icon: BarChart3, color: 'from-purple-500 to-indigo-600' },
];

function AnimatedCounter({ targetValue, isInView }: { targetValue: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const increment = targetValue / (duration / 16);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, targetValue]);

  return <>{count.toLocaleString()}</>;
}

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-purple-200 bg-clip-text text-transparent">
            Your AI Command Center
          </h2>
          <p className="text-xl text-purple-300">
            Monitor your divine intelligence in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-indigo-900/60 to-purple-900/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.12, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className="relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-purple-950/30 border border-purple-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-amber-500/20">
                      <motion.div
                        className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          rotate: { duration: 0.6 },
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          },
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent mb-1">
                        {card.displayValue ? <AnimatedCounter targetValue={card.displayValue} isInView={isInView} /> : card.value}
                      </div>
                      <div className="text-sm text-purple-300">{card.title}</div>
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.6, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-purple-950/30 border border-purple-500/20 hover:border-amber-500/30 transition-all relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-semibold text-amber-100 mb-4 relative z-10">Recent Prompts</h3>
                <div className="space-y-3 relative z-10">
                  {[
                    'Generate marketing copy for product launch',
                    'Create video script about AI technology',
                    'Summarize quarterly business report',
                  ].map((prompt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + i * 0.12 }}
                      whileHover={{ x: 5, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                      className="p-4 rounded-xl bg-indigo-950/30 border border-purple-500/10 text-purple-200 text-sm hover:border-amber-500/30 transition-all cursor-pointer"
                    >
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 1.2 + i * 0.12, duration: 0.6 }}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-purple-600 rounded-full"
                        style={{ transformOrigin: 'left' }}
                      />
                      {prompt}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-purple-950/30 border border-purple-500/20 hover:border-amber-500/30 transition-all relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-semibold text-amber-100 mb-4 relative z-10">AI Activity</h3>
                <div className="space-y-4 relative z-10">
                  {[
                    { label: 'Content Quality', value: 95 },
                    { label: 'Creativity Score', value: 88 },
                    { label: 'Efficiency', value: 92 },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + i * 0.12 }}
                    >
                      <div className="flex justify-between text-sm text-purple-200 mb-2">
                        <span>{metric.label}</span>
                        <motion.span
                          className="text-amber-300 font-semibold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        >
                          {metric.value}%
                        </motion.span>
                      </div>
                      <div className="h-3 bg-indigo-950/50 rounded-full overflow-hidden border border-purple-500/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${metric.value}%` } : {}}
                          transition={{ duration: 1.2, delay: 1.2 + i * 0.12, ease: "easeOut" }}
                          style={{
                            boxShadow: `0 0 20px rgba(251, 191, 36, 0.6)`,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            animate={{ x: [-100, 100] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
