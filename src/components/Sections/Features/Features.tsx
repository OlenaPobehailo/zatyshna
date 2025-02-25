import Container from "@/components/Container";
import Icon from "../../UI/Icon";
import LinkButton from "@/components/UI/LinkButton";
import css from "./Features.module.scss";

const Features = () => {
  return (
    <div className={css.features}>
      <h2 className={css.titleHidden}>
        Особливості онлайн-школи англійської мови Затишна
      </h2>

      <Container backgroundColor="var(--white-color)">
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

        <div className={css.buttonWrapper}>
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Команда турботи
          </LinkButton>

          <LinkButton name="secondary" href="/lessons">
            Дізнатись більше
          </LinkButton>
        </div>
      </Container>
    </div>
  );
};

export default Features;
