import Products from "@/components/Products/Products";
import css from "../page.module.scss";
import Container from "@/components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductsPage() {
  return (
    <div className={css.page}>
      <Container>
        <section className={css.intro}>
          <h2 className={css.pageTitle}>Англійська у вільний час?</h2>
          <p className={`${css.pageSubtitleCenter} ${css.pageSubtitle}`}>
            Обирай своє
            <Icon icon="fluent:edit-settings-24-regular" className={css.icon} />
          </p>
        </section>
      </Container>
      <Products />;
    </div>
  );
}
