import LinkButton from "../UI/LinkButton";
import css from "./Products.module.scss";

const Products = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        Англійська у вільний час?
        <br />
        Обирай своє ✨
      </h2>

      <div className={css.card}>
        <h3>📺 Марафони за серіалами та фільмами</h3>
        <p>
          Тижневе навчання для покращення ваших скілів, розроблене за вашим
          улюбленим серіалом!
        </p>
        <p>
          <strong>
            (Друзі / Пліткарка / Гаррі Поттер / Емілі в Парижі / Бріджертони /
            Гра Престолів та інші)
          </strong>
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
        </div>
      </div>

      <div className={css.card}>
        <h3>📚 Книжковий клуб!</h3>
        <p>
          Обираємо 1 книжку щомісяця та робимо <strong>Zoom meetings</strong>,
          де обговорюємо персонажів та події!
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
        </div>
      </div>

      <div className={css.card}>
        <h3>🎓 Заняття англійської з вчителем!</h3>
        <p>
          Ми визначимо твій рівень на пробному занятті та проведемо тебе за
          ручку до вільного <strong>C1</strong> ✨
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
        </div>
      </div>
    </div>
  );
};

export default Products;
