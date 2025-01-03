"use client";
import Image from "next/image";
import css from "./Hero.module.css";
import { useResponsiveImageMapAreas } from "@/hooks/useResponsiveImageMapAreas";

const Hero = () => {
  const originalAreas = [
    {
      coords: "650,900,1150,700",
      href: "/",
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
      coords: "1350,900,1750,700",
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
            />
          ))}
        </map>
      </div>
    </section>
  );
};

export default Hero;
