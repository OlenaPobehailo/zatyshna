import Testimonials from "@/components/Testimonials";
import Container from "@/components/Container";
import css from "../page.module.scss";
import LinkButton from "@/components/UI/LinkButton";

export const metadata = {
  title: "Затишна | Відгуки студентів",
  description:
    "Що студенти кажуть про школу англійської мови Затишна. Реальні відгуки про викладачів, спільноту та атмосферу навчання.",
  keywords: [
    "відгуки",
    "школа англійської мови",
    "Затишна",
    "курси англійської",
    "вивчення англійської",
    "досвід студентів",
  ],
};

export default function TestimonialsPage() {
  return (
    <div className={css.page}>
      <Container>
        <section className={css.intro}>
          <h1 className="titleHidden">Відгуки студентів</h1>
          <div className={css.introCard}>
            <h2 className={css.pageTitle}>
              Хочете знати, що кажуть ті, хто вже навчається у нас?
            </h2>
            <p className={css.pageSubtitle}>
              Коли ти відчуваєш підтримку, навчання стає легким і приємним.{" "}
            </p>

            <p className={css.pageSubtitle}>
              Наші студенти діляться своїми історіями – подивіться, як їм
              вдається досягати успіху разом із нами!
            </p>
          </div>
        </section>
        <Testimonials />

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
