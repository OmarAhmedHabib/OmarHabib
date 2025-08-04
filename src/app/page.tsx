'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden font-mono bg-black">
      
      {/* 🌌 Nebula & Grid Background */}
      <div className="absolute inset-0 bg-[url('/nebula.gif')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.1)_1px,transparent_1px)] [background-size:30px_30px] animate-pulse"></div>

      {/* 🛸 Glowing Border Frame */}
      <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-lg shadow-[inset_0_0_80px_rgba(0,255,255,0.2)] pointer-events-none"></div>

      {/* 🛸 Sci-Fi Header */}
      <Header />

      {/* 🛠️ Holographic Skills */}
      <motion.section 
        className="relative py-28 px-6 z-10 bg-gradient-to-b from-black/30 to-black/60 backdrop-blur-lg border-t border-cyan-400/10"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
          🧬 HOLOGRAPHIC SKILLS
        </h2>
        <Skills />
      </motion.section>

      {/* 🔮 Cyber Projects */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-purple-900/10 to-black/40">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_10px_#ff00ff]">
          🔮 CYBER PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: 'Neon E-Commerce', img: '/projects/Neon-E-Commerce.png', desc: 'Sci-fi futuristic shop with holographic UI.' },
            { title: 'AI CyberBot', img: '/projects/AI-CyberBot.png', desc: 'Neural network chatbot with real-time hologram.' },
            { title: 'Quantum Portfolio', img: '/projects/Quantum-Portfolio.png', desc: '3D animated portfolio in a cyber world.' }
          ].map((p, i) => (
            <motion.div key={i} className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:scale-105 transition duration-300 overflow-hidden"
              whileHover={{ rotate: 1 }}>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.1)_50%)] animate-scan"></div>
              <img src={p.img} alt={p.title} className="rounded-lg mb-4 w-full h-48 object-cover opacity-80 hover:opacity-100 transition" />
              <h3 className="text-2xl font-bold text-cyan-300">{p.title}</h3>
              <p className="text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧬 Contact – Spaceship Terminal */}
      <section className="relative py-28 px-4 bg-gradient-to-b from-black to-purple-950/20 text-center border-t border-purple-500/10">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]">
          🛰️ INITIATE CONTACT
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">Engage communication protocol and send encrypted message to the command center. 🚀</p>
        <form className="max-w-xl mx-auto bg-black/60 p-6 rounded-2xl border border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
          <input type="text" placeholder="Commander ID" className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-cyan-400/20 text-white focus:ring-2 focus:ring-cyan-400" />
          <input type="email" placeholder="Transmission Frequency" className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-cyan-400/20 text-white focus:ring-2 focus:ring-cyan-400" />
          <textarea placeholder="Enter encrypted message..." rows={4} className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-cyan-400/20 text-white"></textarea>
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold shadow-[0_0_20px_#06b6d4] hover:scale-105 transition-all">
            🚀 Send Transmission
          </button>
        </form>
      </section>

      {/* ✅ Resume Call to Action */}
      <motion.section className="relative py-20 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 drop-shadow-[0_0_10px_#22d3ee]">
          ⚡ Deploy Resume Protocol
        </h2>
        <a href="/resume.pdf" download="resume.pdf"
          className="px-10 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-green-500 to-cyan-500 shadow-[0_0_20px_#06b6d4] hover:scale-110 transition-all duration-300">
          📄 Download Resume
        </a>
      </motion.section>
    </main>
  );
}
