"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import LinkButton from "@/components/UI/LinkButton";
import Container from "../../Container";
import css from "./Lessons.module.scss";
import { usePathname } from "next/navigation";

const Lessons = () => {
  const pathname = usePathname();
  const isLessonsPage = pathname === "/lessons";

  return (
    <div className={`${css.lessons} ${isLessonsPage ? css.lessonsNoBg : ""}`}>
      <h2 className={css.titleHidden}>
        Індивідуальні та групові заняття в Онлайн-школі англійської мови Затишна
      </h2>
      <Container>
        <ul className={css.lessonList}>
          <li className={css.lessonItem}>
            <div className={css.lessonHeader}>
              <div className={css.iconWrapper}>
                <Icon icon="mdi:account" className={css.icon} />
              </div>
              <h3 className={css.lessonTitle}>Заняття з вчителем школи</h3>
              <p className={css.lessonSubtitle}>Індивідуальні заняття</p>
              <p className={css.lessonPrice}>600 грн / 60 хвилин</p>
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
              <div className={css.iconWrapper}>
                <Icon icon="mdi:account-group" className={css.icon} />
              </div>
              <h3 className={css.lessonTitle}>
                Заняття з вчителем школи
              </h3>
              <p className={css.lessonSubtitle}>Групові заняття (4 студенти)

              </p>
              <p className={css.lessonPrice}>350 грн / 60 хвилин</p>
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
              <div className={css.iconWrapper}>
                <Icon icon="mdi:school" className={css.icon} />
              </div>
              <h3 className={css.lessonTitle}>
                Заняття з Олександрою <br />
                <span>(засновниця школи)</span>
              </h3>
              <p className={css.lessonSubtitle}>Групові заняття (4 студенти)</p>
              <p className={css.lessonPrice}>500 грн / 60 хвилин</p>
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
        <div className={css.buttonWrapper}>
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Записатись на заняття
          </LinkButton>

          <LinkButton name="secondary" href="/products">
            Дізнатись більше
          </LinkButton>
        </div>
      </Container>
    </div>
  );
};

export default Lessons;
