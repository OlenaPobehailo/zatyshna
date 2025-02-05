import Lessons from "@/components/Sections/Lessons";
import styles from "../page.module.scss";
import css from "./LessonsPage.module.scss";
import Container from "@/components/Container";

export default function LessonsPage() {
  return (
    <div className={styles.page}>
      <Container>
        <section className={css.intro}>
          <h1 className="titleHidden">Як проходять уроки</h1>
          <div className={css.container}>
            <h2>💡 Вчитися – це легко, коли навчання побудоване під вас</h2>
            <p className={css.highlight}>
              🌿 Вивчайте англійську комфортно та ефективно
            </p>
            <p>
              Ми підберемо формат, який вам найбільше підходить:
              індивідуальний підхід,
              робота в групах чи
              інтенсивні заняття з засновницею школи Олександрою. Обирайте
              своє!
            </p>
          </div>
        </section>

        <Lessons />
      </Container>
    </div>
  );
}
