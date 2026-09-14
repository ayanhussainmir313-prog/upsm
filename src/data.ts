import { GalleryItem, StatItem, FeatureCard, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery & Events', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS: StatItem[] = [
  {
    id: 'students',
    value: '350+',
    label: 'Students',
    sublabel: 'Enrolled in Primary to SSC',
    iconName: 'Users',
  },
  {
    id: 'teachers',
    value: 'Qualified',
    label: 'Teachers',
    sublabel: 'Dedicated & Experienced Faculty',
    iconName: 'GraduationCap',
  },
  {
    id: 'education',
    value: 'Quality',
    label: 'Education',
    sublabel: '100% FBISE Board Pass Rate',
    iconName: 'Award',
  },
  {
    id: 'community',
    value: 'Strong',
    label: 'Community',
    sublabel: 'Parents & Nagar Valley Trust',
    iconName: 'HeartHandshake',
  },
];

export const ABOUT_CARDS: FeatureCard[] = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence',
    description:
      'Rigorous curriculum adhering to national standards and Federal Board examinations, consistently achieving outstanding results in Minapin Nagar.',
    iconName: 'BookOpenCheck',
    tag: 'Core Focus',
  },
  {
    id: 'character-building',
    title: 'Character Building',
    description:
      'Instilling moral integrity, respect, empathy, and ethical leadership grounded in community heritage and universal human values.',
    iconName: 'ShieldCheck',
    tag: 'Values First',
  },
  {
    id: 'student-development',
    title: 'Student Development',
    description:
      'Fostering self-confidence, critical thinking, public speech, and social responsibility to nurture well-rounded, capable leaders.',
    iconName: 'Sparkles',
    tag: 'Holistic Growth',
  },
  {
    id: 'qualified-teachers',
    title: 'Qualified Teachers',
    description:
      'Trained educators passionate about modern pedagogical methods, regular mentoring, and individualized student academic guidance.',
    iconName: 'UserCheck',
    tag: 'Dedicated Faculty',
  },
];

export const WHY_CHOOSE_ITEMS: FeatureCard[] = [
  {
    id: 'why-quality',
    title: 'Quality Education',
    description:
      'Comprehensive curriculum designed to bridge rural-urban divides, fostering deep conceptual understanding and competitive examination performance.',
    iconName: 'Compass',
  },
  {
    id: 'why-teachers',
    title: 'Experienced Teachers',
    description:
      'Professional faculty undergoing continuous teaching workshops and Uswa Education System master training to uphold modern instructional standards.',
    iconName: 'Briefcase',
  },
  {
    id: 'why-character',
    title: 'Character Development',
    description:
      'Everyday emphasis on discipline, civic responsibility, ethical conduct, cultural pride, and respectful collaboration inside and outside classrooms.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'why-activities',
    title: 'Healthy Activities',
    description:
      'Vibrant sports matches, co-curricular tournaments, speech contests, and annual cultural celebrations to promote physical and psychological wellness.',
    iconName: 'Trophy',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'school-building',
    title: 'School Building & Campus Grounds',
    description:
      'The authentic campus facility of Uswa Public School Minapin framed by the scenic snow and peaks of Nagar valley.',
    category: 'Campus & Infrastructure',
    src: '/buildings.jpg',
    badgeText: 'Main Campus',
  },
  {
    id: 'students-campus',
    title: 'School Campus & Vibrant Students',
    description:
      'Engaged students collaborating in the courtyard and interactive learning environments under teacher mentorship.',
    category: 'Campus Life',
    src: '/students-campus.jpg',
    badgeText: 'Student Life',
  },
  {
    id: 'speech-event',
    title: 'Speech & Recitation Event',
    description:
      'Annual declamation, poetry, and Burushashki cultural recitation showcasing student eloquence and poise.',
    category: 'Extracurricular',
    src: '/speech-event.jpg',
    badgeText: 'Stage Event',
  },
  {
    id: 'sports-event',
    title: 'Annual Sports & Athletic Championship',
    description:
      'Dynamic physical sports competitions encouraging teamwork, physical stamina, and healthy sportsmanship.',
    category: 'Sports & Athletics',
    src: '/SPORTS.jpg',
    badgeText: 'Sports Day',
  },
  {
    id: 'school-event',
    title: 'School Ceremony & Community Gathering',
    description:
      'Parents-Students-Teachers conference and annual achievement awards ceremony celebrating youth milestones.',
    category: 'Community & Celebrations',
    src: '/school-event.jpg',
    badgeText: 'Annual Ceremony',
  },
];
