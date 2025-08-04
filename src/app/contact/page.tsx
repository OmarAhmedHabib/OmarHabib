'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus({ success: true, message: "⏳ Sending your message..." });

    try {
      await emailjs.sendForm(
        'service_wuqkyh2',        // ✅ Service ID
        'template_xxxxxxx',       // ✅ Template ID
        form.current,
        'user_xxxxxxxxxxx'        // ✅ Public Key
      );

      setStatus({ success: true, message: "✅ Your message has been sent successfully!" });
      form.current.reset();

    } catch (error) {
      setStatus({ success: false, message: "❌ Failed to send. Please try again later." });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#05010f] via-[#0a0f2e] to-[#03020d] text-white flex items-center justify-center px-4">
      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl w-full p-8 rounded-2xl border border-cyan-400/30 bg-black/40 backdrop-blur-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          🚀 Contact Me
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Send me a message and I’ll get back to you as soon as possible.
        </p>

        {/* ✅ Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input name="user_name" placeholder="Your Name" required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none" />
          <input type="email" name="user_email" placeholder="Your Email" required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none" />
          <textarea name="message" rows={4} placeholder="Your Message" required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"></textarea>

          <button type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            ✉️ Send Message
          </button>
        </form>

        {/* ✅ Status UI */}
        {status && (
          <div className={`mt-4 text-center font-semibold ${status.success ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </div>
        )}

        {/* ✅ Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <a href="https://wa.me/201144629507" target="_blank" className="text-green-400 hover:scale-110 transition-transform">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/omar-ahmed-124987171" target="_blank" className="text-blue-400 hover:scale-110 transition-transform">
            <FaLinkedin />
          </a>
          <a href="mailto:omarahmedhabib6@gmail.com" className="text-red-400 hover:scale-110 transition-transform">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
