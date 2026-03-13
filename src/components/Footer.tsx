import { motion } from 'framer-motion';
import { Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'API', 'Integrations'],
    Tools: ['Creator AI', 'Business AI', 'Knowledge AI', 'Startup AI'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Documentation', 'Status'],
  };

  return (
    <footer className="relative py-20 px-6 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-purple-200 bg-clip-text text-transparent">
                Shrivaya AI
              </span>
            </motion.div>
            <p className="text-purple-300 mb-6 leading-relaxed">
              Divine intelligence for the future. Empowering creators, businesses, and innovators worldwide.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-indigo-900/50 border border-purple-500/20 flex items-center justify-center text-purple-300 hover:text-amber-300 hover:border-amber-500/40 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items], index) => (
            <div key={category}>
              <h3 className="text-amber-100 font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-purple-300 hover:text-amber-300 transition-colors inline-block"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-400 text-sm">
              © 2024 Shrivaya AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-purple-300 hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-purple-300 hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-purple-300 hover:text-amber-300 transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </footer>
  );
}
