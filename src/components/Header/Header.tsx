"use client";

import Link from "next/link";
import { useState } from "react";
import css from "./Header.module.css";
import Burger from "./Burger/Burger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null as string | null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={css.logo}>
          Zatyshna
        </Link>

        <Burger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        <ul className={`${css.navList} ${isMenuOpen ? css.open : ""}`}>
          <li className={css.navItem}>
            <div className={css.dropdown}>
              <Link
                href="/about"
                className={css.navLink}
                onClick={() => toggleDropdown("about")}
              >
                Про школу
              </Link>
            </div>
          </li>
          <li className={css.navItem}>
            <div className={css.dropdown}>
              <Link
                href="/lessons"
                className={css.navLink}
                onClick={() => toggleDropdown("lessons")}
              >
                Уроки
              </Link>
            </div>
          </li>
          <li className={css.navItem}>
            <Link
              href="/testimonials"
              className={css.navLink}
              onClick={closeMenu}
            >
              Відгуки
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/resources" className={css.navLink} onClick={closeMenu}>
              Ресурси
            </Link>
          </li>
          <li className={css.navItem}>
            <Link href="/contacts" className={css.navLink} onClick={closeMenu}>
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
