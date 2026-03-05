import { 
  Building2, 
  Sparkles, 
  Wrench, 
  Construction, 
  Key, 
  ShieldCheck, 
  Clock, 
  Truck, 
  UserCheck 
} from 'lucide-react';
import { Service, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Services', href: 'services' },
  { label: 'About Us', href: 'about' },
  { label: 'Reviews', href: 'reviews' },
  { label: 'Contact', href: 'contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'common-area',
    title: 'Common Area Cleaning',
    description: 'Stairwells, corridors, entrance halls, lifts, and shared facilities maintained to the highest standards.',
    icon: Building2,
    details: [
      'Stairwells & corridors',
      'Entrance halls & lobbies',
      'Lifts & handrails sanitization',
      'Bin stores & shared facilities',
      'Window cleaning (internal)'
    ],
    idealFor: ['Managing Agents', 'Residential Blocks', 'Commercial Offices']
  },
  {
    id: 'property-recovery',
    title: 'Property Recovery Cleaning',
    description: 'Restoring neglected, misused, or vacant properties to inspection-ready condition quickly and efficiently.',
    icon: Sparkles,
    details: [
      'Deep cleaning of neglected properties',
      'Biohazard & waste removal',
      'Odor neutralization',
      'Full property sanitization',
      'Detailed condition reporting'
    ],
    idealFor: ['Landlords', 'Local Authorities', 'Housing Associations']
  },
  {
    id: 'reactive-maintenance',
    title: 'Reactive Maintenance',
    description: 'Responsive repair and maintenance works to keep your properties functional and safe.',
    icon: Wrench,
    details: [
      'Emergency repairs',
      'General maintenance tasks',
      'Plumbing & electrical fixes',
      'Lock changes',
      'Minor structural repairs'
    ],
    idealFor: ['Property Managers', 'Commercial Owners', 'Developers']
  },
  {
    id: 'refurbishment',
    title: 'Refurbishment Cleaning',
    description: 'Specialist post-build and post-refurbishment deep cleaning to remove all traces of construction.',
    icon: Construction,
    details: [
      'Post-construction dust removal',
      'Paint & plaster splatter removal',
      'Window & frame deep cleaning',
      'Floor scrubbing & polishing',
      'Final sparkle clean'
    ],
    idealFor: ['Developers', 'Interior Designers', 'Construction Firms']
  },
  {
    id: 're-letting',
    title: 'Re-letting Preparation',
    description: 'Getting properties tenant-ready between lets with a comprehensive deep clean and refresh.',
    icon: Key,
    details: [
      'End-of-tenancy deep clean',
      'Kitchen & appliance cleaning',
      'Carpet & upholstery cleaning',
      'Minor touch-ups',
      'Inventory-ready finish'
    ],
    idealFor: ['Letting Agents', 'Private Landlords', 'Relocation Companies']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Bernadette Porter',
    role: 'Real Estate Agent',
    content: 'Excellent support... responsive and professional... handled all enquiries promptly... very satisfied... highly recommend.',
    rating: 5
  },
  {
    id: '2',
    name: 'Melissa Vera',
    role: 'Building Manager',
    content: 'Really happy... common areas always clean and tidy... consistent standard maintained.',
    rating: 5
  }
];

export const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: UserCheck, label: 'DBS Checked' },
  { icon: Truck, label: 'Branded Vehicles' },
  { icon: Clock, label: '24/7 Availability' }
];

export const STATS = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Availability', value: '24/7' },
  { label: 'Enquiries Answered', value: '100%' },
  { label: 'Average Rating', value: '4.9★' }
];
