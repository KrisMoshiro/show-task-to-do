import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Custom Hook para medir dinámicamente el ancho horizontal de un contenedor DOM
 * @param containerRef Referencia al elemento DOM
 */
export const useContainerWidth = (containerRef: RefObject<HTMLElement | null>): number => {
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Medir ancho inicial
    updateWidth();

    // Listener para ajustar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [containerRef]);

  return containerWidth;
};