import Contacts from "@/components/Contacts";
import styles from "../page.module.css";

export const metadata = {
  title: "Затишна | Контакти",
  description:
    "Контактна інформація школи англійської мови Затишна: адреса, email, telegram, форма для зв'язку.",
  keywords: [
    "контакти",
    "школа англійської мови",
    "Затишна",
    "телефон",
    "telegram",
    "email",
    "форма зв'язку",
    "контактна інформація",
  ],
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Contacts />
    </div>
  );
}
