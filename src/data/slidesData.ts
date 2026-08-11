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
    title: 'Toda tu lista, en un solo lugar',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: img1,
  },
  {
    id: 'p2',
    type: 'phone',
    tag: 'Listas',
    title: 'Gestiona tus tareas de forma eficiente',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: img2,
  },
  {
    id: 'p3',
    type: 'phone',
    tag: 'Navegación',
    title: 'Navega por tus páginas con facilidad',
    paletteId: 'forest',
    themeMode: 'light',
    imageSrc: img3,
  },
  {
    id: 'p4',
    type: 'phone',
    tag: 'Planes',
    title: 'Personalízalo a tu gusto: tema, fuentes e idiomas',
    paletteId: 'forest',
    themeMode: 'dark',
    imageSrc: img4,
  },
  {
    id: 'p5',
    type: 'phone',
    tag: 'Ajustes',
    title: 'Agradable a la vista, incluso de noche',
    paletteId: 'default',
    themeMode: 'light',
    imageSrc: img5,
  },

  // --- TABLET (5 vistas) ---
  {
    id: 't1',
    type: 'tablet',
    tag: 'Tablet - Modo Claro',
    title: 'Aprovecha la pantalla extendida para mayor visibilidad.',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: t1Img,
  },
  {
    id: 't2',
    type: 'tablet',
    tag: 'Tablet - Warm',
    title: 'Vista en dos columnas para mayor productividad.',
    paletteId: 'sunset',
    themeMode: 'light',
    imageSrc: t2Img,
  },
  {
    id: 't3',
    type: 'tablet',
    tag: 'Tablet - Menta',
    title: 'Navega de forma fluida entre tus paneles.',
    paletteId: 'forest',
    themeMode: 'light',
    imageSrc: t3Img,
  },
  {
    id: 't4',
    type: 'tablet',
    tag: 'Tablet - Configuración',
    title: 'Personalízalo a tu gusto: tema, fuentes e idiomas',
    paletteId: 'default',
    themeMode: 'light',
    imageSrc: t4Img,
  },
  {
    id: 't5',
    type: 'tablet',
    tag: 'Tablet - Oscuro',
    title: 'Diseño enfocado para entornos oscuros.',
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