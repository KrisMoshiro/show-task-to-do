import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { AnimatedBackground } from './components/AnimatedBackground';
import { unifiedSlidesData } from './data/slidesData';
import type { PaletteId } from './data/themes';

export const App: React.FC = () => {
  const [currentPalette, setCurrentPalette] = useState<PaletteId>('sunset');
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');

  const handleSlideChange = useCallback((paletteId: PaletteId, themeMode: 'light' | 'dark') => {
    setCurrentPalette(paletteId);
    setCurrentMode(themeMode);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <AnimatedBackground paletteId={currentPalette} mode={currentMode} />

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', py: 4 }}>
        <ShowcaseCarousel
          slides={unifiedSlidesData}
          onSlideChange={handleSlideChange}
        />
      </Box>
    </Box>
  );
};

export default App;