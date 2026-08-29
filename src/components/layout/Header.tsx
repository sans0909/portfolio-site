import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/works", label: "Works" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <span className="mono">前田健翔</span>
          <span className={styles.logoDot} aria-hidden="true" />
        </NavLink>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`} />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `mono ${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
