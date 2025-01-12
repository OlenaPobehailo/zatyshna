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
            <span>Заняття проводяться за неймовірними матеріалами!</span>
          </li>
          <li>
            <Icon name="icon-heart" className={css.icon} />
            <span> Розмовні заняття за серіалами та фільмами</span>
          </li>
          <li>
            <Icon name="icon-heart" className={css.icon} />
            <span>
              Чай та кавка посеред заняття для ще більш затишної атмосфери
            </span>
          </li>
          <li>
            <Icon name="icon-heart" className={css.icon} />
            <span>Цікава домашка</span>
          </li>
          <li>
            <Icon name="icon-heart" className={css.icon} />
            <span>Індивідуальна програма та підхід під кожного учня</span>
          </li>
          <li>
            <Icon name="icon-heart" className={css.icon} />
            <span>Гарантія результату</span>
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
