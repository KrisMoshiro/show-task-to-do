import React from 'react';
import { Stack, Typography } from '@mui/material';
import { BetaPromoCard } from './BetaPromoCard';
import type { ColorScheme } from '../data/themes';

interface BetaPromoSectionProps {
    colors: ColorScheme;
}

export const BetaPromoSection: React.FC<BetaPromoSectionProps> = ({ colors }) => {
    return (
        <Stack
            spacing={3}
            sx={{
                py: { xs: 6, md: 8 },
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 'bold',
                    color: colors.text,
                    fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
                    maxWidth: 700,
                    mx: 'auto',
                    transition: 'color 0.5s ease',
                }}
            >
                Sé parte de nuestra beta cerrada
            </Typography>
            <BetaPromoCard colors={colors} />
        </Stack>
    );
};

export default BetaPromoSection;