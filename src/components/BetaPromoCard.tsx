import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import type { ColorScheme } from '../data/themes';

interface BetaPromoCardProps {
    colors?: ColorScheme;
}

export const BetaPromoCard: React.FC<BetaPromoCardProps> = ({ colors }) => {
    const textColor = colors?.textVariant || colors?.text || '#FFFFFF';
    const titleColor = colors?.text || '#FFFFFF';
    const cardBg = colors?.card || 'rgba(0, 0, 0, 0.75)';
    const accentColor = colors?.accent || '#367CA4';
    const hoverBg = colors?.primaryVariant || '#2D6593';

    const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeS1_h7t9OOqRacGgLA-PIk0p3IwwblJlRJQCg0Fw1m_B0XrA/viewform?usp=publish-editor';

    return (
        <Box
            sx={{
                width: { xs: 300, sm: 420, md: 500 },
                background: 'none',
                boxShadow: 'none',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                userSelect: 'none',
                px: 2,
                py: 1,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 500,
                    maxWidth: 460,
                    mb: 4,
                    fontSize: { xs: '1.05rem', sm: '1.25rem' },
                    lineHeight: 1.6,
                    color: textColor,
                    transition: 'color 0.5s ease',
                }}
            >
                Sé de los primeros en experimentar la mejor forma de organizar tus proyectos y rutinas.
            </Typography>
            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor: cardBg,
                    color: titleColor,
                    px: { xs: 3.5, sm: 4.5 },
                    py: { xs: 1.4, sm: 1.8 },
                    borderRadius: '18px',
                    border: `1.5px solid ${accentColor}`,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    mb: 3,
                    transition: 'all 0.4s ease',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        backgroundColor: hoverBg,
                    },
                }}
            >
                <AndroidIcon sx={{ fontSize: { xs: 32, sm: 40 }, color: '#3DDC84' }} />
                <Box sx={{ textAlign: 'left' }}>
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            fontSize: { xs: '0.7rem', sm: '0.78rem' },
                            opacity: 0.8,
                            lineHeight: 1,
                            letterSpacing: 1,
                            fontWeight: 'bold',
                            color: textColor,
                        }}
                    >
                        PRÓXIMAMENTE EN
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                            lineHeight: 1.2,
                            color: titleColor,
                        }}
                    >
                        Google Play
                    </Typography>
                </Box>
            </Box>
            <Button
                component="a"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                sx={{
                    borderRadius: '30px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    px: { xs: 4, sm: 5 },
                    py: 1.4,
                    backgroundColor: accentColor,
                    color: titleColor,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                        backgroundColor: hoverBg,
                        boxShadow: '0 12px 25px rgba(0,0,0,0.25)',
                        transform: 'translateY(-2px)',
                    },
                }}
            >
                Solicitar Acceso a la Beta
            </Button>
        </Box>
    );
};