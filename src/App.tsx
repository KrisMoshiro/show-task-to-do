import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeaderSection } from './components/HeaderSection';
import { DeviceFilter, type FilterType } from './components/DeviceFilter';
import { BetaPromoSection } from './components/BetaPromoSection';
import { unifiedSlidesData } from './data/slidesData';
import { themes, type PaletteId } from './data/themes';

export const App: React.FC = () => {
  const [currentPalette, setCurrentPalette] = useState<PaletteId>('sunset');
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');
  const [filter, setFilter] = useState<FilterType>('phone');
  const [isCarouselVisible, setIsCarouselVisible] = useState<boolean>(false);
  const carouselSectionRef = useRef<HTMLDivElement>(null);

  const activeTheme = themes[currentPalette];
  const activeColors = activeTheme ? activeTheme[currentMode] : themes.default.light;

  const handleSlideChange = useCallback((paletteId: PaletteId, themeMode: 'light' | 'dark') => {
    setCurrentPalette(paletteId);
    setCurrentMode(themeMode);
  }, []);

  // Filtrado seguro de slides
  const filteredSlides = useMemo(() => {
    const items = unifiedSlidesData.filter((slide) => {
      if (filter === 'phone') {
        return slide.type === 'phone' || slide.type === 'promo' || !slide.type;
      }
      if (filter === 'tablet') {
        return slide.type === 'tablet' || slide.type === 'promo' || !slide.type;
      }
      return true;
    });
    return items.length > 0 ? items : unifiedSlidesData;
  }, [filter]);

  const handleExploreClick = () => {
    setIsCarouselVisible(true);

    setTimeout(() => {
      carouselSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

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
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2,
            py: 4,
          }}
        >
          <HeaderSection colors={activeColors} />

          <Box sx={{ mt: { xs: 5, sm: 6, md: 7 } }}>
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
                py: 1.4,
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
        {isCarouselVisible && (
          <Box
            ref={carouselSectionRef}
            sx={{
              pt: { xs: 2, md: 4 },
              pb: { xs: 6, md: 10 },
              transition: 'opacity 0.6s ease-in-out',
            }}
          >
            {/* Filtros */}
            <DeviceFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              colors={activeColors}
              isDarkMode={currentMode === 'dark'}
            />

            {/* Carrusel */}
            <Box sx={{ width: '100%', mb: { xs: 6, md: 8 } }}>
              <ShowcaseCarousel slides={filteredSlides} onSlideChange={handleSlideChange} />
            </Box>
            <BetaPromoSection colors={activeColors} />
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default App;