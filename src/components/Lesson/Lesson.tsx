import css from "./Lesson.module.css";

const Lesson = () => {
  return (
      <section className={`section ${css.lesson}`}>
        <ul className={css.lessonList}>
          <li className={css.lessonItem}>
            <div className={css.lessonHeader}>
              <h3 className={css.lessonTitle}>Індивідуальні заняття</h3>
              {/* <p className={css.lessonPrice}>500 грн / 60 хвилин</p> */}
            </div>
            <ul className={css.lessonFeatures}>
              <li>Індивідуальний підхід</li>
              <li>Персоналізована програма</li>
              <li>Гнучкий розклад</li>
              <li>Автентичні матеріали під Ваші інтереси та потреби</li>
            </ul>
          </li>

          <li className={css.lessonItem}>
            <div className={css.lessonHeader}>
              <h3 className={css.lessonTitle}>
                Групові заняття <br />
              </h3>
              <p className={css.lessonSubtitle}>(3-4 студенти)</p>
              {/* <p className={css.lessonPrice}>300 грн / 60 хвилин</p> */}
            </div>
            <ul className={css.lessonFeatures}>
              <li>Робота в групах</li>
              <li>Додаткові проєкти</li>
              <li>Бальна система</li>
              <li>Сталий графік </li>
            </ul>
          </li>

          <li className={css.lessonItem}>
            <div className={css.lessonHeader}>
              <h3 className={css.lessonTitle}>
                Заняття з Олександрою <br />
                <span>(засновниця школи)</span>
              </h3>
              <p className={css.lessonSubtitle}>Групові заняття (4 студенти)</p>
              {/* <p className={css.lessonPrice}>500 грн / 60 хвилин</p> */}
            </div>

            <ul className={css.lessonFeatures}>
              <li>Інтенсивна програма</li>
              <li>Багато практики говоріння (дуже)</li>
              <li>Домашні завдання - проєкти</li>
              <li>
                Безкоштовна додаткова практика поза заняттями listening /
                reading / speaking / writing and vocabulary
              </li>
            </ul>
          </li>
        </ul>
      </section>
  );
};

export default Lesson;
