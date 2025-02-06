"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Fragment, useState } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import ProgressBar from "../../UI/ProgressBar";
import Container from "../../Container";
import { testimonials } from "@/constants/testimonials";
import LinkButton from "@/components/UI/LinkButton";
import Modal from "@/components/UI/Modal";
import css from "./Testimonials.module.scss";

const MAX_LENGTH = 150;

const Testimonials = () => {
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
    <section className={`section ${css.testimonials} ${css.accent}`}>
      <h2 className={css.titleHidden}>
        Відгуки про Онлайн-школу англійської мови Затишна
      </h2>

      <Container>
        <div className={css.swiperWrapper}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              960: { slidesPerView: 3, spaceBetween: 8 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
              1440: { slidesPerView: 3, spaceBetween: 30 },
            }}
            loop={true}
            className={css.customSwiper}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={css.slide}>
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
              </SwiperSlide>
            ))}
          </Swiper>
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
