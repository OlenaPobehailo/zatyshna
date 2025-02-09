import LinkButton from "../UI/LinkButton";
import css from "./Products.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const Products = () => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h3>
          <Icon icon="mdi:monitor-shimmer" className={css.icon} />
          Марафони за серіалами та фільмами
        </h3>

        <p>
          Тижневе навчання для покращення ваших скілів, розроблене за вашим
          улюбленим серіалом!
        </p>
        <p>
          (Друзі / Пліткарка / Гаррі Поттер / Емілі в Парижі / Бріджертони / Гра
          Престолів та інші)
        </p>
        {/* <p>
            <strong>300 грн</strong> / тиждень навчання
          </p> */}
        <p>
          Рівень <strong>A2 та вище</strong> ✨
        </p>

        <div className={css.buttonWrapper}>
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Замовити
          </LinkButton>

          <LinkButton name="secondary" href="/lessons">
            Дізнатись більше
          </LinkButton>
        </div>
      </div>

      <div className={css.card}>
        <h3>
          <Icon icon="mdi:book-open-variant" className={css.icon} />
          Книжковий клуб!
        </h3>

        <p>
          Обираємо 1 книжку щомісяця та робимо Zoom meetings, де обговорюємо
          персонажів та події!
        </p>
        {/* <p>
            <strong>500 грн</strong> / місяць
          </p> */}
        <p>
          Рівень <strong>B1 та вище</strong> ✨
        </p>
        <div className={css.buttonWrapper}>
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Приєднатись
          </LinkButton>
          <LinkButton name="secondary" href="/lessons">
            Дізнатись більше
          </LinkButton>
        </div>
      </div>

      <div className={css.card}>
        <h3>
          <Icon icon="material-symbols:school" className={css.icon} /> Заняття
          англійської з вчителем!
        </h3>
        <p>
          Ми визначимо твій рівень на пробному занятті та проведемо тебе за
          ручку до вільного C1!
        </p>
        <p>
          Для <strong>усіх рівнів</strong> ✨
        </p>
        <div className={css.buttonWrapper}>
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пробне заняття
          </LinkButton>
          <LinkButton name="secondary" href="/lessons">
            Дізнатись більше
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Products;
