"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Speakers", href: "/speakers" },
  { label: "Tickets", href: "/tickets" },
  { label: "Venue", href: "/venue" },
  { label: "Sponsors", href: "/sponsors" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Janani
        </Link>

        <div className={styles.desktopNav}>
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${
                index === 0 ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`${styles.menuButton} ${
            isOpen ? styles.menuOpen : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}