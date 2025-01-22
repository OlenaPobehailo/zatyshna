"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import ProgressBar from "../../UI/ProgressBar";
import Container from "../../Container";
import { testimonials } from "@/constants/testimonials";
import LinkButton from "@/components/UI/LinkButton";
import Modal from "@/components/UI/Modal";
import css from "./Testimonials.module.scss";

const MAX_LENGTH = 150;

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const nextSlide = () => emblaApi?.scrollNext();
  const prevSlide = () => emblaApi?.scrollPrev();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [fullText, setFullText] = useState<string>("");

  const openModal = (text: string) => {
    setFullText(text);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const splitText = (text: string) => {
    return text
      .split("\n")
      .map((line, index) => <Fragment key={index}>{line}</Fragment>);
  };

  return (
    <section className={`section ${css.testimonials}`}>
      <h2 className={css.titleHidden}>
        Відгуки про Онлайн-школу англійської мови Затишна
      </h2>

      <Container>
        <div className={css.embla} ref={emblaRef}>
          <div className={css.embla__container}>
            {testimonials.map((testimonial, index) => (
              <div className={css.embla__slide} key={index}>
                <div>
                  <div className={css.testimonialHeader}>
                    <Image
                      className={css.testimonialPhoto}
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width="100"
                      height="100"
                    />
                    <p className={css.testimonialName}>{testimonial.name}</p>
                  </div>

                  <div className={css.testimonialTextWrapper}>
                    <div className={css.testimonialText}>
                      {testimonial.text.length > MAX_LENGTH ? (
                        <>
                          {splitText(testimonial.text.slice(0, MAX_LENGTH))}
                          <span className={css.ellipsis}>...</span>
                        </>
                      ) : (
                        splitText(testimonial.text)
                      )}
                    </div>
                    {testimonial.text.length > MAX_LENGTH && (
                      <button
                        className={css.readMoreButton}
                        onClick={() => openModal(testimonial.text)}
                      >
                        Читати далі
                      </button>
                    )}
                  </div>
                </div>
                <ProgressBar
                  initialLevel={testimonial.initialLevel || 0}
                  currentLevel={testimonial.currentLevel || 0}
                />
              </div>
            ))}
          </div>
          <button className={css.prevButton} onClick={prevSlide}>
            {/* &#8592; */}
            <FaArrowLeft />
          </button>
          <button className={css.nextButton} onClick={nextSlide}>
            {/* &#8594; */}
            <FaArrowRight />
          </button>
          {/* fa FaArrowLeft FaArrowRight */}
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

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={css.modalContent}>
            {splitText(fullText).map((line, index) => (
              <p key={index} className={css.modalParagraph}>
                {line}
              </p>
            ))}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Testimonials;
