"use client";

import useEmblaCarousel from "embla-carousel-react";
import ProgressBar from "../../UI/ProgressBar";
import Container from "../../Container";
import { testimonials } from "@/constants/testimonials";
import css from "./Testimonials.module.css";
import LinkButton from "@/components/UI/LinkButton";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const nextSlide = () => emblaApi?.scrollNext();
  const prevSlide = () => emblaApi?.scrollPrev();

  return (
    <section className={`section ${css.testimonials}`}>
      <Container>
        <div className={css.embla} ref={emblaRef}>
          <div className={css.embla__container}>
            {testimonials.map((testimonial, index) => (
              <div className={css.embla__slide} key={index}>
                <div>
                  <p className={css.testimonialName}>{testimonial.name}:</p>
                  <p className={css.testimonialText}>
                    {Array.isArray(testimonial.text) ? (
                      testimonial.text.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))
                    ) : (
                      <span>{testimonial.text}</span>
                    )}
                  </p>
                </div>
                <ProgressBar
                  initialLevel={testimonial.initialLevel || 0}
                  currentLevel={testimonial.currentLevel || 0}
                />
              </div>
            ))}
          </div>
          <button className={css.prevButton} onClick={prevSlide}>
            &#8592;
          </button>
          <button className={css.nextButton} onClick={nextSlide}>
            &#8594;
          </button>
        </div>
        <LinkButton
          name="primary"
          href="https://t.me/zatyshna_support"
          target="_blank"
          rel="noopener noreferrer"
        >
          Записатись на заняття
        </LinkButton>
      </Container>
    </section>
  );
};

export default Testimonials;
