import Container from "../Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import css from "./About.module.scss";

const About = () => {
  return (
    <Container>
      <section className={css.about}>
        <div className={css.container}>
          <ul className={css.features}>
            <li className={css.feature}>
              <h3>
                <Icon icon="mdi:home-heart" className={css.icon} />
                Живі уроки без зубріння
              </h3>
              <p>
                Наші заняття – це справжнє занурення в мову. Ми вчимо англійську
                через серіали, фільми, дискусії та сучасні матеріали.
              </p>
            </li>

            <li className={css.feature}>
              <h3>
                <Icon icon="mdi:coffee-outline" className={css.icon} />
                Комфорт, який відчувається
              </h3>
              <p>
                Вчися у затишній атмосфері – бери улюблений чай чи каву на
                заняття та насолоджуйся кожною хвилиною.
              </p>
            </li>

            <li className={css.feature}>
              <h3>
                <Icon icon="mdi:target" className={css.icon} />
                &nbsp;Результат, за який ми відповідаємо
              </h3>
              <p>
                Ми гарантуємо твій прогрес і підтримку на всіх етапах навчання:
              </p>
              <ul>
                <li>
                  <Icon
                    icon="mdi:account-cog-outline"
                    className={css.smallIcon}
                  />
                  Індивідуальна програма під твої цілі
                </li>
                <li>
                  {" "}
                  <Icon icon="mdi:clipboard-check" className={css.smallIcon} />
                  Гарантований рівень C1
                </li>
                <li>
                  <Icon
                    icon="mdi:hand-heart-outline"
                    className={css.smallIcon}
                  />
                  Цілодобовий фідбек – ми завжди поруч
                </li>
              </ul>
            </li>

            <li className={css.feature}>
              <h3>
                <Icon icon="mdi:web" className={css.icon} />
                Англійська, яка стане частиною твого життя
              </h3>
              <p>
                Крім основних занять, ти матимеш безкоштовну додаткову практику:
              </p>
              <ul>
                <li>
                  <Icon icon="mdi:headphones" className={css.smallIcon} />
                  Listening
                </li>
                <li>
                  <Icon
                    icon="mdi:book-open-variant"
                    className={css.smallIcon}
                  />
                  Reading
                </li>
                <li>
                  <Icon icon="mdi:account-voice" className={css.smallIcon} />
                  Speaking
                </li>
                <li>
                  <Icon icon="mdi:pencil-outline" className={css.smallIcon} />
                  Writing
                </li>
                <li>
                  <Icon icon="mdi:dictionary" className={css.smallIcon} />
                  Vocabulary
                </li>
              </ul>
            </li>

            <li className={css.feature}>
              <h3>
                <Icon icon="mdi:note-edit-outline" className={css.icon} />
                Домашка, яку хочеться виконувати
              </h3>
              <p>
                Ніякої нудної рутини – тільки цікаві, практичні завдання, що
                справді допомагають заговорити англійською&nbsp;
                <Icon icon="mdi:magic-staff" className={css.smallIcon} />
              </p>
            </li>
          </ul>

          <div className={css.cta}>
            <p>
              Приєднуйся до Zatyshna – школи, де англійська стає частиною твого
              життя.
            </p>
            <p>Записуйся на пробне заняття та почни свій шлях вже зараз!</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
