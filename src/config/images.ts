/**
 * ============================================================
 *  CONFIGURACION CENTRAL DE IMAGENES — ELITE BARBER SHOP
 * ============================================================
 *
 *  INSTRUCCIONES PARA PRODUCCION:
 *  1. El cliente entrega las fotos reales
 *  2. Copia las imagenes a /public/images/ en la carpeta correcta
 *  3. Reemplaza la URL de Unsplash por la ruta local: '/images/...'
 *  4. Listo. No necesitas tocar ningun otro archivo.
 *
 *  ESTRUCTURA DE CARPETAS (public/images/):
 *  ├── logo/
 *  │   └── logo.png                <- Logo principal del negocio
 *  ├── hero/
 *  │   ├── fondo-hero.jpg          <- Foto de fondo del banner (2000x1200 px)
 *  │   └── interior-local.jpg      <- Interior del local (1200x800 px)
 *  ├── servicios/
 *  │   ├── corte-clasico.jpg       (800x600 px)
 *  │   ├── fade-degradado.jpg      (800x600 px)
 *  │   ├── corte-barba.jpg         (800x600 px)
 *  │   ├── perfilado-barba.jpg     (800x600 px)
 *  │   ├── afeitado-real.jpg       (800x600 px)
 *  │   └── pack-elite.jpg          (800x600 px)
 *  ├── barberos/
 *  │   ├── mateo-rossi.jpg         (600x600 px cuadrada)
 *  │   ├── alejandro-vega.jpg      (600x600 px cuadrada)
 *  │   └── carlos-mendez.jpg       (600x600 px cuadrada)
 *  └── galeria/
 *      ├── galeria-1.jpg           (800x800 px cuadrada)
 *      ├── galeria-2.jpg
 *      ├── galeria-3.jpg
 *      ├── galeria-4.jpg
 *      ├── galeria-5.jpg
 *      ├── galeria-6.jpg
 *      ├── lookbook-antes.jpg      (1200x800 px)
 *      └── lookbook-despues.jpg    (1200x800 px)
 * ============================================================
 */

// LOGO
export const IMG_LOGO = `${import.meta.env.BASE_URL}images/logo/logo.png`;
// Temporal: reemplazar con logo real del cliente

// HERO / FONDO PRINCIPAL (2000x1200px recomendado)
export const IMG_HERO_BG =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85';
// PRODUCCION: reemplazar por '/images/hero/fondo-hero.jpg'

// INTERIOR LOCAL (1200x800px)
export const IMG_LOCAL_INTERIOR =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80';
// PRODUCCION: '/images/hero/interior-local.jpg'

// SERVICIOS (800x600px)
export const IMG_SERVICIO_CORTE_CLASICO =
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/servicios/corte-clasico.jpg'

export const IMG_SERVICIO_FADE_DEGRADADO =
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/servicios/fade-degradado.jpg'

export const IMG_SERVICIO_CORTE_BARBA =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/servicios/corte-barba.jpg'

export const IMG_SERVICIO_PERFILADO_BARBA =
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/servicios/perfilado-barba.jpg'

export const IMG_SERVICIO_AFEITADO_REAL =
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/servicios/afeitado-real.jpg'

export const IMG_SERVICIO_PACK_ELITE =
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/servicios/pack-elite.jpg'

// BARBEROS (600x600px cuadrada)
export const IMG_BARBERO_MATEO_ROSSI =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
// PRODUCCION: '/images/barberos/mateo-rossi.jpg'

export const IMG_BARBERO_ALEJANDRO_VEGA =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80';
// PRODUCCION: '/images/barberos/alejandro-vega.jpg'

export const IMG_BARBERO_CARLOS_MENDEZ =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80';
// PRODUCCION: '/images/barberos/carlos-mendez.jpg'

// GALERIA / LOOKBOOK (800x800px cuadrada)
export const IMG_GALERIA_1 =
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/galeria/galeria-1.jpg'

export const IMG_GALERIA_2 =
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/galeria/galeria-2.jpg'

export const IMG_GALERIA_3 =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/galeria/galeria-3.jpg'

export const IMG_GALERIA_4 =
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/galeria/galeria-4.jpg'

export const IMG_GALERIA_5 =
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/galeria/galeria-5.jpg'

export const IMG_GALERIA_6 =
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80';
// PRODUCCION: '/images/galeria/galeria-6.jpg'

// LOOKBOOK ANTES/DESPUES (1200x800px)
export const IMG_LOOKBOOK_ANTES =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85';
// PRODUCCION: '/images/galeria/lookbook-antes.jpg'

export const IMG_LOOKBOOK_DESPUES =
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=85';
// PRODUCCION: '/images/galeria/lookbook-despues.jpg'
