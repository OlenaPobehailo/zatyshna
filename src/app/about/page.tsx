import About from "@/components/About";
import css from "../page.module.scss";
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <div className={css.page}>
      <Container>
        <section className={css.intro}>
          <h1 className={css.pageTitle}>
            Zatyshna – твій затишний простір для вивчення англійської
          </h1>
          <p className={css.pageSubtitle}>
            Вивчай англійську з любов’ю та комфортом
          </p>
        </section>
        <About />
      </Container>
    </div>
  );
}
