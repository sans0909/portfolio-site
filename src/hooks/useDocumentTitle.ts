import { useEffect } from "react";

const SITE_TITLE = "前田健翔 | Portfolio";

/**
 * Sets the browser tab title for the current page. This is a single-page
 * app, so without this every route would keep the title from index.html.
 * Passing nothing restores the site-wide title.
 */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | 前田健翔 Portfolio` : SITE_TITLE;
  }, [pageTitle]);
}
