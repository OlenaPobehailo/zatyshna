"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Burger from "./Burger";
import Logo from "../Logo";
import css from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={css.logo} onClick={closeMenu}>
          <Logo />
        </Link>

        <Burger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <ul className={`${css.navList} ${isMenuOpen ? css.open : ""}`}>
          <li className={css.navItem}>
            <div className={css.dropdown}>
              <Link
                href="/about"
                className={`${css.navLink} ${
                  pathname === "/about" ? css.active : ""
                }`}
                onClick={closeMenu}
              >
                Про школу
              </Link>
            </div>
          </li>
          <li className={css.navItem}>
            <div className={css.dropdown}>
              <Link
                href="/lessons"
                className={`${css.navLink} ${
                  pathname === "/lessons" ? css.active : ""
                }`}
                onClick={closeMenu}
              >
                Уроки
              </Link>
            </div>
          </li>
          <li className={css.navItem}>
            <Link
              href="/testimonials"
              className={`${css.navLink} ${
                pathname === "/testimonials" ? css.active : ""
              }`}
              onClick={closeMenu}
            >
              Відгуки
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/products"
              className={`${css.navLink} ${
                pathname === "/products" ? css.active : ""
              }`}
              onClick={closeMenu}
            >
              Продукти
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/contacts"
              className={`${css.navLink} ${
                pathname === "/contacts" ? css.active : ""
              }`}
              onClick={closeMenu}
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
