import Container from "../Container";
import LinkButton from "../UI/LinkButton";
import css from "./About.module.scss";

const About = () => {
  return (
    <Container>
      <section className={css.about}>
        <div className={css.container}>
          <ul className={css.features}>
            <li className={css.feature}>
              <h3>🌸&nbsp;Живі уроки без зубріння</h3>
              <p>
                Наші заняття – це справжнє занурення в мову. Ми вчимо англійську
                через серіали, фільми, дискусії та сучасні матеріали.
              </p>
            </li>

            <li className={css.feature}>
              <h3>☕️ Комфорт, який відчувається</h3>
              <p>
                Вчися у затишній атмосфері – бери улюблений чай чи каву на
                заняття та насолоджуйся кожною хвилиною&nbsp;📖💭
              </p>
            </li>

            <li className={css.feature}>
              <h3>🎯&nbsp;Результат, за який ми відповідаємо</h3>
              <p>
                Ми гарантуємо твій прогрес і підтримку на всіх етапах навчання:
              </p>
              <ul>
                <li>✨ Індивідуальна програма під твої цілі</li>
                <li>✨ Гарантований рівень C1</li>
                <li>✨ Цілодобовий фідбек – ми завжди поруч</li>
              </ul>
            </li>

            <li className={css.feature}>
              <h3>📚&nbsp;Англійська, яка стане частиною твого життя</h3>
              <p>
                Крім основних занять, ти матимеш безкоштовну додаткову практику:
              </p>
              <ul>
                <li>
                  ✨&nbsp;Listening | Reading | Speaking | Writing | Vocabulary
                </li>
              </ul>
            </li>

            <li className={css.feature}>
              <h3>💡&nbsp;Домашка, яку хочеться виконувати</h3>
              <p>
                Ніякої нудної рутини – тільки цікаві, практичні завдання, що
                справді допомагають заговорити англійською&nbsp;💫
              </p>
            </li>
          </ul>

          <div className={css.cta}>
            <p>
              💕&nbsp;Приєднуйся до Zatyshna – школи, де англійська стає
              частиною твого життя
            </p>
            <p>
              📩&nbsp;Записуйся на пробне заняття та почни свій шлях вже зараз!
            </p>
            <div className={css.buttonWrapper}>
              <LinkButton
                name="primary"
                href="https://t.me/zatyshna_support"
                target="_blank"
                rel="noopener noreferrer"
              >
                Записатись на заняття
              </LinkButton>

              <LinkButton name="secondary" href="/lessons">
                Дізнатись більше
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
