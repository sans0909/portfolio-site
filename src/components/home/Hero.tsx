import { Link } from "react-router-dom";
import { WireframeShape } from "../common/WireframeShape";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`grid-canvas ${styles.hero}`}>
      <div className={styles.hud} aria-hidden="true">
        <span className="mono">X:00.42</span>
        <span className="mono">Y:12.87</span>
        <span className="mono">Z:00.00</span>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">// PORTFOLIO — WEB / 3D / GAME DEV</span>
          <h1 className={styles.title}>前田健翔</h1>
          <p className={styles.lead}>
            Web開発、3Dモデリング、ゲーム開発を横断して制作しています。React /
            TypeScriptでのWeb制作と、BlenderやUnityを使った3D・ゲーム制作を並行して進めています。
          </p>
          <div className={styles.actions}>
            <Link to="/works" className="btn btn-primary">
              Worksを見る
            </Link>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.shapeWrap}>
          <WireframeShape size={320} />
        </div>
      </div>
    </section>
  );
}
