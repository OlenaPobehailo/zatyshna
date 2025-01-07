import Image from "next/image";
import Container from "../Container";
import css from "./Sasha.module.css";
import Link from "next/link";

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
            <h1>
              засновниця школи <span>Затишна</span>
            </h1>
          </div>
        </div>
      </section>
      <section className={`section ${css.features}`}>
        <div className={css.description}>
          <p>
            Набридли нудні підручники та вчителі, які засуджують за помилки?&#x1F914;
          </p>
          <h2>Хочеш заговорити та мати твердий С1?&#x2714;</h2>
          <h2>
            Тоді тобі до <Link href="/about">Zatyshna!</Link>&#x1F490;
          </h2>
        </div>

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
      </section>
    </Container>
  );
};

export default Sasha;
