import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Box, Button, Divider } from '@mui/material';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeaderSection } from './components/HeaderSection';
import { Showdevice, type DeviceType } from './components/Showdevice';
import { BetaPromoSection } from './components/BetaPromoSection';
import { AboutSection } from './components/AboutSection';
import { unifiedSlidesData } from './data/slidesData';
import { themes, type PaletteId } from './data/themes';

export const App: React.FC = () => {
  const [currentPalette, setCurrentPalette] = useState<PaletteId>('sunset');
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');

  const [filter, setFilter] = useState<DeviceType>('phone');
  const exploreSectionRef = useRef<HTMLDivElement>(null);

  const activeTheme = themes[currentPalette];
  const activeColors = activeTheme ? activeTheme[currentMode] : themes.default.light;

  const handleSlideChange = useCallback((paletteId: PaletteId, themeMode: 'light' | 'dark') => {
    setCurrentPalette(paletteId);
    setCurrentMode(themeMode);
  }, []);

  const filteredSlides = useMemo(() => {
    return unifiedSlidesData.filter((slide) => {
      if (filter === 'phone') return slide.type === 'phone' || slide.type === 'promo';
      if (filter === 'tablet') return slide.type === 'tablet' || slide.type === 'promo';
      return true;
    });
  }, [filter]);

  const handleExploreClick = () => {
    exploreSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const containerMaxWidth = { maxWidth: 900, mx: 'auto', px: { xs: 2, sm: 4 } };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
        color: activeColors.text,
        transition: 'color 0.5s ease',
      }}
    >
      <AnimatedBackground paletteId={currentPalette} mode={currentMode} />

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>

        <Box
          sx={{
            ...containerMaxWidth,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pt: { xs: 6, md: 8 },
            pb: { xs: 3, md: 4 },
          }}
        >
          <HeaderSection colors={activeColors} />

          <Box sx={{ mt: { xs: 3, sm: 4 } }}>
            <Button
              variant="contained"
              onClick={handleExploreClick}
              sx={{
                backgroundColor: activeColors.card,
                color: activeColors.text,
                border: `1px solid ${activeColors.accent}`,
                borderRadius: '28px',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                px: { xs: 5, sm: 7 },
                py: 1.2,
                boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  backgroundColor: activeColors.primaryVariant,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
                },
              }}
            >
              Explorar Funciones
            </Button>
          </Box>
        </Box>

        <Box sx={containerMaxWidth}>
          <Divider sx={{ my: 3, borderColor: activeColors.text, opacity: 0.2 }} />
        </Box>

        <Box ref={exploreSectionRef} sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 4, md: 6 } }}>
          <Showdevice
            currentFilter={filter}
            onFilterChange={setFilter}
            colors={activeColors}
            isDarkMode={currentMode === 'dark'}
          />

          <Box sx={{ width: '100%', mt: 3, mb: 2 }}>
            <ShowcaseCarousel slides={filteredSlides} onSlideChange={handleSlideChange} />
          </Box>
        </Box>

        <Box sx={containerMaxWidth}>
          <Divider sx={{ my: 3, borderColor: activeColors.text, opacity: 0.2 }} />
        </Box>

        <Box sx={containerMaxWidth}>
          <BetaPromoSection colors={activeColors} />
        </Box>

        <Box sx={containerMaxWidth}>
          <Divider sx={{ my: 3, borderColor: activeColors.text, opacity: 0.2 }} />
        </Box>

        <Box sx={containerMaxWidth}>
          <AboutSection colors={activeColors} />
        </Box>

      </Box>
    </Box>
  );
};

export default App;