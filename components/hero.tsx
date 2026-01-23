'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(at 20% 50%, rgba(99, 102, 241, 0.2) 0px, transparent 50%)',
            'radial-gradient(at 80% 50%, rgba(34, 211, 238, 0.2) 0px, transparent 50%)',
            'radial-gradient(at 20% 50%, rgba(99, 102, 241, 0.2) 0px, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full"
      >
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white whitespace-nowrap"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            I build scalable, clean web experiences
          </motion.h1>
        </div>
        <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto">
          React-focused developer crafting fast, accessible, elegant UI.
        </p>
      </motion.div>
    </section>
  );
}
