"use client";
import { Area } from "@/interfaces/interfaces";
import { useEffect, useRef, useState } from "react";

export const useResponsiveImageMapAreas = (
  originalAreas: Area[],
  originalWidth: number,
  originalHeight: number
) => {
  const [areas, setAreas] = useState<Area[]>([]);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateAreas = () => {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        const scaleX = width / originalWidth;
        const scaleY = height / originalHeight;

        const newAreas = originalAreas.map((area) => {
          const [x1, y1, x2, y2] = area.coords.split(",").map(Number);
          const scaledCoords = [
            Math.round(x1 * scaleX),
            Math.round(y1 * scaleY),
            Math.round(x2 * scaleX),
            Math.round(y2 * scaleY),
          ].join(",");

          return {
            ...area,
            coords: scaledCoords,
          };
        });

        const newAreasString = JSON.stringify(newAreas);
        const currentAreasString = JSON.stringify(areas);

        if (newAreasString !== currentAreasString) {
          setAreas(newAreas);
        }
      }
    };

    updateAreas();
    window.addEventListener("resize", updateAreas);

    return () => window.removeEventListener("resize", updateAreas);
  }, [originalAreas, originalWidth, originalHeight, areas]);

  return { areas, imgRef };
};
