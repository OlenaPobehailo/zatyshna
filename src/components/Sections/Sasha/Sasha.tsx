import Image from "next/image";
import Container from "../../Container";
import css from "./Sasha.module.css";
import Link from "next/link";
import Icon from "@/components/UI/Icon";

const Sasha = () => {
  return (
    <Container>
      <section className={`section ${css.sasha}`} id="info">
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
              засновниця школи
              {/* <span>Затишна</span> */}
            </h2>

            <ul className={css.description}>
              <li>
                <Icon name="icon-question" className={css.icon} />
                Набридли нудні підручники та вчителі, які засуджують за помилки?
              </li>
              <li>
                <Icon name="icon-check" className={css.icon} />
                Хочеш заговорити та мати твердий С1?
              </li>
              <li>
                <Icon name="icon-arrow" className={css.icon} />
                Тоді тобі до&nbsp;<Link href="/about">Zatyshna!</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className={css.buttonContainer}>
            <Link href="/lessons" className={css.button}>
              Індивідуальні заняття
            </Link>
            <Link href="/lessons" className={css.button}>
              Групові заняття
            </Link>
            <Link href="/lessons" className={css.button}>
              Заняття з Олександрою
            </Link>
          </div> */}
      </section>
      {/* <section className={`section ${css.features}`}>
        

        <ul className={css.featuresList}>
          <li>&#x1F497; Заняття проводяться за неймовірними матеріалами!</li>
          <li>&#x1F497; Розмовні заняття за серіалами та фільмами</li>
          <li>
            &#x1F497; Чай та кавка посеред заняття для ще більш затишної
            атмосфери
          </li>
          <li>&#x1F497; Цікава домашка</li>
          <li>&#x1F497; Індивідуальна програма та підхід під кожного учня</li>
          <li>&#x1F497; Гарантія результату</li>
        </ul>
        <div className={css.buttonContainer}>
          <Link href="/lessons" className={css.button}>Індивідуальні заняття</Link>
          <Link href="/lessons" className={css.button}>Групові заняття</Link>
          <Link href="/lessons" className={css.button}>Заняття з Олександрою</Link>
        </div>
      </section> */}
    </Container>
  );
};

export default Sasha;
