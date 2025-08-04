'use client';

import { motion } from 'framer-motion';
import Demos from '@/components/Demos';

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experiments & Tools
        </motion.h1>
        
        <Demos />
      </div>
    </main>
  );
}
