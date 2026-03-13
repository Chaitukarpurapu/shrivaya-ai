import { motion, useInView } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';

export default function AIDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsGenerating(true);
    setResponse('');

    setTimeout(() => {
      const demoResponse = `Based on your request "${input}", Shrivaya AI suggests:\n\n✨ Leveraging divine intelligence to provide you with innovative solutions\n🚀 Analyzing patterns across multiple dimensions\n🎯 Generating personalized recommendations\n💡 Optimizing for maximum impact and creativity\n\nThis is a demonstration of our AI capabilities. Sign up to experience the full power of Shrivaya AI!`;

      let currentText = '';
      const words = demoResponse.split(' ');
      let wordIndex = 0;

      const interval = setInterval(() => {
        if (wordIndex < words.length) {
          currentText += words[wordIndex] + ' ';
          setResponse(currentText);
          wordIndex++;
        } else {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 50);
    }, 500);
  };

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-purple-200 bg-clip-text text-transparent">
            Experience the Power
          </h2>
          <p className="text-xl text-purple-300">
            Try our AI assistant right now
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-indigo-900/80 to-purple-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Shrivaya AI anything..."
                  className="w-full px-6 py-5 bg-indigo-950/50 border border-purple-500/30 rounded-2xl text-white placeholder-purple-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 pr-14"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/50"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </form>

            {(response || isGenerating) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-indigo-950/30 rounded-2xl border border-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={isGenerating ? { rotate: 360 } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 flex items-center justify-center"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-amber-300 font-semibold mb-2">Shrivaya AI</div>
                    <div className="text-purple-100 whitespace-pre-wrap leading-relaxed">
                      {response}
                      {isGenerating && (
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-amber-400 ml-1"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
