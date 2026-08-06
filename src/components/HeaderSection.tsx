import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import logoImg from '../assets/ICON.png';
import type { ColorScheme } from '../data/themes';

interface HeaderSectionProps {
    colors: ColorScheme;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ colors }) => {
    return (
        <Stack
            spacing={3}
            sx={{
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: 720,
                mx: 'auto',
            }}
        >
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 'bold',
                    color: colors.text,
                    fontSize: { xs: '2.5rem', sm: '3.4rem', md: '4rem' },
                    textShadow: '0 2px 10px rgba(0,0,0,0.15)',
                    transition: 'color 0.5s ease',
                }}
            >
                Task to Do
            </Typography>

            <Box
                component="img"
                src={logoImg}
                alt="Task To Do Logo"
                sx={{
                    width: { xs: 95, sm: 115, md: 135 },
                    height: 'auto',
                    filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.15))',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
            />

            {/* Texto Descriptivo Centrado */}
            <Typography
                variant="body1"
                sx={{
                    color: colors.textVariant || colors.text,
                    fontSize: { xs: '0.98rem', sm: '1.1rem' },
                    lineHeight: 1.7,
                    px: { xs: 2, sm: 4 },
                    transition: 'color 0.5s ease',
                }}
            >
                Organiza tus tareas, proyectos y listas diarias de forma intuitiva con una experiencia visual adaptable a tu estilo de vida.
            </Typography>
        </Stack>
    );
};