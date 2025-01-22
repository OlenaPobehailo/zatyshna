import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/UI/Icon";
import Container from "@/components/Container";
import css from "./Sasha.module.scss";

const Sasha = () => {
  return (
    <section className={`section ${css.sasha}`} id="info">
      <Container>
        <div className={css.info}>
          <div className={css.photoWrapper}>
            <Image
              className={css.photo}
              src="/assets/images/main-photo.jpg"
              width="600"
              height="800"
              alt=""
            />
          </div>
          <div className={css.infoWrapper}>
            <p className={css.greeting}>Олександра</p>
            <h2>
              засновниця школи <span>Затишна</span>
            </h2>

            <ul className={css.description}>
              <li>
                <Icon
                  name="icon-question"
                  className={`${css.icon} ${css.question}`}
                />
                Набридли нудні підручники та вчителі, які засуджують за помилки?
              </li>
              <li>
                <Icon
                  name="icon-check"
                  className={`${css.icon} ${css.check}`}
                />
                Хочеш заговорити та мати твердий С1?
              </li>
              <li>
                <Icon
                  name="icon-arrow"
                  className={`${css.icon} ${css.arrow}`}
                />
                Тоді тобі до&nbsp;<Link href="/about">Zatyshna!</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sasha;
