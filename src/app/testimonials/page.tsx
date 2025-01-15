import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import styles from "../page.module.css";

export default function TestimonialsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Відгуки</h1>
      <Testimonials />
    </div>
  );
}
