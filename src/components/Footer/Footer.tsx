"use client";

import Link from "next/link";
import {
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import css from "./Footer.module.scss";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.logoSection}>
          <Logo />
          <p className={css.description}>Онлайн-школа англійської мови</p>
        </div>

        <div className={css.linksSection}>
          <ul className={css.linksList}>
            <li>
              <Link href="/">Головна</Link>
            </li>
            <li>
              <Link href="/about">Про школу</Link>
            </li>
            <li>
              <Link href="/lessons">Уроки</Link>
            </li>
            <li>
              <Link href="/testimonials">Відгуки</Link>
            </li>
            <li>
              <Link href="/contacts">Контакти</Link>
            </li>
          </ul>
        </div>

        <div className={css.contactSection}>
          <ul className={css.contactList}>
            <li>
              <a
                href="https://t.me/zatyshna_support"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                Команда турботи
              </a>
            </li>
          </ul>
        </div>

        <div className={css.socialSection}>
          <p className={css.socialTitle}>Ми в соціальних мережах</p>
          <div className={css.socialIcons}>
            <a
              href="https://t.me/zatyszna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            {/* <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a> */}
          </div>
        </div>
        <p className={css.copy}>© 2025 Zatyshna</p>
      </div>
    </footer>
  );
};

export default Footer;
