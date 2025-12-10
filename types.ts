import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  author: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}