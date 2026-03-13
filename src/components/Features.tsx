import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, Zap, Brain, Rocket, Video, FileText, Hash, Image, TrendingUp, MessageSquare, Users, BarChart3, BookOpen, Lightbulb, Briefcase } from 'lucide-react';

interface FeatureCard {
  title: string;
  icon: React.ReactNode;
  tools: string[];
  gradient: string;
}

const features: FeatureCard[] = [
  {
    title: 'Creator AI',
    icon: <Video className="w-8 h-8" />,
    tools: ['Video Ideas', 'Scripts', 'Captions', 'Thumbnails', 'Viral Topics'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Business AI',
    icon: <Zap className="w-8 h-8" />,
    tools: ['Marketing Posts', 'Ad Copy', 'Customer Replies', 'Sales Scripts'],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Knowledge AI',
    icon: <Brain className="w-8 h-8" />,
    tools: ['Learning Paths', 'Summaries', 'Q&A Assistant'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Startup AI',
    icon: <Rocket className="w-8 h-8" />,
    tools: ['Business Ideas', 'Plans', 'Market Research', 'Brand Names'],
    gradient: 'from-lime-500 to-green-600',
  },
];

function FeatureCardComponent({ card, index }: { card: FeatureCard; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl blur-xl" />

        <motion.div
          className={`relative h-full bg-gradient-to-br ${card.gradient} rounded-2xl p-8 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl`}
          animate={isHovered ? { borderColor: 'rgba(255, 255, 255, 0.3)' } : {}}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0"
            animate={isHovered ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <motion.div
            className="relative z-10"
            animate={isHovered ? { scale: 1.1 } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="inline-block p-4 rounded-xl bg-white/10 backdrop-blur-sm mb-6"
              animate={isHovered ? { rotate: 10 } : {}}
            >
              <div className="text-white">{card.icon}</div>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>

            <div className="space-y-3">
              {card.tools.map((tool, idx) => (
                <motion.div
                  key={tool}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + idx * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-white"
                    animate={isHovered ? { scale: 1.5 } : {}}
                  />
                  <span className="text-white/80 font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button
            className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isHovered ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : {}}
          >
            Explore
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-amber-300 text-sm font-semibold">Powerful AI Modules</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-purple-200 bg-clip-text text-transparent">
            Unlock Divine Intelligence
          </h2>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Choose from our suite of AI-powered tools designed for creators, businesses, and innovators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCardComponent key={feature.title} card={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">Full Tool Suite</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Video className="w-6 h-6" />, label: 'Video Generation' },
              { icon: <FileText className="w-6 h-6" />, label: 'Script Writing' },
              { icon: <Hash className="w-6 h-6" />, label: 'Hashtag Pro' },
              { icon: <Image className="w-6 h-6" />, label: 'Thumbnail AI' },
              { icon: <TrendingUp className="w-6 h-6" />, label: 'Trend Finder' },
              { icon: <MessageSquare className="w-6 h-6" />, label: 'Ad Copywriting' },
              { icon: <Users className="w-6 h-6" />, label: 'Customer Service' },
              { icon: <BarChart3 className="w-6 h-6" />, label: 'Analytics' },
              { icon: <BookOpen className="w-6 h-6" />, label: 'Research' },
              { icon: <Brain className="w-6 h-6" />, label: 'Learning Paths' },
              { icon: <Lightbulb className="w-6 h-6" />, label: 'Brainstorm' },
              { icon: <Briefcase className="w-6 h-6" />, label: 'Business Plans' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + idx * 0.08 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-purple-500/20 hover:border-amber-500/40 transition-all cursor-pointer group"
              >
                <motion.div
                  className="text-amber-300 mb-2 group-hover:text-amber-200 transition-colors"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: 'center' }}
                >
                  {item.icon}
                </motion.div>
                <div className="text-sm text-purple-200 group-hover:text-amber-200 transition-colors font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
