'use client';

import React from 'react';  // <= هنا الاستيراد المفقود
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaTools, FaDownload, FaPlay, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: <FaHome size={20} /> },
    { name: 'About', href: '/about', icon: <FaUser size={20} /> },
    { name: 'Projects', href: '/projects', icon: <FaCode size={20} /> },
    { name: 'Skills', href: '/skills', icon: <FaTools size={20} /> },
    { name: 'Resume', href: '/resume', icon: <FaDownload size={20} /> },
    { name: 'Demo', href: '/demos', icon: <FaPlay size={20} className="text-green-400" /> }, 
    { name: 'Contact', href: '/contact', icon: <FaEnvelope size={20} className="text-pink-400" /> },
  ];

  return (
    <>
      {/* ✅ Top Bar (Always Visible) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/80 to-cyan-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-center md:justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Omar A. Habib
          </Link>

          {/* ✅ Desktop Links */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-white/20 text-cyan-300'
                    : link.name === 'Demo'
                      ? 'text-green-400 hover:bg-green-600/10'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-cyan-900 backdrop-blur-md border-t border-white/10">
        <div className="flex justify-around py-3">
          {navLinks
            .filter(link => link.name !== 'Resume' && link.name !== 'Demo')
            .map((link) => {
              // نزيد حجم الايقونات في الموبايل
              const biggerIcon = React.cloneElement(link.icon, { size: 26 });

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex flex-col items-center text-xs transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-cyan-300'
                      : 'text-white'
                  }`}
                >
                  {biggerIcon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
