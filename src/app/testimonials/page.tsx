import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import styles from "../page.module.css";

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
      <Testimonials />
    </div>
  );
}
