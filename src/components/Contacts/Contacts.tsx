import { RiTelegramLine } from "react-icons/ri";
import Container from "../Container";
import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={`section ${css.contacts}`}>
      <Container>
        <div className={css.contactWrapper}>
          <h1 className={css.contactTitle}>Контакти</h1>
          <ul className={css.contactList}>
            <li className={css.contactItem}>
              <span className={css.icon}>
                <RiTelegramLine />
              </span>
              <a
                href="https://t.me/zatyshna_support"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                Команда турботи
              </a>
            </li>
            <li className={css.contactItem}>
              <span className={css.icon}>
                <RiTelegramLine />
              </span>
              <a
                href="https://t.me/zatyszna"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                Наш телеграм канал для учнів
              </a>
            </li>
            <li className={css.contactItem}>
              <span className={css.icon}>
                <RiTelegramLine />
              </span>
              <a
                href="https://t.me/sashkaenglish"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                Наш телеграм канал для вчителів
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
