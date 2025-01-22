import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "../styles/globals.scss";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Онлайн-школа англійської мови Затишна",
  description:
    "Онлайн-школа англійської мови Затишна —  вивчення англійської. Дистанційне навчання дорослих. Групові та індивідуальні заняття.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
