import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DeviceMockup } from './DeviceMockup';
import { themes, type PaletteId } from '../data/themes';
import { useContainerWidth } from '../hooks/useContainerWidth';
import type { SlideItem } from '../data/slidesData';

interface ShowcaseCarouselProps {
    slides: SlideItem[];
    onSlideChange?: (paletteId: PaletteId, themeMode: 'light' | 'dark') => void;
}

const MotionBox = motion(Box);

export const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({
    slides,
    onSlideChange,
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerWidth = useContainerWidth(containerRef);

    const totalSlides = slides.length;
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

    const activeSlide = slides[activeIndex];
    const activeTheme = themes[activeSlide?.paletteId];
    const activeColors = activeTheme ? activeTheme[activeSlide.themeMode] : themes.default.light;

    const gap = isMobile ? 20 : 32;

    const getCardWidth = useCallback((type: 'phone' | 'tablet' | 'promo') => {
        if (type === 'phone') return isMobile ? 210 : isTablet ? 240 : 260;
        if (type === 'tablet') return isMobile ? 260 : isTablet ? 360 : 440;
        return isMobile ? 280 : isTablet ? 340 : 400; // 'promo'
    }, [isMobile, isTablet]);

    const currentCardWidth = getCardWidth(activeSlide?.type || 'phone');

    useEffect(() => {
        if (onSlideChange && activeSlide) {
            onSlideChange(activeSlide.paletteId, activeSlide.themeMode);
        }
    }, [activeIndex, activeSlide, onSlideChange]);

    const handleNext = () => setActiveIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

    // CÁLCULO DINÁMICO DE POSICIÓN X
    const translateX = useMemo(() => {
        if (containerWidth === 0) return 0;

        let offsetPreviousCards = 0;
        for (let i = 0; i < activeIndex; i++) {
            offsetPreviousCards += getCardWidth(slides[i].type) + gap;
        }

        return (containerWidth / 2) - (currentCardWidth / 2) - offsetPreviousCards;
    }, [containerWidth, activeIndex, slides, gap, getCardWidth, currentCardWidth]);

    return (
        <Box sx={{ width: '100%', py: { xs: 1, md: 2 }, margin: 0, padding: 0 }}>

            <Box
                sx={{
                    mb: { xs: 1, sm: 1.5 },
                    px: 2,
                    py: { xs: 1.5, sm: 2 },
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        backgroundColor: activeColors.accent,
                        color: activeSlide.themeMode === 'dark' ? '#FFFFFF' : activeColors.text,
                        fontWeight: 'bold',
                        px: 2,
                        py: 0.4,
                        my: { xs: 1.5, sm: 2 },
                        borderRadius: 10,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        fontSize: '0.72rem',
                        transition: 'all 0.4s ease',
                    }}
                >
                    {activeSlide.tag}
                </Typography>

                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 'bold',
                        color: activeColors.text,
                        fontSize: { xs: '1.4rem', sm: '1.75rem', md: '2.0rem' },
                        mt: 1,
                        mb: 0,
                        transition: 'color 0.4s ease',
                        lineHeight: 1.2,
                    }}
                >
                    {activeSlide.title}
                </Typography>

                {activeSlide.subtitle && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: activeColors.textVariant || activeColors.text,
                            opacity: 0.85,
                            fontSize: { xs: '0.85rem', sm: '0.95rem' },
                            mt: 0.5,
                        }}
                    >
                        {activeSlide.subtitle}
                    </Typography>
                )}
            </Box>

            <Box
                ref={containerRef}
                sx={{
                    position: 'relative',
                    height: { xs: 460, sm: 540, md: 620 },
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    py: 1,
                }}
            >
                <IconButton
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    sx={{
                        position: 'absolute',
                        left: { xs: 8, sm: 24, md: 32 },
                        zIndex: 50,
                        backgroundColor: activeColors.card,
                        color: activeColors.text,
                        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                        transition: 'all 0.3s ease',
                        '&:hover': { backgroundColor: activeColors.primaryVariant, transform: 'scale(1.1)' },
                        '&.Mui-disabled': { opacity: 0.2, backgroundColor: activeColors.card },
                    }}
                >
                    <ChevronLeftIcon fontSize={isMobile ? 'medium' : 'large'} />
                </IconButton>

                <Box sx={{ width: '100%', overflow: 'hidden', height: '100%', position: 'relative' }}>
                    <MotionBox
                        animate={{ x: translateX }}
                        transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: `${gap}px`,
                            position: 'absolute',
                            left: 0,
                            height: '100%',
                        }}
                    >
                        {slides.map((slide, index) => {
                            const isCurrent = index === activeIndex;
                            const cardW = getCardWidth(slide.type);

                            return (
                                <MotionBox
                                    key={slide.id}
                                    onClick={() => setActiveIndex(index)}
                                    animate={{
                                        scale: isCurrent ? 1 : 0.82,
                                        opacity: isCurrent ? 1 : 0.35,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        cursor: 'pointer',
                                        flexShrink: 0,
                                        width: cardW,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <DeviceMockup
                                        type={slide.type}
                                        slideId={slide.id}
                                        screenTheme={slide.paletteId}
                                        imageSrc={slide.imageSrc}
                                        isDarkModeApp={slide.themeMode === 'dark'}
                                    />
                                </MotionBox>
                            );
                        })}
                    </MotionBox>
                </Box>

                <IconButton
                    onClick={handleNext}
                    disabled={activeIndex === totalSlides - 1}
                    sx={{
                        position: 'absolute',
                        right: { xs: 8, sm: 24, md: 32 },
                        zIndex: 50,
                        backgroundColor: activeColors.card,
                        color: activeColors.text,
                        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                        transition: 'all 0.3s ease',
                        '&:hover': { backgroundColor: activeColors.primaryVariant, transform: 'scale(1.1)' },
                        '&.Mui-disabled': { opacity: 0.2, backgroundColor: activeColors.card },
                    }}
                >
                    <ChevronRightIcon fontSize={isMobile ? 'medium' : 'large'} />
                </IconButton>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1.5, zIndex: 10, position: 'relative' }}>
                {slides.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        sx={{
                            width: i === activeIndex ? 28 : 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: i === activeIndex ? activeColors.text : (activeColors.textVariant || activeColors.text),
                            opacity: i === activeIndex ? 1 : 0.3,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};