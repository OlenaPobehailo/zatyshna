import Contacts from "@/components/Contacts";
import Container from "@/components/Container/Container";
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
      <Container>
        <section className={css.intro}>
          <h1 className={css.pageTitle}>Контакти</h1>
          <p className={css.pageSubtitle}>
            Навчання – це не лише уроки, а й спільнота, що надихає. Зв’яжися з
            нами, і ми разом зробимо цей шлях цікавим та продуктивним!
          </p>
        </section>
      </Container>
      <Contacts />
    </div>
  );
}
