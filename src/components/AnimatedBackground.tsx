import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { themes } from '../data/themes';
import type { PaletteId } from '../data/themes';

const MotionBox = motion(Box);

interface AnimatedBackgroundProps {
    paletteId: PaletteId;
    mode: 'light' | 'dark';
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ paletteId, mode }) => {
    // Obtenemos los colores exactos del tema activo
    const activeTheme = themes[paletteId];
    const colors = activeTheme ? activeTheme[mode] : themes.default.light;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
                // Usamos el gradiente/fondo dinámico del tema
                background: `linear-gradient(180deg, ${colors.gradientTop} 0%, ${colors.background} 100%)`,
                transition: 'background 0.6s ease-in-out', // Transición suave al cambiar de tema
            }}
        >
            {/* Círculo Superior Izquierdo */}
            <MotionBox
                sx={{
                    position: 'absolute',
                    top: { xs: -120, md: -100 },
                    left: { xs: -120, md: -80 },
                    width: { xs: 260, sm: 340, md: 420 },
                    height: { xs: 260, sm: 340, md: 420 },
                    borderRadius: '50%',
                    backgroundColor: colors.primaryVariant, // Dinámico
                    opacity: mode === 'dark' ? 0.4 : 0.65,
                    transition: 'background-color 0.6s ease-in-out',
                }}
                animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Forma Ovalada Lateral Derecha */}
            <MotionBox
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: { xs: -80, md: -60 },
                    width: { xs: 200, sm: 260, md: 300 },
                    height: { xs: 300, sm: 360, md: 420 },
                    borderRadius: '120px',
                    backgroundColor: colors.card, // Dinámico
                    opacity: mode === 'dark' ? 0.35 : 0.5,
                    transform: 'rotate(12deg)',
                    transition: 'background-color 0.6s ease-in-out',
                }}
                animate={{ y: [0, 25, 0], rotate: [12, 16, 12] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Círculo Inferior Izquierdo */}
            <MotionBox
                sx={{
                    position: 'absolute',
                    bottom: { xs: -100, md: -80 },
                    left: { xs: -80, md: -50 },
                    width: { xs: 280, sm: 360, md: 440 },
                    height: { xs: 280, sm: 360, md: 440 },
                    borderRadius: '50%',
                    backgroundColor: colors.secondary, // Dinámico
                    opacity: mode === 'dark' ? 0.4 : 0.6,
                    transition: 'background-color 0.6s ease-in-out',
                }}
                animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
        </Box>
    );
};