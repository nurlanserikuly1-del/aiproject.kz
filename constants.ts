import { Layers, Code, Eye, Cpu, Rocket } from 'lucide-react';
import { Project, Category } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "KazLLM: Қазақ тіліндегі AI моделі",
    category: "LLM",
    author: "Айдос К. & Тобы",
    description: "Мемлекеттік қызметтерге арналған, қазақ тілінің морфологиясын толық түсінетін тілдік модель.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["NLP", "Python", "Transformer"],
    status: "MVP"
  },
  {
    id: 2,
    title: "Smart Campus Vision",
    category: "Computer Vision",
    author: "Гүлназ С.",
    description: "Университет аумағындағы қауіпсіздікті және студенттердің сабаққа қатысуын бақылайтын жүйе.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    tags: ["YOLOv8", "OpenCV", "Real-time"],
    status: "Production"
  },
  {
    id: 3,
    title: "AgroTech Startup",
    category: "Startup",
    author: "Ержан & Команда",
    description: "Дрон арқылы егістік алқаптарын талдау және өнімділікті арттыру платформасы.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop",
    tags: ["Drones", "AI Analytics", "AgriTech"],
    status: "Seed Round"
  },
  {
    id: 4,
    title: "Unitree Go2 Control System",
    category: "Robotics",
    author: "Robotics Lab",
    description: "Төрт аяқты роботты күрделі рельефте басқаруға арналған жаңа алгоритм.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    tags: ["ROS2", "C++", "Navigation"],
    status: "Research"
  },
  {
    id: 5,
    title: "Legal AI Assistant",
    category: "LLM",
    author: "Заң факультетімен бірлескен",
    description: "ҚР заңнамалары бойынша автоматты кеңес беретін чат-бот.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop",
    tags: ["RAG", "LangChain", "Law"],
    status: "Prototype"
  }
];

export const CATEGORIES: Category[] = [
  { id: 'All', name: 'Барлығы', icon: Layers },
  { id: 'LLM', name: 'LLM & Generative AI', icon: Code },
  { id: 'Computer Vision', name: 'Computer Vision', icon: Eye },
  { id: 'Robotics', name: 'Robotics & IoT', icon: Cpu },
  { id: 'Startup', name: 'Startups', icon: Rocket },
];