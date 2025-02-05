import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import Container from "@/components/Container";
import styles from "../page.module.scss";
import css from "./TestimonialsPage.module.scss";

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
    <div className={styles.page}>
      <Container>
        <h1 className="titleHidden">Відгуки студентів</h1>
        <div className={css.introCard}>
          <div className={css.content}>
            <h2 className={css.title}>
              Хочете знати, що кажуть ті, хто вже навчається у нас?
            </h2>
            <p className={css.text}>
              Коли ти відчуваєш підтримку, навчання стає легким і приємним. Наші
              студенти діляться своїми історіями – подивіться, як їм вдається
              досягати успіху разом із нами!
            </p>
          </div>
        </div>
      </Container>
      <div className={css.testimonialsWrapper}>
        <Testimonials />
      </div>
    </div>
  );
}
