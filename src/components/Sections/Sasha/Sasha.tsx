import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/UI/Icon";
import Container from "@/components/Container";
import css from "./Sasha.module.scss";
import "../../../styles/globals.scss";
const Sasha = () => {
  return (
    <Container
    // backgroundColor="var(--main-bg)"
    >
      <div className={css.info}>
        <ul className={css.description}>
          <li>
            <div className={css.customIconWrapper}>
              <Icon
                name="icon-question"
                className={`${css.icon} ${css.question}`}
              />
            </div>
            Набридли нудні підручники та вчителі, які засуджують за помилки?
          </li>
          <li>
            <div className={css.customIconWrapper}>
              <Icon name="icon-check" className={`${css.icon} ${css.check}`} />
            </div>
            Хочеш заговорити та мати твердий С1?
          </li>
          <li>
            <div className={css.customIconWrapper}>
              <Icon name="icon-arrow" className={`${css.icon} ${css.arrow}`} />
            </div>
            Тоді тобі до&nbsp;
            <Link className={css.link} href="/about">
              Zatyshna!
            </Link>
          </li>
        </ul>

        <div className={css.photoWrapper}>
          <Image
            className={css.photo}
            src="/assets/images/main-photo.jpg"
            width="959"
            height="1280"
            alt=""
          />
        </div>

        <div className={css.infoWrapper}>
          <div className={css.textBlock}>
            <p className={css.greeting}>Олександра</p>
            <h2>
              засновниця школи <span>Zatyshna</span>
            </h2>
          </div>
          <ul className={css.descriptionDesktop}>
            <li>
              <div className={css.customIconWrapper}>
                <Icon
                  name="icon-question"
                  className={`${css.icon} ${css.question}`}
                />
              </div>
              Набридли нудні підручники та вчителі, які засуджують за помилки?
            </li>
            <li>
              <div className={css.customIconWrapper}>
                <Icon
                  name="icon-check"
                  className={`${css.icon} ${css.check}`}
                />
              </div>
              Хочеш заговорити та мати твердий С1?
            </li>
            <li>
              <div className={css.customIconWrapper}>
                <Icon
                  name="icon-arrow"
                  className={`${css.icon} ${css.arrow}`}
                />
              </div>
              Тоді тобі до&nbsp;
              <Link className={css.link} href="/about">
                Zatyshna!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Sasha;
