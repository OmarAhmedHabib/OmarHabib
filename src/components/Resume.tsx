'use client';

import { motion } from 'framer-motion';
import { FaSkullCrossbones, FaGraduationCap, FaTrophy } from 'react-icons/fa';

export default function CartoonResume() {
  const levels = [
    {
      stage: 'Stage 1 - Work',
      icon: <FaSkullCrossbones className="text-3xl text-green-300" />,
      tasks: [
        '🎯 Frontend Dev @ CreepyTech (2022 - Now)',
        '👀 UI/UX Prank Designer @ SneakyLabs (2021 - 2022)'
      ]
    },
    {
      stage: 'Stage 2 - Education',
      icon: <FaGraduationCap className="text-3xl text-yellow-300" />,
      tasks: [
        '🎓 BSc Computer Science - Cairo Uni (2014 - 2018)',
        '📚 Game UX Certificate - SneakAcademy (2022)'
      ]
    },
    {
      stage: 'Stage 3 - Awards',
      icon: <FaTrophy className="text-3xl text-orange-300" />,
      tasks: [
        '🏆 Best Prank Developer - NFH Awards (2022)',
        '🥇 Sneakiest Coder - Dark Alley (2023)'
      ]
    }
  ];

  return (
    <section className="relative min-h-screen text-white font-[cursive] overflow-hidden p-10">
      {/* خلفية كرتونية */}
      <div className="absolute inset-0 bg-[url('/cartoon-room.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* العنوان */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-5xl text-center mb-12 text-green-400 drop-shadow-[3px_3px_0px_black]"
      >
        🎮 Omar's Sneaky Resume
      </motion.h1>

      {/* المراحل */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {levels.map((lvl, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ rotate: [-2, 2, -2, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative bg-[#2b2b2b]/80 rounded-2xl border-4 border-green-800 shadow-[0_0_15px_#1f4721] p-6 cartoon-box"
          >
            <div className="absolute -top-4 -left-4 bg-red-600 px-3 py-1 rounded-br-xl shadow-lg border-2 border-black text-xs">
              {lvl.stage}
            </div>
            <div className="text-center mb-4">{lvl.icon}</div>
            <ul className="space-y-3">
              {lvl.tasks.map((task, j) => (
                <li
                  key={j}
                  className="bg-green-900/40 border border-green-700 rounded-lg px-3 py-2 shadow-inner hover:bg-green-700/40 transition-all"
                >
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ستايل إضافي */}
      <style jsx>{`
        .cartoon-box {
          background-image: linear-gradient(145deg, #1e1e1e, #333);
          box-shadow: inset 0 0 10px #000, 0 0 10px #222;
        }
      `}</style>
    </section>
  );
}
