import React from 'react';
import { Box } from '@mui/material';
import { BetaPromoCard } from './BetaPromoCard';

interface DeviceMockupProps {
    type: 'phone' | 'tablet' | 'promo';
    imageSrc?: string;
    slideId?: number | string;
    screenTheme?: string;
    isDarkModeApp?: boolean;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
    type,
    imageSrc,
    slideId,
    screenTheme,
    isDarkModeApp,
}) => {
    if (type === 'promo') {
        return <BetaPromoCard />;
    }

    const isDark = screenTheme === 'dark-emerald' || isDarkModeApp;

    if (type === 'tablet') {
        return (
            <Box
                sx={{
                    width: '100%',
                    aspectRatio: '10 / 14',
                    borderRadius: '24px',
                    border: '10px solid #1C1C1E',
                    backgroundColor: '#1C1C1E',
                    boxShadow: '0px 18px 36px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {imageSrc && (
                    <Box
                        component="img"
                        src={imageSrc}
                        alt={`Tablet screen ${slideId ?? ''}`}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                )}
            </Box>
        );
    }

    // Tipo 'phone'
    return (
        <Box
            sx={{
                position: 'relative',
                width: { xs: 210, sm: 240, md: 260 },
                height: { xs: 440, sm: 500, md: 540 },
                backgroundColor: isDark ? '#050708' : '#1A1A1A',
                borderRadius: { xs: '32px', md: '38px' },
                p: { xs: '6px', md: '8px' },
                boxShadow: isDark ? '0 25px 50px rgba(0,0,0,0.7)' : '0 20px 40px rgba(61, 52, 41, 0.25)',
                border: '3px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                userSelect: 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: 80, sm: 95, md: 105 },
                    height: { xs: 14, sm: 16, md: 18 },
                    backgroundColor: '#000000',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    zIndex: 10,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: { xs: '26px', md: '30px' },
                    overflow: 'hidden',
                    backgroundColor: isDark ? '#12181B' : '#FFFBF2',
                }}
            >
                {imageSrc && (
                    <Box
                        component="img"
                        src={imageSrc}
                        alt={`Captura ${slideId ?? ''}`}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            display: 'block',
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};