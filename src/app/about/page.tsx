import About from "@/components/About";
import css from "../page.module.scss";
import Container from "@/components/Container";
import LinkButton from "@/components/UI/LinkButton";

export default function AboutPage() {
  return (
    <div className={css.page}>
      <Container>
        <section className={css.intro}>
          <h1 className={css.pageTitle}>
            Zatyshna – твій затишний простір для вивчення англійської
          </h1>
          <p className={`${css.pageSubtitleCenter} ${css.pageSubtitle}`}>
            Вивчай англійську з любов’ю та комфортом
          </p>
        </section>
      </Container>
      <About />
      <Container>
        <div className={css.buttonWrapper}>
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Записатись на заняття
          </LinkButton>

          <LinkButton name="secondary" href="/products">
            Дізнатись більше
          </LinkButton>
        </div>
      </Container>
    </div>
  );
}
