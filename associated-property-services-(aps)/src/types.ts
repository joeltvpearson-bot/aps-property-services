import { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  idealFor: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};

export type NavItem = {
  label: string;
  href: string;
};
