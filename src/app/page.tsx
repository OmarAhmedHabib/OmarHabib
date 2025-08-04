'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      
      {/* Skills Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Skills />
      </motion.section>
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate Full Stack Developer with expertise in creating modern, 
              responsive web applications. With a strong foundation in both frontend and 
              backend technologies, I focus on building seamless user experiences with 
              clean, efficient code.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
                <p className="text-gray-300">
                  Creating responsive, interactive UIs with React, Next.js, and modern CSS frameworks.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
                <p className="text-gray-300">
                  Building robust APIs and server-side applications with Node.js and databases.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Full Stack</h3>
                <p className="text-gray-300">
                  Bridging frontend and backend to create complete, scalable web applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm currently available for freelance work and open to new opportunities. 
            Feel free to reach out if you'd like to collaborate!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="/resume" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
