'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '@/components/ParticlesBackground';
import TerminalModal from '@/components/TerminalModal';
import Image from 'next/image';

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
      {/* 🌌 Background */}
      <div 
        className="absolute inset-0 z-0 transition-transform"
        style={{ transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f2c] to-[#1a1a3a]" />
        <ParticlesBackground />
      </div>

      {/* 🛸 Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-8 w-11/12 md:w-2/3 lg:w-1/2 rounded-3xl 
                   border border-cyan-400/30 bg-black/30 backdrop-blur-xl 
                   shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
      >
        {/* Avatar */}
        <div className="relative mb-6">
          <Image 
            src="/profile.jpg" 
            width={140} 
            height={140} 
            alt="Omar Ahmed Habib" 
            className="rounded-full border-4 border-cyan-400/50 shadow-[0_0_25px_#06b6d4]"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan" />
        </div>

        {/* Name */}
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-cyan-300 tracking-wide glitch-text mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Omar Ahmed Habib
        </motion.h1>

        {/* Typing */}
        {isClient && (
          <TypeAnimation
            sequence={[
              '🚀 FrontEnd Developer', 1500,
              '🛠️ Code Alchemist', 1500,
              '🎮 Tech Explorer', 1500,
              '💻 Full Stack Enthusiast', 1500,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="text-xl md:text-2xl font-semibold text-purple-300"
          />
        )}

        {/* Bio */}
        <p className="text-gray-300 mt-4 max-w-lg mx-auto">
          Coding the future with <span className="text-cyan-400">creativity</span> and 
          <span className="text-purple-400"> innovation</span>.  
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a 
            href="/Omar_Habib_CV.pdf" 
            download
            className="px-6 py-3 rounded-lg bg-cyan-500/30 border border-cyan-400 text-white 
                       shadow-lg hover:shadow-[0_0_20px_#06b6d4] transition-all"
          >
            📄 CV
          </a>
          <button 
            onClick={() => setShowTerminal(true)}
            className="px-6 py-3 rounded-lg bg-purple-500/20 border border-purple-400 
                       text-white hover:bg-purple-600/30 hover:shadow-[0_0_15px_#a855f7] transition-all"
          >
            🖥️ Open Terminal
          </button>
        </div>
      </motion.div>

      {/* Terminal Modal */}
      {showTerminal && <TerminalModal onClose={() => setShowTerminal(false)} />}
    </header>
  );
}
