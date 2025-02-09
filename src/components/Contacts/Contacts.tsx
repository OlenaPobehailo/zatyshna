import { RiTelegramLine } from "react-icons/ri";
// import Container from "../Container";
import css from "./Contacts.module.scss";
import LinkButton from "../UI/LinkButton";
import Image from "next/image";

const Contacts = () => {
  return (
    <ul className={css.contactList}>
      <li className={css.contactItem}>
        <div className={css.buttonWrapper}>
          <Image
            src="/assets/images/care-team.jpg"
            width="290"
            height="230"
            alt="Команда турботи"
            className={css.image}
          />

          <LinkButton
            name=""
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
            className={`${css.link} `}
          >
            <span className={css.icon}>
              <RiTelegramLine />
            </span>
            <span>Команда турботи</span>
          </LinkButton>
        </div>
      </li>

      <li className={css.contactItem}>
        <div className={css.buttonWrapper}>
          <Image
            src="/assets/images/pupils.jpg"
            width="700"
            height="700"
            alt="Команда турботи"
            className={css.image}
          />

          <LinkButton
            name=""
            href="https://t.me/zatyszna"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <span className={css.icon}>
              <RiTelegramLine />
            </span>
            <span> Наш телеграм канал для учнів</span>
          </LinkButton>
        </div>
      </li>

      <li className={css.contactItem}>
        <div className={css.buttonWrapper}>
          <Image
            src="/assets/images/teachers.jpg"
            width="290"
            height="230"
            alt="Команда турботи"
            className={css.image}
          />

          <LinkButton
            name=""
            href="https://t.me/sashkaenglish"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <span className={css.icon}>
              <RiTelegramLine />
            </span>
            <span> Наш телеграм канал для вчителів</span>
          </LinkButton>
        </div>
      </li>
    </ul>
  );
};

export default Contacts;
