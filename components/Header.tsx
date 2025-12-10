import React, { useState } from 'react';
import { Cpu, Search, Menu, X, ClipboardCheck } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Cpu size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            aiproject.kz
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-200">Басты бет</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">Жобалар</a>
          <a href="#epicfolio" className="hover:text-blue-400 transition-colors duration-200 text-yellow-400">EPIC FOLIO</a>
          <a href="#judging" className="hover:text-blue-400 transition-colors duration-200 text-green-400 flex items-center gap-1">
            <ClipboardCheck size={14} /> Бағалау жүйесі
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-slate-800 rounded-full transition-colors duration-200 text-slate-400 hover:text-white">
            <Search size={20} />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
            Кіру / Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4 animate-in slide-in-from-top-2">
          <a href="#home" className="block text-slate-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Басты бет</a>
          <a href="#projects" className="block text-slate-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Жобалар</a>
          <a href="#epicfolio" className="block text-yellow-400 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(false)}>EPIC FOLIO</a>
          <a href="#judging" className="block text-green-400 hover:text-green-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Бағалау жүйесі</a>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-semibold">Кіру</button>
        </div>
      )}
    </header>
  );
};

export default Header;