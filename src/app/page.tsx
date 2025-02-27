import Hero from "@/components/Sections/Hero";
import Sasha from "@/components/Sections/Sasha";
import Features from "@/components/Sections/Features";
import Lessons from "@/components/Sections/Lessons";
import TestimonialsSlider from "@/components/Sections/TestimonialsSlider";
import css from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <Hero />
      <div className={css.mainBg}>
        <section className={`section ${css.sasha}`} id="info">
          {/* <div
          style={{
            maxWidth: "fit-content",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            margin: "0 auto",
          }}
        > */}
          <Sasha />
          {/* </div> */}
        </section>

        <section className={`section light ${css.features}`}>
          <Features />
        </section>

        <section className={`section ${css.testimonials} ${css.accent}`}>
          <TestimonialsSlider />
        </section>

        <section className={`section ${css.lesson}`}>
          <Lessons />
        </section>
      </div>
    </div>
  );
}
