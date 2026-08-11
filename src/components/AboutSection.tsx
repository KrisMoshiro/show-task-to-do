import React from 'react';
import { Box, Typography, Avatar, Link, Stack } from '@mui/material';
import type { ColorScheme } from '../data/themes';

import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

interface AboutSectionProps {
    colors: ColorScheme;
}

interface Collaborator {
    username: string;
    photo: string;
    url: string;
}

const collaborators: Collaborator[] = [
    {
        username: 'victorMr05',
        photo: avatar1,
        url: 'https://github.com/victorMr05',
    },
    {
        username: 'KrisMoshiro',
        photo: avatar2,
        url: 'https://github.com/KrisMoshiro',
    },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ colors }) => {
    const textColor = colors.text;
    const secondaryTextColor = colors.textVariant || colors.text;

    return (
        <Box
            sx={{
                maxWidth: 760,
                mx: 'auto',
                px: { xs: 2, sm: 4 },
                py: { xs: 6, md: 8 },
                color: textColor,
                transition: 'color 0.5s ease',
            }}
        >
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography
                    variant="h6"
                    component="h4"
                    sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: { xs: '1.2rem', sm: '1.35rem' },
                    }}
                >
                    Colaboradores
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: secondaryTextColor,
                        opacity: 0.85,
                        mb: 3,
                        fontSize: { xs: '0.9rem', sm: '0.98rem' },
                    }}
                >
                    Personas talentosas que contribuyen al desarrollo y mejora constante del proyecto.
                </Typography>
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        mt: 3,
                    }}
                >
                    {collaborators.map((item) => (
                        <Box
                            key={item.username}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: 120,
                            }}
                        >
                            <Link
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: 'none' }}
                            >
                                <Avatar
                                    src={item.photo}
                                    alt={item.username}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        mb: 1.5,
                                        border: `2px solid ${colors.accent}`,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.08)',
                                            opacity: 0.9,
                                        },
                                    }}
                                />
                            </Link>

                            <Link
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                sx={{
                                    color: textColor,
                                    fontSize: '0.88rem',
                                    fontWeight: 500,
                                    opacity: 0.8,
                                }}
                            >
                                @{item.username}
                            </Link>
                        </Box>
                    ))}
                </Stack>
            </Box>
            <Typography
                variant="caption"
                component="div"
                sx={{
                    textAlign: 'center',
                    mt: 6,
                    mb: 2,
                    opacity: 0.6,
                    color: textColor,
                    fontSize: '0.8rem',
                }}
            >
                © {new Date().getFullYear()} Vistor Coder
            </Typography>
        </Box>
    );
};

export default AboutSection;