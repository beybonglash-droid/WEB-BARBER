import { ServiceItem, Barber, GalleryItem, Review } from '../types';
import { CONTACT } from '../config/contact';
import {
  IMG_SERVICIO_CORTE_CLASICO,
  IMG_SERVICIO_FADE_DEGRADADO,
  IMG_SERVICIO_CORTE_BARBA,
  IMG_SERVICIO_PERFILADO_BARBA,
  IMG_SERVICIO_AFEITADO_REAL,
  IMG_SERVICIO_PACK_ELITE,
  IMG_BARBERO_MATEO_ROSSI,
  IMG_BARBERO_ALEJANDRO_VEGA,
  IMG_BARBERO_CARLOS_MENDEZ,
  IMG_GALERIA_1,
  IMG_GALERIA_2,
  IMG_GALERIA_3,
  IMG_GALERIA_4,
  IMG_GALERIA_5,
  IMG_GALERIA_6,
} from '../config/images';

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
    imageUrl: IMG_SERVICIO_CORTE_CLASICO
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
    imageUrl: IMG_SERVICIO_FADE_DEGRADADO
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
    imageUrl: IMG_SERVICIO_CORTE_BARBA
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
    imageUrl: IMG_SERVICIO_PERFILADO_BARBA
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
    imageUrl: IMG_SERVICIO_AFEITADO_REAL
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
    imageUrl: IMG_SERVICIO_PACK_ELITE
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
    image: IMG_BARBERO_MATEO_ROSSI,
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
    image: IMG_BARBERO_ALEJANDRO_VEGA,
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
    image: IMG_BARBERO_CARLOS_MENDEZ,
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
    imageUrl: IMG_GALERIA_1,
    description: 'Degradado limpio a cero con volumen controlado y textura superior para peinado desenfadado.'
  },
  {
    id: 'g2',
    title: 'Barba Esculpida y Ritual a Navaja',
    category: 'Barba',
    barberName: 'Alejandro Vega',
    imageUrl: IMG_GALERIA_2,
    description: 'Líneas nítidas en mejillas y cuello con acabado hidratado de toalla caliente.'
  },
  {
    id: 'g3',
    title: 'Pompadour Clásico Contemporáneo',
    category: 'Clásico',
    barberName: 'Carlos Méndez',
    imageUrl: IMG_GALERIA_3,
    description: 'Separación lateral marcada y brillo sedoso con pomada a base de agua.'
  },
  {
    id: 'g4',
    title: 'Skin Fade con Barba Desvanecida',
    category: 'Paquete',
    barberName: 'Mateo Rossi',
    imageUrl: IMG_GALERIA_4,
    description: 'Conexión degradada entre patilla y barba para un look armónico y estilizado.'
  },
  {
    id: 'g5',
    title: 'Afeitado de Precisión y Masaje',
    category: 'Ritual',
    barberName: 'Alejandro Vega',
    imageUrl: IMG_GALERIA_5,
    description: 'Cuidado dermatológico masculino con productos botánicos de alta gama.'
  },
  {
    id: 'g6',
    title: 'Tijera Artesanal & Flow Natural',
    category: 'Clásico',
    barberName: 'Carlos Méndez',
    imageUrl: IMG_GALERIA_6,
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
  name: CONTACT.shopName,
  tagline: 'Tu estilo, nuestra pasión',
  subtitle: CONTACT.shopSlogan,

  // ↓ Datos de contacto — editar en: src/config/contact.ts
  phone:           CONTACT.phone,
  whatsappNumber:  CONTACT.whatsappNumber,
  address:         CONTACT.address,
  cityState:       CONTACT.cityState,
  fullAddress:     CONTACT.fullAddress,
  mapUrl:          CONTACT.mapUrl,
  hours:           CONTACT.hours,
  social:          CONTACT.social,

  amenities: [
    { name: 'Barra de Espresso & Whisky de cortesía', icon: 'Coffee' },
    { name: 'Sillones hidráulicos de piel Belmont vintage', icon: 'Armchair' },
    { name: 'Ritual de toallas aromatizadas con vapor de eucalipto', icon: 'Sparkles' },
    { name: 'Productos importados de alta barbería', icon: 'ShieldCheck' },
    { name: 'Wi-Fi de alta velocidad & Música jazz/blues seleccionada', icon: 'Wifi' },
    { name: 'Estacionamiento privado con valet parking', icon: 'Car' }
  ]
};
