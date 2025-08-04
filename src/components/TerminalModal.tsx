'use client';

import React, { useState, useRef } from 'react';

interface TerminalModalProps {
  onClose: () => void;
}

const TerminalModal: React.FC<TerminalModalProps> = ({ onClose }) => {
  const [history, setHistory] = useState<string[]>(['Welcome to Omar Terminal! Type "help" to start.']);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    let output = '';
    switch (cmd.toLowerCase()) {
      case 'help':
        output = 'Available commands: about, skills, clear, exit';
        break;
      case 'about':
        output = '👨‍💻 Omar Ahmed Habib - Frontend Developer passionate about Next.js & Tailwind!';
        break;
      case 'skills':
        output = '🔥 Skills: React, Next.js, Tailwind, Node.js, TypeScript';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        onClose();
        return;
      default:
        output = `❌ Command not found: ${cmd}`;
    }
    setHistory((prev) => [...prev, `> ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-black border border-green-400 rounded-lg p-4 font-mono text-green-400 shadow-[0_0_20px_#22c55e]">
        <div className="flex justify-between mb-2">
          <span className="text-green-300">💻 Omar Terminal</span>
          <button onClick={onClose} className="text-red-400 hover:text-red-600">✖</button>
        </div>

        <div
          ref={terminalRef}
          className="h-64 overflow-y-auto bg-black p-2 border border-green-500 mb-2"
        >
          {history.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{line}</div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex">
          <span className="text-green-400 pr-2">{'>'}</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-black text-green-400 outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalModal;
