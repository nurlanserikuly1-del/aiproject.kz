import React, { useState } from 'react';
import { ArrowRight, Award, Code, Globe, ExternalLink, ClipboardCheck, BarChart3, Eye } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { PROJECTS_DATA, CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filtering Logic
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section id="home" className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
          
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 mb-8 shadow-lg shadow-black/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">Қорқыт Ата AI Институты</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Болашақ технологиялары <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Осы жерде жасалады
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Студенттер мен ғалымдардың үздік AI шешімдері, инновациялық стартаптары және ғылыми жобаларының бірыңғай платформасы.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#projects" className="w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white transition-all duration-200 flex items-center justify-center shadow-lg shadow-blue-600/25 group">
                Жобаларды көру
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full md:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold text-slate-200 transition-colors duration-200">
                Студенттерге (Submit Project)
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-800 py-8 bg-slate-950/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-slate-500">Белсенді жобалар</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-sm text-slate-500">Студенттер</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-slate-500">Сәтті стартаптар</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-500">Инновация</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- EPIC FOLIO SECTION --- */}
        <section id="epicfolio" className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 p-6 max-w-lg mx-auto md:mr-auto">
                   {/* Mock UI for Epic Folio */}
                   <div className="flex items-center space-x-4 mb-6">
                     <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 p-1 shrink-0">
                        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xl">
                          AI
                        </div>
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-white">Студент Профилі</h3>
                       <p className="text-slate-400 text-sm">AI Engineer Level 4</p>
                     </div>
                   </div>
                   <div className="space-y-3">
                     <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-3/4"></div>
                     </div>
                     <div className="flex justify-between text-xs text-slate-400">
                       <span>Python</span>
                       <span>Advanced</span>
                     </div>
                     <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="bg-slate-700/50 p-2 rounded text-center text-xs border border-slate-600/30">
                          <Award className="w-4 h-4 mx-auto mb-1 text-yellow-400" />
                          Hackathon Winner
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded text-center text-xs border border-slate-600/30">
                          <Code className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                          15 Repos
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded text-center text-xs border border-slate-600/30">
                          <Globe className="w-4 h-4 mx-auto mb-1 text-green-400" />
                          Top Rated
                        </div>
                     </div>
                   </div>
                 </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-bold mb-4">
                  СТУДЕНТТЕР ҮШІН
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  EPIC FOLIO: Студенттің Цифрлық Төлқұжаты
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Әрбір студенттің академиялық және практикалық даму траекториясы бір жерде. 
                  Жобалар, сертификаттар, хакатондардағы жеңістер және hard skills картасы.
                  Жұмыс берушілер үшін дайын резюме.
                </p>
                <button className="text-yellow-400 font-semibold flex items-center hover:text-yellow-300 transition-colors">
                  Толығырақ танысу <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- EVALUATION SYSTEM SECTION --- */}
        <section id="judging" className="py-20 relative bg-slate-950 border-y border-slate-800 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-emerald-900/10 pointer-events-none" />
           <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                 {/* Right side: Visual/Icon */}
                 <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 blur-[60px] rounded-full"></div>
                      <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-auto">
                         <div className="flex items-center justify-between mb-6">
                            <h4 className="font-bold text-slate-200">Live Scoring</h4>
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded animate-pulse font-bold">● LIVE</span>
                         </div>
                         <div className="space-y-4">
                            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex justify-between items-center shadow-sm">
                               <span className="text-sm font-medium text-slate-200">Team "Algorithmic"</span>
                               <span className="font-bold text-green-400">9.8/10</span>
                            </div>
                            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex justify-between items-center shadow-sm">
                               <span className="text-sm font-medium text-slate-200">Team "Visionary"</span>
                               <span className="font-bold text-green-400">9.5/10</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                               <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-md shadow-green-600/20">
                                  Rate Project
                               </button>
                               <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-bold py-2.5 rounded-lg transition-colors">
                                  View Leaderboard
                               </button>
                            </div>
                         </div>
                      </div>
                    </div>
                 </div>

                 {/* Left side: Content */}
                 <div className="w-full md:w-1/2">
                    <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold mb-4 flex items-center gap-2 w-fit">
                       <ClipboardCheck size={14} />
                       ТӨРЕШІЛЕРГЕ АРНАЛҒАН
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                       Хакатондарды Бағалау Жүйесі
                    </h2>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                       Біздің институтта әзірленген, жарыстар мен хакатондарды автоматты түрде бағалауға арналған кәсіби платформа. 
                       Қазылар алқасы үшін ыңғайлы интерфейс, нақты уақыттағы рейтинг және толық аналитика.
                    </p>
                    <ul className="grid grid-cols-1 gap-4 mb-8">
                       <li className="flex items-center text-slate-300 text-sm">
                          <BarChart3 className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                          Нақты уақыт режиміндегі нәтижелер (Real-time Leaderboard)
                       </li>
                       <li className="flex items-center text-slate-300 text-sm">
                          <ClipboardCheck className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                          Критерийлер бойынша автоматты есептеу
                       </li>
                       <li className="flex items-center text-slate-300 text-sm">
                          <Eye className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                          Төрешілердің бағалау тарихының ашықтығы
                       </li>
                    </ul>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-green-600/20 flex items-center group w-full md:w-auto justify-center">
                       Бағалау жүйесіне өту <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* --- PROJECTS CATALOG --- */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Институт Жобалары</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Студенттеріміздің соңғы жаңалықтары мен зерттеулері</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
               <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
                 <p className="text-slate-500 text-lg">Бұл категорияда әзірге жобалар жоқ.</p>
                 <button 
                  onClick={() => setActiveCategory('All')} 
                  className="mt-4 text-blue-400 hover:text-blue-300 font-medium text-sm"
                 >
                   Барлық жобаларды қарау
                 </button>
               </div>
            )}
            
            <div className="text-center mt-12">
              <button className="px-8 py-3.5 border border-slate-700 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200">
                Барлық жобаларды қарау
              </button>
            </div>
          </div>
        </section>
        
        {/* --- CALL TO ACTION --- */}
        <section className="py-20 relative overflow-hidden bg-blue-900/10">
          <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Жобаңыз бар ма?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
              Егер сізде дайын AI шешім немесе стартап идея болса, оны платформаға жүктеп, EPIC FOLIO портфолиоңызды толықтырыңыз.
            </p>
            <button className="bg-white text-blue-950 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-xl shadow-blue-900/20 hover:shadow-blue-900/30 transform hover:-translate-y-1">
              Жобаны ұсыну / Submit Project
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;