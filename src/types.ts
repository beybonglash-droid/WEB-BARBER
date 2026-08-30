export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  description: string;
  category: 'cortes' | 'barba' | 'rituales' | 'paquetes';
  popular?: boolean;
  includes: string[];
  imageUrl?: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  image: string;
  bio: string;
  availableDays: string[];
}

export interface BookingDetails {
  serviceIds: string[];
  barberId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
  complimentaryDrink: string;
  totalPrice: number;
  totalDuration: number;
  bookingCode?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  barberName: string;
  imageUrl: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}
