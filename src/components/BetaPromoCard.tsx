import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import logoImg from '../assets/ICON.png';

export const BetaPromoCard: React.FC = () => {
    return (
        <Box
            sx={{
                width: { xs: 280, sm: 340, md: 400 },
                height: { xs: 440, sm: 500, md: 540 },
                // Sin contenedor, bordes ni sombreado encajonado
                background: 'none',
                boxShadow: 'none',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                userSelect: 'none',
                px: 2,
            }}
        >
            {/* Logo de Task To Do */}
            <Box
                component="img"
                src={logoImg}
                alt="Task To Do Logo"
                sx={{
                    width: { xs: 90, sm: 110, md: 125 },
                    height: 'auto',
                    mb: 2.5,
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35))',
                    transition: 'transform 0.4s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05) translateY(-4px)',
                    },
                }}
            />

            {/* Nombre de la Aplicación */}
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 'bold',
                    letterSpacing: 0.5,
                    color: '#FFFFFF',
                    mb: 1,
                    fontSize: { xs: '1.8rem', sm: '2.2rem' },
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
            >
                Task To Do
            </Typography>

            {/* Bajada invitando a la Beta */}
            <Typography
                variant="body2"
                sx={{
                    opacity: 0.85,
                    maxWidth: 320,
                    mb: 3.5,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.5,
                    color: '#DAEFFD',
                }}
            >
                Sé de los primeros en experimentar la mejor forma de organizar tus proyectos y rutinas.
            </Typography>

            {/* Botón Acción Principal */}
            <Button
                variant="contained"
                size="large"
                sx={{
                    borderRadius: '30px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    px: 4,
                    py: 1.2,
                    mb: 3,
                    backgroundColor: '#367CA4',
                    boxShadow: '0 8px 20px rgba(54, 124, 164, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#2D6593',
                        boxShadow: '0 12px 25px rgba(54, 124, 164, 0.6)',
                        transform: 'translateY(-2px)',
                    },
                }}
            >
                Solicitar Acceso a la Beta
            </Button>

            {/* Insignia Próximamente Google Play */}
            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    px: 2.5,
                    py: 1,
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
            >
                <AndroidIcon sx={{ fontSize: 26, color: '#3DDC84' }} />
                <Box sx={{ textAlign: 'left' }}>
                    <Typography
                        variant="caption"
                        sx={{ display: 'block', fontSize: '0.62rem', opacity: 0.75, lineHeight: 1, letterSpacing: 0.5 }}
                    >
                        PRÓXIMAMENTE EN
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '0.88rem', lineHeight: 1.2 }}>
                        Google Play
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};