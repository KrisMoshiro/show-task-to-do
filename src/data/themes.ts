export type PaletteId = "default" | "sunset" | "forest" | "ocean";

export interface ColorScheme {
  gradientTop: string;
  gradientBottom: string;
  primary: string;
  primaryVariant: string;
  secondary: string;
  danger: string;
  dangerVariant: string;
  light?: string;
  dark?: string;
  darkVariant?: string;
  background: string;
  backgroundVariant?: string;
  card: string;
  cardVariant?: string;
  text: string;
  textVariant?: string;
  sidebarText: string;
  accent: string;
  settingsButtonColor: string;
}

export const themes: Record<PaletteId, { light: ColorScheme; dark: ColorScheme }> = {
  default: {
    light: {
      gradientTop: '#FFFEBA',
      gradientBottom: '#FFEE93',
      primary: '#FFFEBA',
      primaryVariant: '#FEF05A',
      secondary: '#FFEE93',
      danger: '#fecaca',
      dangerVariant: '#FD9B9B',
      light: '#F5F5F5',
      dark: '#000000',
      background: '#FFFFFF',
      backgroundVariant: '#E5E7EB',
      card: '#fecaca',
      cardVariant: '#FD9B9B',
      text: '#000000',
      textVariant: '#666666',
      sidebarText: '#000000',
      accent: '#fecaca',
      settingsButtonColor: '#fecaca',
    },
    dark: {
      gradientTop: '#374f54',
      gradientBottom: '#79969d',
      primary: '#0b372a',
      primaryVariant: '#494900',
      secondary: '#254e40',
      danger: '#A34616',
      dangerVariant: '#DC2626',
      dark: '#000000',
      darkVariant: '#111827',
      background: '#00150E',
      backgroundVariant: '#1A1A1A',
      card: '#374F54',
      cardVariant: '#85A98D',
      text: '#cbcb76',
      textVariant: '#D1D5DB',
      sidebarText: '#cac8a5',
      accent: '#A4542E',
      settingsButtonColor: '#a64c1e',
    },
  },
  sunset: {
    light: {
      gradientTop: '#FFF3D8',
      gradientBottom: '#FFE8B5',
      primary: '#FFF3D8',
      primaryVariant: '#FFCB80',
      secondary: '#FFE8B5',
      background: '#FFF8F1',
      card: '#FFE0B9',
      text: '#42301B',
      textVariant: '#666666',
      sidebarText: '#42301B',
      accent: '#FFC99A',
      danger: '#FFCB80',
      dangerVariant: '#FB923C',
      settingsButtonColor: '#FFC99A',
      light: '#F5F5F5',
      dark: '#000000',
    },
    dark: {
      gradientTop: '#5B3A23',
      gradientBottom: '#8A5C3E',
      primary: '#5B3A23',
      primaryVariant: '#8A5C3E',
      secondary: '#9b6c50',
      background: '#191006',
      card: '#2F1F15',
      text: '#F2E4CE',
      textVariant: '#D1D5DB',
      sidebarText: '#F2E4CE',
      accent: '#8A5C3E',
      danger: '#EF4444',
      dangerVariant: '#FCA5A5',
      settingsButtonColor: '#8A5C3E',
      dark: '#000000',
      darkVariant: '#111827',
    },
  },
  forest: {
    light: {
      gradientTop: '#E6F7E9',
      gradientBottom: '#BCE8CE',
      primary: '#E6F7E9',
      primaryVariant: '#C6EAD0',
      secondary: '#BCE8CE',
      background: '#F5FBF6',
      card: '#D5EBD9',
      text: '#1F4330',
      textVariant: '#666666',
      sidebarText: '#FFFFFF',
      accent: '#C87C83',
      danger: '#B91C1C',
      dangerVariant: '#FCA5A5',
      settingsButtonColor: '#C87C83',
      light: '#F5F5F5',
      dark: '#000000',
    },
    dark: {
      gradientTop: '#2E4C39',
      gradientBottom: '#375A49',
      primary: '#2E4C39',
      primaryVariant: '#3F6D52',
      secondary: '#609b7d',
      background: '#11201A',
      card: '#2A4A3B',
      text: '#E6F2EA',
      textVariant: '#D1D5DB',
      sidebarText: '#E6F2EA',
      accent: '#3F6D52',
      danger: '#EF4444',
      dangerVariant: '#FECACA',
      settingsButtonColor: '#3F6D52',
      dark: '#000000',
      darkVariant: '#111827',
    },
  },
  ocean: {
    light: {
      gradientTop: '#D8F0FB',
      gradientBottom: '#AED9F6',
      primary: '#D8F0FB',
      primaryVariant: '#B5DCF6',
      secondary: '#AED9F6',
      background: '#F3FBFF',
      card: '#B8D9EE',
      text: '#0C3C5A',
      textVariant: '#666666',
      sidebarText: '#FFFFFF',
      accent: '#A288A6',
      danger: '#DC2626',
      dangerVariant: '#FCA5A5',
      settingsButtonColor: '#A288A6',
      light: '#F5F5F5',
      dark: '#000000',
    },
    dark: {
      gradientTop: '#1E4B6F',
      gradientBottom: '#2D6593',
      primary: '#1E4B6F',
      primaryVariant: '#367CA4',
      secondary: '#306b9b',
      background: '#0A1E2D',
      card: '#1D4A6E',
      text: '#DAEFFD',
      textVariant: '#D1D5DB',
      sidebarText: '#DAEFFD',
      accent: '#367CA4',
      danger: '#FB7185',
      dangerVariant: '#FECACA',
      settingsButtonColor: '#367CA4',
      dark: '#000000',
      darkVariant: '#111827',
    },
  },
};