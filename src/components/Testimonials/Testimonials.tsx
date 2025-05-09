"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
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
      {testimonials.map((testimonial, index) => (
        <div key={index} className={css.testimonial}>
          <div className={css.testimonialHeader}>
            <div className={css.testimonialPhotoWrapper}>
              <Image
                className={css.testimonialPhoto}
                src={testimonial.photo}
                alt={testimonial.name}
                width={100}
                height={100}
              />
            </div>
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

            <div className={css.progressWrapper}>
              <ProgressBar
                initialLevel={testimonial.initialLevel || 0}
                currentLevel={testimonial.currentLevel || 0}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
