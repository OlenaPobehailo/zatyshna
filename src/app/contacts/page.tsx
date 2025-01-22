import Contacts from "@/components/Contacts";
import css from "../page.module.scss";

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
    <div className={css.page}>
      <Contacts />
    </div>
  );
}
