import Container from "@/components/Container";
import LinkButton from "@/components/UI/LinkButton";
const page = () => {
  return (
    <div className="notFound">
      <Container>
        <h1 className="heading">404</h1>
        <p className="text">
          Схоже, ви заблукали.
        </p>

        <p className="text">Але не хвилюйтеся, ми допоможемо знайти шлях! </p>
        <div className="buttons">
          <LinkButton
            name="primary"
            href="https://t.me/zatyshna_support"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: "1rem" }}
          >
            Вежа турботи
          </LinkButton>

          <LinkButton name="primary" href="/#info">
            Головна вежа
          </LinkButton>
        </div>
      </Container>
    </div>
  );
};

export default page;
