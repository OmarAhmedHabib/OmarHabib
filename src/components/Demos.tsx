'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaChartLine, FaPalette } from 'react-icons/fa';

const Demos = () => {
  const demos = [
    {
      id: 1,
      title: 'AI Chatbot',
      description: 'An intelligent chatbot using natural language processing.',
      icon: <FaRobot className="text-4xl text-cyan-300 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_10px_#00ffff]" />,
      link: '#',
    },
    {
      id: 2,
      title: 'Data Visualization',
      description: 'Interactive charts and graphs for data analysis.',
      icon: <FaChartLine className="text-4xl text-purple-400 group-hover:rotate-6 transition-transform duration-300 drop-shadow-[0_0_10px_#b388ff]" />,
      link: '#',
    },
    {
      id: 3,
      title: 'Color Palette Generator',
      description: 'Generate beautiful color palettes for your projects.',
      icon: <FaPalette className="text-4xl text-pink-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_#ff80ab]" />,
      link: '#',
    },
    {
      id: 4,
      title: 'Code Snippet Manager',
      description: 'Organize and search your code snippets efficiently.',
      icon: <FaCode className="text-4xl text-green-400 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-[0_0_10px_#00ff99]" />,
      link: '#',
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* 🌌 خلفية فضائية (نجوم متحركة) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,50,0.7),black)]"></div>
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover animate-[starMove_60s_linear_infinite] opacity-40"></div>

      {/* 💫 تأثير Nebula / غبار كوني */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 mix-blend-screen"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 drop-shadow-[0_0_20px_#00ffff]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Space Demos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {demos.map((demo, index) => (
            <motion.a
              key={demo.id}
              href={demo.link}
              className="group relative block rounded-2xl border border-cyan-400/30 p-6 shadow-[0_0_20px_rgba(0,255,255,0.1)] 
                         bg-gradient-to-br from-[#0f172a]/50 to-[#1e293b]/50 backdrop-blur-lg
                         hover:border-cyan-400 hover:shadow-[0_0_40px_#00ffff80] transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.08, rotateY: 5 }}
            >
              {/* ✨ تأثير Hologram Glow داخلي */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-40 blur-2xl transition duration-700"></div>

              {/* ⚡ Glitch Lines عند Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[linear-gradient(transparent_90%,rgba(0,255,255,0.3)_95%)] bg-[length:4px_4px] animate-pulse"></div>

              <div className="flex items-start relative z-10">
                <div className="mr-4">{demo.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300">{demo.title}</h3>
                  <p className="text-gray-300">{demo.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 🔥 Animation Keyframes */}
      <style jsx>{`
        @keyframes starMove {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }
      `}</style>
    </section>
  );
};

export default Demos;
