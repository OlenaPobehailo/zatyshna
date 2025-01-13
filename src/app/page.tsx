import Hero from "@/components/Sections/Hero";
import Sasha from "@/components/Sections/Sasha";
import Features from "@/components/Sections/Features";
import Lessons from "@/components/Sections/Lessons";
import styles from "./page.module.css";

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
      <Lessons />
    </div>
  );
}
