import React from 'react';
import { User, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-white z-10 border border-slate-700/50">
          {project.status}
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-blue-400 font-semibold mb-2 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700/50">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300">
              <User size={12} />
            </div>
            <span className="text-xs text-slate-300 font-medium">{project.author}</span>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors" aria-label="View Project">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;