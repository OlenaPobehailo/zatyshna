import Container from "@/components/Container";
import Icon from "../../UI/Icon";
import css from "./Features.module.css";

const Features = () => {
  return (
    <section className={`section light ${css.features}`}>
      <Container>
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

        {/* <Link href="/lessons" className={css.button}>
        Команда турботи
        </Link> */}

        <a
          href="https://t.me/zatyshna_support"
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          Команда турботи
        </a>
      </Container>
    </section>
  );
};

export default Features;
