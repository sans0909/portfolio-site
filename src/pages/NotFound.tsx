import { Link } from "react-router-dom";
import { WireframeShape } from "../components/common/WireframeShape";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./NotFound.module.css";

export function NotFound() {
  useDocumentTitle("ページが見つかりません");

  return (
    <div className={`grid-canvas ${styles.wrap}`}>
      <WireframeShape size={140} />
      <span className="eyebrow">// ERROR</span>
      <h1 className={`mono ${styles.code}`}>0x404</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link to="/" className="btn btn-primary">
        Homeに戻る
      </Link>
    </div>
  );
}
