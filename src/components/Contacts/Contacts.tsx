import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={`section ${css.contacts}`}>
      <h1 className={css.title}>Контакти</h1>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <span className={css.icon}></span>
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
          <span className={css.icon}></span>
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
          <span className={css.icon}></span>
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
    </section>
  );
};

export default Contacts;
