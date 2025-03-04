"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Swiper as SwiperInstance } from "swiper/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useRef } from "react";
import Container from "@/components/Container/Container";

import ProgressBar from "../../UI/ProgressBar";
import { testimonials } from "@/constants/testimonials";
import LinkButton from "@/components/UI/LinkButton";
import css from "@/components/Sections/TestimonialsSlider/TestimonialsSlider.module.scss";

const TestimonialsSlider = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <Container
    // backgroundColor="var(--main-bg)"
    >
      <h2 className={css.titleHidden}>
        Відгуки про Онлайн-школу англійської мови Затишна
      </h2>
      <div className={css.swiperWrapper}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className={css.customSwiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`swiperSlide ${css.swiperSlide}`}
            >
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

                <ProgressBar
                  initialLevel={testimonial.initialLevel || 0}
                  currentLevel={testimonial.currentLevel || 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={css.customSwiperPrev}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Icon icon="mdi:chevron-left" className={css.icon} />
        </div>
        <div
          className={css.customSwiperNext}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Icon icon="mdi:chevron-right" className={css.icon} />
        </div>
      </div>

      <div className={css.buttonWrapper}>
        <LinkButton
          name="primary"
          href="https://t.me/zatyshna_support"
          target="_blank"
          rel="noopener noreferrer"
        >
          Записатись на заняття
        </LinkButton>

        <LinkButton name="secondary" href="/lessons">
          Дізнатись більше
        </LinkButton>
      </div>
    </Container>
  );
};

export default TestimonialsSlider;
