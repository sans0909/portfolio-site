import styles from "./Footer.module.css";

// TODO: replace with real profile links before publishing.
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/sans0909" },
  { label: "X", href: "https://x.com/sarua0909" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className="mono">// EOF — 前田健翔</span>
        <ul className={styles.links}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer" className="mono">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className={`mono ${styles.copy}`}>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
