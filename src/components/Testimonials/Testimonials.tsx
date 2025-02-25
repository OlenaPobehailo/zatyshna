"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { testimonials } from "@/constants/testimonials";
import ProgressBar from "../UI/ProgressBar";
import css from "./Testimonials.module.scss";

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <div className={css.testimonials}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 900: 2, 1200: 3 }}>
        <Masonry columnsCount={3} gutter="16px" className={css.masonryGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={css.testimonial}>
              <div className={css.testimonialHeader}>
                <Image
                  className={css.testimonialPhoto}
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                />
                <p className={css.testimonialName}>{testimonial.name}</p>
              </div>

              <div className={css.testimonialInfoWrapper}>
                <div className={css.testimonialTextWrapper}>
                  {testimonial.text.split("\n").map((line, index) => (
                    <p key={index} className={css.testimonialText}>
                      {line}
                    </p>
                  ))}
                </div>

                <ProgressBar
                  initialLevel={testimonial.initialLevel || 0}
                  currentLevel={testimonial.currentLevel || 0}
                />
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      
    </div>
  );
};

export default Testimonials;
