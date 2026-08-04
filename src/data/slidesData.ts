import type { PaletteId } from './themes';

// Imágenes de Teléfono
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

// Imágenes de Tablet
import t1Img from '../assets/t1.png';
import t2Img from '../assets/t2.png';
import t3Img from '../assets/t3.png';
import t4Img from '../assets/t4.png';
import t5Img from '../assets/t5.png';

export interface SlideItem {
  id: string | number;
  type: 'phone' | 'tablet' | 'promo';
  tag: string;
  title: string;
  subtitle?: string;
  paletteId: PaletteId;
  themeMode: 'light' | 'dark';
  imageSrc?: string;
}

export const unifiedSlidesData: SlideItem[] = [
  // --- TELEFONO (5 vistas) ---
  {
    id: 'p1',
    type: 'phone',
    tag: 'Dashboard Mobile',
    title: 'Gestión Principal',
    subtitle: 'Visualiza tus métricas y listas principales.',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: img1,
  },
  {
    id: 'p2',
    type: 'phone',
    tag: 'Listas',
    title: 'Lista de Compras',
    subtitle: 'Organiza tus pendientes y elementos marcados.',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: img2,
  },
  {
    id: 'p3',
    type: 'phone',
    tag: 'Navegación',
    title: 'Menú Lateral',
    subtitle: 'Acceso rápido a todas tus secciones.',
    paletteId: 'forest',
    themeMode: 'light',
    imageSrc: img3,
  },
  {
    id: 'p4',
    type: 'phone',
    tag: 'Planes',
    title: 'Modo Oscuro',
    subtitle: 'Interfaz optimizada para baja luminosidad.',
    paletteId: 'forest',
    themeMode: 'dark',
    imageSrc: img4,
  },
  {
    id: 'p5',
    type: 'phone',
    tag: 'Ajustes',
    title: 'Configuración',
    subtitle: 'Personaliza temas, fuentes e idioma a tu gusto.',
    paletteId: 'default',
    themeMode: 'light',
    imageSrc: img5,
  },

  // --- TABLET (5 vistas) ---
  {
    id: 't1',
    type: 'tablet',
    tag: 'Tablet - Modo Claro',
    title: 'Índice General',
    subtitle: 'Aprovecha la pantalla extendida para mayor visibilidad.',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: t1Img,
  },
  {
    id: 't2',
    type: 'tablet',
    tag: 'Tablet - Warm',
    title: 'Lista de Compras',
    subtitle: 'Vista en dos columnas para mayor productividad.',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: t2Img,
  },
  {
    id: 't3',
    type: 'tablet',
    tag: 'Tablet - Menta',
    title: 'Navegación Lateral',
    subtitle: 'Navega de forma fluida entre tus paneles.',
    paletteId: 'forest',
    themeMode: 'light',
    imageSrc: t3Img,
  },
  {
    id: 't4',
    type: 'tablet',
    tag: 'Tablet - Configuración',
    title: 'Ajustes del Sistema',
    subtitle: 'Control total de tu cuenta en pantalla grande.',
    paletteId: 'default',
    themeMode: 'light',
    imageSrc: t4Img,
  },
  {
    id: 't5',
    type: 'tablet',
    tag: 'Tablet - Oscuro',
    title: 'Planes de Fin de Semana',
    subtitle: 'Diseño enfocado para entornos oscuros.',
    paletteId: 'forest',
    themeMode: 'dark',
    imageSrc: t5Img,
  },

  // --- SLIDE FINAL PROMO ---
  {
    id: 'beta-promo',
    type: 'promo',
    tag: 'Próximamente',
    title: '¡Únete a nuestra Beta Cerrada!',
    subtitle: 'Sé de los primeros en probar la experiencia completa.',
    paletteId: 'ocean',
    themeMode: 'dark',
  },
];