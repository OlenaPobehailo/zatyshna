import Image from "next/image";
import Container from "../Container";
import css from "./Sasha.module.css";

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
            <p className={css.greeting}>Привіт, я Саша</p>
            <h1>
              Та я вчитель <span>затишної англійської</span>
            </h1>
            <h2>
              Тут ти знайдеш безпечне та тепле ком’юніті та дуже багато
              корисностей англійської. Я допоможу тобі розібратись та справді
              вивчити мову в безпечній та затишній атмосфері.
            </h2>
          </div>
        </div>
        <ul className={css.help}>
          <li className={css.card}>
            <Image
              className={css.image}
              src="/assets/images/features.png"
              width="1024"
              height="1024"
              alt=""
            />
            <div className={css.description}>
              <p className={css.descriptionTitle}>
                Розберемося з твоїми знаннями
              </p>
              <p className={css.descriptionText}>
                Оцінимо, що вже знаєш, а що варто підтягнути, щоб вчитися
                максимально ефективно.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.image}
              src="/assets/images/features.png"
              width="1024"
              height="1024"
              alt=""
            />
            <div className={css.description}>
              <p className={css.descriptionTitle}>
                Створимо план саме для тебе
              </p>
              <p className={css.descriptionText}>
                Розробимо індивідуальну програму навчання, враховуючи твої
                інтереси, цілі та рівень.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.image}
              src="/assets/images/features.png"
              width="1024"
              height="1024"
              alt=""
            />
            <div className={css.description}>
              <p className={css.descriptionTitle}>Покажу, як все це працює</p>
              <p className={css.descriptionText}>
                Поділюся своєю методикою, яка допоможе легко і швидко засвоювати
                нову інформацію.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.image}
              src="/assets/images/features.png"
              width="1024"
              height="1024"
              alt=""
            />
            <div className={css.description}>
              <p className={css.descriptionTitle}>
                Більше спілкування — результат
              </p>
              <p className={css.descriptionText}>
                Зосередимося на практичних діалогах для застосування мови,
                незалежно від рівня.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.image}
              src="/assets/images/features.png"
              width="1024"
              height="1024"
              alt=""
            />
            <div className={css.description}>
              <p className={css.descriptionTitle}>Знайдемо ідеальний темп</p>
              <p className={css.descriptionText}>
                Домовимося про зручний графік і темп навчання, щоб усе підходило
                саме тобі.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.image}
              src="/assets/images/features.png"
              width="1024"
              height="1024"
              alt=""
            />
            <div className={css.description}>
              <p className={css.descriptionTitle}>Гнучкість у навчанні</p>
              <p className={css.descriptionText}>
                Будемо відстежувати твій прогрес, адаптувати програму та ставити
                нові цілі по ходу навчання.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default Sasha;
