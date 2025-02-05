import Hero from "@/components/Sections/Hero";
import Sasha from "@/components/Sections/Sasha";
import Features from "@/components/Sections/Features";
import Lessons from "@/components/Sections/Lessons";
import Testimonials from "@/components/Sections/Testimonials";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Sasha />
      <Features />
      <Testimonials />
      <Lessons />
    </div>
  );
}
