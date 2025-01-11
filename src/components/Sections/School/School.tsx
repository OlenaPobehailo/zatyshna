import Icon from "../../UI/Icon";
import css from "./School.module.css";

const School = () => {
  return (
    <section>

    <ul className={css.featuresList}>
      <li>
        <Icon name="icon-heart" className={css.icon} />
        Заняття проводяться за неймовірними матеріалами!
      </li>
      <li>
        <Icon name="icon-heart" className={css.icon} />
        Розмовні заняття за серіалами та фільмами
      </li>
      <li>
        <Icon name="icon-heart" className={css.icon} />
        Чай та кавка посеред заняття для ще більш затишної атмосфери
      </li>
      <li>
        <Icon name="icon-heart" className={css.icon} />
        Цікава домашка
      </li>
      <li>
        <Icon name="icon-heart" className={css.icon} />
        Індивідуальна програма та підхід під кожного учня
      </li>
      <li>
        <Icon name="icon-heart" className={css.icon} />
        Гарантія результату
      </li>
    </ul>
    </section>
  );
};

export default School;
