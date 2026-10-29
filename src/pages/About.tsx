import { SectionHeading } from "../components/common/SectionHeading";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./About.module.css";

const CURRENT_PROJECTS = [
  {
    label: "3D",
    text: "Blender MCPでスタイライズされたファンタジー武器モデルを制作中（ブロッキング段階）",
  },
  {
    label: "MMD",
    text: "東方・アンダーテールのキャラクターを使ったMMD動画制作に取り組み中",
  },
];

export function About() {
  useDocumentTitle("About");

  return (
    <section className="section container">
      <RevealOnScroll>
        <SectionHeading eyebrow="// ABOUT" title="About" level={1} />
      </RevealOnScroll>

      <div className={styles.grid}>
        <RevealOnScroll className={styles.body}>
          <p>
            Web開発、3Dモデリング、ゲーム開発を横断して制作する学生です。React /
            TypeScriptを中心としたコースワークでWeb制作の基礎を学びながら、Blenderでの3Dモデリングや
            Unityを使ったゲーム制作にも取り組んでいます。
          </p>
          <p>
            個人制作では、FastAPI /
            WebSocketを使ったリアルタイム同期アプリや、Firebaseを使ったマルチプレイヤーRPG、UnityによるVRChat向けのゲームワールドなど、Webとゲームの技術をまたいだ制作を行ってきました。
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <span className="eyebrow">// CURRENTLY</span>
          <ul className={styles.list} style={{ marginTop: "1rem" }}>
            {CURRENT_PROJECTS.map((item) => (
              <li key={item.label} className={styles.listItem}>
                <span className="mono">[{item.label}]</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
