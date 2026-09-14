export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src: string;
  badgeText?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
