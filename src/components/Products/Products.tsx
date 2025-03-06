import LinkButton from "../UI/LinkButton";
import css from "./Products.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const Products = () => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h3>
          <div className={css.iconWrapper}>
            <Icon icon="mdi:monitor-shimmer" className={css.icon} />
          </div>
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
        <p className={css.cardQuestion}>Що отримаєш?</p>

        <ul>
          <li>Нові слова та вирази з контексту серіалу</li>
          <li>Живі діалоги та сленг</li>
          <li>Дивитимешся улюблене англійською – і розумітимеш більше!</li>
        </ul>
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
          <div className={css.iconWrapper}>
            <Icon icon="mdi:book-open-variant" className={css.icon} />
          </div>
          Книжковий клуб!
        </h3>

        <p>
          Обираємо 1 книжку щомісяця та робимо Zoom meetings, де обговорюємо
          персонажів та події!
        </p>
        {/* <p>
            <strong>500 грн</strong> / місяць
          </p> */}
        <p className={css.cardQuestion}>Що отримаєш?</p>

        <ul>
          <li> Покращиш читання та розуміння тексту</li>
          <li>Навчишся висловлювати свої думки англійською</li>
          <li>Читатимеш більше і з задоволенням!</li>
        </ul>
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
          <div className={css.iconWrapper}>
            <Icon icon="material-symbols:school" className={css.icon} />
          </div>
          Заняття англійської з вчителем!
        </h3>
        <p>
          Ми визначимо твій рівень на пробному занятті та проведемо тебе за
          ручку до вільного C1!
        </p>
        <p className={css.cardQuestion}>Що отримаєш?</p>
        <ul>
          <li>Індивідуальний підхід</li>
          <li>Гнучкий графік</li>
          <li>Навчання без стресу і з результатом!</li>
        </ul>
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
