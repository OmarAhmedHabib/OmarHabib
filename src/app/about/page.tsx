'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground'; // لو عندك particles
import { FaDownload } from 'react-icons/fa';

const typingSpeed = 30;

export default function AboutPage() {
  const [displayText, setDisplayText] = useState('');
  const fullText = `
> whoami
Omar Ahmed Habib

> bio
Full Stack Developer | UI/UX Enthusiast | Problem Solver

> journey
Started coding at Cairo University 🎓, built countless projects 🚀, and mastered modern web technologies.

> philosophy
Clean Code ✨ + Great UX 🎯 = Perfect App

> download_resume
[Click here to download resume]
`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-green-400 font-mono p-6 overflow-hidden">
      
      {/* خلفية Matrix Rain بسيطة */}
      <div className="absolute inset-0 z-0 opacity-20">
        <ParticlesBackground />
      </div>

      {/* شاشة تيرمنال */}
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto bg-black/80 border border-green-500 rounded-lg p-6 shadow-lg shadow-green-500/20 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <pre className="whitespace-pre-wrap text-green-400 text-lg leading-relaxed">
          {displayText}
          <span className="animate-pulse">█</span>
        </pre>
      </motion.div>

      {/* زر تحميل السي في */}
      <motion.div 
        className="relative z-10 text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-green-500 text-black font-bold rounded-lg shadow-lg hover:bg-green-400 hover:shadow-green-400/50 transition"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </a>
      </motion.div>
    </main>
  );
}
