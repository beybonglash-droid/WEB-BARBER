import { ServiceItem, Barber, GalleryItem, Review } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'corte-clasico',
    name: 'Corte Clásico',
    price: 25,
    duration: 35,
    description: 'Corte a tijera o máquina con acabado tradicional, lavado y peinado con productos premium.',
    category: 'cortes',
    popular: true,
    includes: [
      'Diagnóstico capilar personalizado',
      'Corte a tijera artesanal o máquina',
      'Lavado con champú vigorizante',
      'Peinado con pomada o cera mate de autor'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fade-degradado',
    name: 'Fade / Degradado',
    price: 28,
    duration: 40,
    description: 'Precisión milimétrica para un degradado perfecto, adaptado a la forma de tu rostro.',
    category: 'cortes',
    popular: true,
    includes: [
      'Degradado skin fade, low, mid o high fade',
      'Perfilado de contornos a navaja',
      'Lavado refrescante con toalla helada',
      'Acabado con polvo de textura o fijador mate'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corte-barba',
    name: 'Corte + Barba',
    price: 40,
    duration: 65,
    description: 'El servicio completo. Incluye toalla caliente, perfilado a navaja y masaje facial.',
    category: 'paquetes',
    popular: true,
    includes: [
      'Corte de cabello a elección (Fade o Clásico)',
      'Esculpido y rebajado de barba',
      'Ritual de toalla caliente aromatizada con eucalipto',
      'Perfilado a navaja japonesa con espuma tibia',
      'Bálsamo hidratante y masaje facial relajante'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'perfilado-barba',
    name: 'Perfilado de Barba',
    price: 18,
    duration: 30,
    description: 'Diseño y alineación con navaja libre, ritual de toalla caliente y aceites esenciales.',
    category: 'barba',
    popular: false,
    includes: [
      'Alineación simétrica de pómulos y cuello',
      'Toalla caliente para apertura de poros',
      'Afeitado suave con navaja desechable esterilizada',
      'Aceite de cedro y bergamota para nutrir el vello'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ritual-afeitado-real',
    name: 'Afeitado Real Tradicional',
    price: 35,
    duration: 45,
    description: 'Experiencia clásica con doble toalla caliente, espuma artesanal en tazón de cobre y navaja de barbero.',
    category: 'rituales',
    popular: false,
    includes: [
      'Tratamiento pre-afeitado con aceite orgánico',
      'Espuma batida al momento aplicada con brocha de tejón',
      'Doble pasada a navaja para máxima suavidad',
      'Cierre con toalla fría y loción astringente herbal'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pack-caballero-elite',
    name: 'Pack Caballero Elite VIP',
    price: 55,
    duration: 80,
    description: 'Tratamiento supremo: Corte, Barba, Mascarilla negra detox, masaje craneal y trago de cortesía.',
    category: 'paquetes',
    popular: true,
    includes: [
      'Corte de autor y arreglo integral de barba',
      'Mascarilla de carbón activado anti-impurezas',
      'Ritual completo de toallas térmicas',
      'Masaje craneofacial estimulante de 15 min',
      'Bebida Premium a elección (Whisky Single Malt, Cerveza artesanal o Café Espresso)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'mateo-rossi',
    name: 'Mateo "El Maestro" Rossi',
    role: 'Head Master Barber',
    experience: '12 años de trayectoria',
    specialty: 'Especialista en Fades Milimétricos y Tijera Clásica',
    rating: 4.98,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Formado en Milán y Londres. Obsesivo con la simetría y las líneas de corte perfectas para cada estructura craneal.',
    availableDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  },
  {
    id: 'alejandro-vega',
    name: 'Alejandro Vega',
    role: 'Artisanal Beard & Shave Specialist',
    experience: '9 años de trayectoria',
    specialty: 'Rituales de Barba a Navaja y Tratamientos Capilares',
    rating: 4.95,
    reviewsCount: 289,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Maestro del afeitado tradicional a navaja y tratamiento con toallas calientes. Especialista en texturas y barbas densas.',
    availableDays: ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  },
  {
    id: 'carlos-mendez',
    name: 'Carlos "Black Blade" Méndez',
    role: 'Senior Stylist & Texture Artist',
    experience: '8 años de trayectoria',
    specialty: 'Cortes Modernos, Pompadour y Diseños Urbanos',
    rating: 4.92,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Especialista en estilos contemporáneos, texturas modernas y asesoría de imagen masculina.',
    availableDays: ['Lunes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Mid Fade con Textura Francesa',
    category: 'Fade',
    barberName: 'Mateo Rossi',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    description: 'Degradado limpio a cero con volumen controlado y textura superior para peinado desenfadado.'
  },
  {
    id: 'g2',
    title: 'Barba Esculpida y Ritual a Navaja',
    category: 'Barba',
    barberName: 'Alejandro Vega',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    description: 'Líneas nítidas en mejillas y cuello con acabado hidratado de toalla caliente.'
  },
  {
    id: 'g3',
    title: 'Pompadour Clásico Contemporáneo',
    category: 'Clásico',
    barberName: 'Carlos Méndez',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'Separación lateral marcada y brillo sedoso con pomada a base de agua.'
  },
  {
    id: 'g4',
    title: 'Skin Fade con Barba Desvanecida',
    category: 'Paquete',
    barberName: 'Mateo Rossi',
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
    description: 'Conexión degradada entre patilla y barba para un look armónico y estilizado.'
  },
  {
    id: 'g5',
    title: 'Afeitado de Precisión y Masaje',
    category: 'Ritual',
    barberName: 'Alejandro Vega',
    imageUrl: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80',
    description: 'Cuidado dermatológico masculino con productos botánicos de alta gama.'
  },
  {
    id: 'g6',
    title: 'Tijera Artesanal & Flow Natural',
    category: 'Clásico',
    barberName: 'Carlos Méndez',
    imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    description: 'Corte 100% tijera respetando la caída natural y densidad del cabello.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Rodrigo Santoro',
    rating: 5,
    date: 'Hace 3 días',
    comment: 'La mejor experiencia de barbería en la ciudad. El café de cortesía, la atención meticulosa de Mateo y el ritual de toalla caliente valen cada centavo.',
    service: 'Pack Caballero Elite VIP'
  },
  {
    id: 'r2',
    author: 'Javier Domínguez',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Puntualidad absoluta y un fade perfecto. Alejandro sabe exactamente cómo perfilar la barba sin irritar la piel.',
    service: 'Corte + Barba'
  },
  {
    id: 'r3',
    author: 'Fernando Alarcón',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Ambiente sobrio, música excelente y sillones de cuero super cómodos. No voy a ninguna otra barbería.',
    service: 'Fade / Degradado'
  }
];

export const SHOP_INFO = {
  name: 'ELITE BARBER SHOP',
  tagline: 'Tu estilo, nuestra pasión',
  subtitle: 'Cortes de precisión y barbería tradicional en un santuario diseñado para el caballero moderno.',
  address: 'Av. Principal 123, Centro Histórico',
  cityState: 'Ciudad de México, CP 06000',
  fullAddress: 'Av. Principal 123, Centro Histórico, Ciudad de México, CP 06000',
  phone: '+52 55 8421 9000',
  whatsappNumber: '525584219000',
  hours: {
    weekdays: 'Lunes a Sábado: 10:00 - 20:00',
    sunday: 'Domingo: 11:00 - 16:00'
  },
  social: {
    instagram: 'https://instagram.com/elitebarbershop',
    facebook: 'https://facebook.com/elitebarbershop',
    tiktok: 'https://tiktok.com/@elitebarbershop'
  },
  amenities: [
    { name: 'Barra de Espresso & Whisky de cortesía', icon: 'Coffee' },
    { name: 'Sillones hidráulicos de piel Belmont vintage', icon: 'Armchair' },
    { name: 'Ritual de toallas aromatizadas con vapor de eucalipto', icon: 'Sparkles' },
    { name: 'Productos importados de alta barbería', icon: 'ShieldCheck' },
    { name: 'Wi-Fi de alta velocidad & Música jazz/blues seleccionada', icon: 'Wifi' },
    { name: 'Estacionamiento privado con valet parking', icon: 'Car' }
  ]
};
