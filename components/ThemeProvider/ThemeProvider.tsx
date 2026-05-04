export interface ThemeProviderProps {
  /** Active visual theme. */
  theme: "light" | "dark" | "highContrast";
  /** Active layout density. */
  density: "compact" | "comfortable";
  children?: unknown;
}

export function ThemeProvider(_props: ThemeProviderProps) {
  return null;
}

