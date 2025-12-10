import React from 'react';
import { Cpu, Globe, Layers } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                 <Cpu size={14} className="text-white" />
               </div>
               <span className="text-lg font-bold text-white">aiproject.kz</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Қорқыт Ата атындағы Қызылорда университетінің Жасанды Интеллект Институтының ресми жобалар платформасы.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Платформа</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Жобалар</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Стартаптар</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">EPIC FOLIO</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Рейтинг</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Ресурстар</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Студенттерге</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ғалымдарға</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Құжаттама</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Байланыс</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Kyzylorda, Kazakhstan</li>
              <li>info@aiproject.kz</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors"><Globe size={20}/></a>
                <a href="#" className="hover:text-white transition-colors"><Layers size={20}/></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 AI Institute, Korkyt Ata University. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;