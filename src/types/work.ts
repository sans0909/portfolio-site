export type WorkCategory = "web" | "game" | "3d";

export interface Work {
  id: string;
  title: string;
  category: WorkCategory;
  summary: string;
  description: string;
  tech: string[];
  role?: string;
  link?: string;
}

export const WORK_CATEGORY_LABEL: Record<WorkCategory, string> = {
  web: "WEB",
  game: "GAME",
  "3d": "3D",
};
