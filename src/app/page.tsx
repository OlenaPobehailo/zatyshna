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

      <section className={`section ${css.sasha}`} id="info">
        <Sasha />
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
  );
}
