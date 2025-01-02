import Hero from "@/components/Hero";
import styles from "./page.module.css";

export const metadata = {
  title: "Zatyshna",
  description: "Zatyshna",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
