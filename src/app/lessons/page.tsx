import Lessons from "@/components/Sections/Lessons";
import Container from "@/components/Container";
import css from "../page.module.scss";

export default function LessonsPage() {
  return (
    <div className={css.page}>
      <Container>
        <section className={css.intro}>
          <h2 className={css.pageTitle}>
            Вчитися – це легко, коли навчання побудоване під вас
          </h2>
          <p className={css.pageSubtitle}>
            Вивчайте англійську комфортно та ефективно
          </p>
          <p className={css.pageSubtitle}>
            Ми підберемо формат, який вам найбільше підходить: індивідуальний
            підхід, робота в групах чи інтенсивні заняття з засновницею школи
            Олександрою. Обирайте своє!
          </p>
        </section>
      </Container>
      <Lessons />
    </div>
  );
}
