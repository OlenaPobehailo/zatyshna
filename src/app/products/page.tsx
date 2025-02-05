import Products from "@/components/Products/Products";
import styles from "../page.module.scss";

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <Products />;
    </div>
  );
}
