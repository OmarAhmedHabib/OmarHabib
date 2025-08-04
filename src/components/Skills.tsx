'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiMysql, SiLaravel } from 'react-icons/si';
import { GiLaurelCrown } from 'react-icons/gi';

// 🎮 الأصوات (Power-Up)
const hoverSound = typeof Audio !== 'undefined' ? new Audio('/sounds/powerup.mp3') : null;

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, xp: '950/1000' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, xp: '900/1000' },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, xp: '850/1000' },
    { name: 'JavaScript', icon: <FaJs />, level: 88, xp: '880/1000' },
    { name: 'React.js', icon: <FaReact />, level: 85, xp: '850/1000' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, xp: '920/1000' },
    { name: 'PHP', icon: <FaPhp />, level: 75, xp: '750/1000' },
    { name: 'Git', icon: <FaGitAlt />, level: 80, xp: '800/1000' },
    { name: 'GitHub', icon: <FaGithub />, level: 85, xp: '850/1000' },
    { name: 'jQuery', icon: <SiJquery />, level: 78, xp: '780/1000' },
    { name: 'Algorithms', icon: <GiLaurelCrown />, level: 70, xp: '700/1000' },
    { name: 'Laravel', icon: <SiLaravel />, level: 80, xp: '800/1000' },
    { name: 'MySQL', icon: <SiMysql />, level: 75, xp: '750/1000' },
    { name: 'WOW.js', icon: <GiLaurelCrown />, level: 65, xp: '650/1000' },
    { name: 'Animate.css', icon: <GiLaurelCrown />, level: 68, xp: '680/1000' },
    { name: 'Owl Carousel', icon: <GiLaurelCrown />, level: 72, xp: '720/1000' },
    { name: 'Framer Motion', icon: <GiLaurelCrown />, level: 90, xp: '900/1000' },
  ];

  // ⭐ حساب عدد النجوم لكل Skill
  const getStars = (level: number) => '⭐'.repeat(Math.floor(level / 20));

  // 🏆 تحديد الرتبة
  const getBadge = (level: number) => {
    if (level >= 90) return 'Legend';
    if (level >= 75) return 'Master';
    if (level >= 60) return 'Pro';
    return 'Beginner';
  };

  return (
    <section className="relative py-20 bg-[#030617] overflow-hidden">
      {/* 🌌 خلفية فضائية متحركة */}
      <div className="absolute inset-0 bg-[url('/space-bg.gif')] bg-cover opacity-20"></div>

      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Skill Galaxy
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative z-10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#141a33] to-[#0b0f1e] 
                      border border-purple-500/20 shadow-lg hover:shadow-purple-500/40 
                      hover:-translate-y-2 transition-all overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => hoverSound?.play()}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-30 transition"></div>

            {/* Icon */}
            <motion.div
              className="text-5xl mb-4 text-purple-400 drop-shadow-md"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              {skill.icon}
            </motion.div>

            {/* اسم التقنية */}
            <h3 className="text-xl font-bold text-white">{skill.name}</h3>

            {/* ⭐ نجوم */}
            <p className="text-yellow-400 text-lg">{getStars(skill.level)}</p>

            {/* 🏆 رتبة */}
            <span className="inline-block px-3 py-1 mt-1 mb-2 rounded-full bg-purple-800/50 text-purple-300 text-xs border border-purple-400/40">
              {getBadge(skill.level)}
            </span>

            {/* XP */}
            <p className="text-sm text-gray-300 mb-2">XP: <span className="text-green-400">{skill.xp}</span></p>

            {/* شريط الطاقة */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
