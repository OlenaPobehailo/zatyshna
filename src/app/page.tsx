import Hero from "@/components/Sections/Hero";
import styles from "./page.module.css";
import Sasha from "@/components/Sections/Sasha";
import Features from "@/components/Sections/Features";

export const metadata = {
  title: "Zatyshna",
  description: "Zatyshna",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
        <Sasha />
        <Features />
    </div>
  );
}
