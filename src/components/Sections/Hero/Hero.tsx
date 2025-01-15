"use client";
import { useState } from "react";
import Image from "next/image";
import { useResponsiveImageMapAreas } from "@/hooks/useResponsiveImageMapAreas";
import css from "./Hero.module.css";

type Spark = {
  x: number;
  y: number;
  id: string;
  angle: number;
  distance: number;
};

const Hero = () => {
  const originalAreas = [
    {
      coords: "650,900,1150,700",
      // href: "/",
      href: "#info",
      title: "Головна вежа",
      alt: "Головна вежа",
      shape: "rect" as const,
    },
    {
      coords: "100,900,500,700",
      href: "/lessons",
      title: "Вежа знань",
      alt: "Вежа знань",
      shape: "rect" as const,
    },
    {
      coords: "1400,900,1850,700",
      href: "/testimonials",
      title: "Вежа досягнень",
      alt: "Вежа досягнень",
      shape: "rect" as const,
    },
    {
      coords: "450,450,850,250",
      href: "/contacts",
      title: "Вежа зв'язку",
      alt: "Вежа зв'язку",
      shape: "rect" as const,
    },
    {
      coords: "1150,450,1550,250",
      href: "/resources",
      title: "Вежа скарбів",
      alt: "Вежа скарбів",
      shape: "rect" as const,
    },
  ];

  const originalWidth = 1920;
  const originalHeight = 1080;

  const { areas, imgRef } = useResponsiveImageMapAreas(
    originalAreas,
    originalWidth,
    originalHeight
  );

  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleMouseOver = (event: React.MouseEvent<HTMLAreaElement>) => {
    const rect = imgRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const sparksArray = Array.from({ length: 10 }).map((_, index) => ({
      x,
      y,
      id: `${Date.now()}-${index}`,
      angle: Math.random() * 360,
      distance: Math.random() * 200,
    }));

    setSparks((prev) => [...prev, ...sparksArray]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => !sparksArray.includes(spark)));
    }, 1000);
  };

  return (
    <section className={css.hero}>
      <div className={css.imageWrapper}>
        <Image
          src="/assets/images/Castle-towers.jpg"
          alt="Замок"
          fill
          useMap="#image-map"
          ref={imgRef}
          className={css.responsiveImage}
          priority
        />
        <map name="image-map">
          {areas.map((area, index) => (
            <area
              key={index}
              alt={area.alt}
              title={area.title}
              href={area.href}
              coords={area.coords}
              shape={area.shape}
              className={css.area}
              onMouseOver={handleMouseOver}
            />
          ))}
        </map>
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className={css.spark}
            style={
              {
                top: `${spark.y}px`,
                left: `${spark.x}px`,
                "--dx": Math.cos(spark.angle) * spark.distance,
                "--dy": Math.sin(spark.angle) * spark.distance,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
