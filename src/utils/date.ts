/** Formats an ISO date string for display. Returns "" for empty or invalid values. */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("ja-JP");
}
