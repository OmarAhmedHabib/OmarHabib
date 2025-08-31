'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaTools, FaDownload, FaPlay, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t('home'), href: '/', icon: <FaHome size={20} /> },
    { name: t('about'), href: '/about', icon: <FaUser size={20} /> },
    { name: t('projects'), href: '/projects', icon: <FaCode size={20} /> },
    { name: t('skills'), href: '/skills', icon: <FaTools size={20} /> },
    { name: t('resume'), href: '/resume', icon: <FaDownload size={20} /> },
    { name: t('demo'), href: '/demos', icon: <FaPlay size={20} className="text-green-400" /> },
    { name: t('contact'), href: '/contact', icon: <FaEnvelope size={20} className="text-pink-400" /> },
  ];

  return (
    <>
      {/* ✅ Top Bar (Always Visible) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/80 to-cyan-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-center md:justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            {t('brand')}
          </Link>

          {/* ✅ Desktop Links */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-white/20 text-cyan-300'
                    : link.name === t('demo')
                      ? 'text-green-400 hover:bg-green-600/10'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}

            {/* Dark/Light Mode Toggle */}
            {mounted && (
              <button
                aria-label="Toggle Dark Mode"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            )}

            {/* Language Switcher */}
            <select
              aria-label="Select Language"
              onChange={(e) => {
                const locale = e.target.value;
                const url = new URL(window.location.href);
                url.pathname = `/${locale}${url.pathname.substring(3)}`;
                window.location.href = url.toString();
              }}
              defaultValue={pathname.startsWith('/ar') ? 'ar' : 'en'}
              className="ml-4 bg-transparent border border-white/20 rounded-md text-white px-2 py-1"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-cyan-900 backdrop-blur-md border-t border-white/10">
        <div className="flex justify-around py-3">
          {navLinks
            .filter(link => link.name !== t('resume') && link.name !== t('demo'))
            .map((link) => {
              // Increase icon size on mobile
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
