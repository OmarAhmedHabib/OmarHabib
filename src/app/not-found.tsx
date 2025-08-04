'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 🔥 خلفية GTA نيون متحركة */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('/city-neon.gif')] bg-cover bg-center opacity-10"></div>

      {/* ⚡ نص 404 مع وميض */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-10 text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_20px_#ff00ff]"
      >
        404
      </motion.h1>

      {/* 💥 رسالة خطأ ستايل GTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-4xl font-bold text-cyan-300 drop-shadow-[0_0_10px_#00fff7] mb-4">
          YOU'RE LOST IN THE CITY
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          The page you are looking for has been stolen by the streets of Vice City...
        </p>

        {/* 🎯 زر الرجوع مع تأثير وميض */}
        <Link
          href="/"
          className="relative inline-block px-8 py-3 text-lg font-bold text-black bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg shadow-[0_0_15px_#ff00ff] hover:scale-105 hover:shadow-[0_0_25px_#ff00ff] transition-transform duration-300"
        >
          🚗 Take Me Home
        </Link>
      </motion.div>

      {/* 🌌 تأثير إضاءة GTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[300px] h-[300px] rounded-full bg-pink-500 blur-[200px] top-1/3 left-1/4"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] rounded-full bg-cyan-400 blur-[250px] bottom-10 right-1/4"
      ></motion.div>
    </main>
  );
}
