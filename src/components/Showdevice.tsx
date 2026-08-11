import React from 'react';
import { Stack, Button } from '@mui/material';
import type { ColorScheme } from '../data/themes';

export type DeviceType = 'phone' | 'tablet';

interface ShowdeviceProps {
    currentFilter: DeviceType;
    onFilterChange: (filter: DeviceType) => void;
    colors: ColorScheme;
    isDarkMode: boolean;
}

export const Showdevice: React.FC<ShowdeviceProps> = ({
    currentFilter,
    onFilterChange,
    colors,
    isDarkMode,
}) => {
    const getButtonSx = (deviceType: DeviceType) => {
        const isActive = currentFilter === deviceType;
        return {
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 'bold',
            px: 4,
            py: 1,
            fontSize: '0.95rem',
            backgroundColor: isActive ? colors.accent : colors.card,
            borderColor: colors.accent,
            color: isActive ? (isDarkMode ? '#FFFFFF' : colors.text) : colors.text,
            boxShadow: isActive ? '0 4px 14px rgba(0,0,0,0.15)' : 'none',
            transition: 'all 0.4s ease',
            '&:hover': {
                backgroundColor: isActive ? colors.accent : colors.primaryVariant,
                borderColor: colors.accent,
            },
        };
    };

    return (
        <Stack
            direction="row"
            spacing={3}
            sx={{
                mb: { xs: 2, md: 3 },
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button
                variant={currentFilter === 'phone' ? 'contained' : 'outlined'}
                onClick={() => onFilterChange('phone')}
                sx={getButtonSx('phone')}
            >
                Teléfono
            </Button>

            <Button
                variant={currentFilter === 'tablet' ? 'contained' : 'outlined'}
                onClick={() => onFilterChange('tablet')}
                sx={getButtonSx('tablet')}
            >
                Tablet
            </Button>
        </Stack>
    );
};