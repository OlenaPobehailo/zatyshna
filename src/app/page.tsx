import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Sasha from "@/components/Sasha";

export const metadata = {
  title: "Zatyshna",
  description: "Zatyshna",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <Sasha />
    </div>
  );
}
