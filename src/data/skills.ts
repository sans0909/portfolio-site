export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "FRONTEND",
    items: ["React", "TypeScript", "Vite", "JavaScript", "HTML / CSS"],
  },
  {
    label: "BACKEND / INTEGRATION",
    items: ["FastAPI", "WebSocket", "Firebase"],
  },
  {
    label: "3D / CREATIVE",
    items: ["Blender", "Blender MCP", "Three.js", "3Dテクスチャ編集 (PIL / NumPy)"],
  },
  {
    label: "TOOLS",
    items: ["Canva", "Git / GitHub"],
  },
];
