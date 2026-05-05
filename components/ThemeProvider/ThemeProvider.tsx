import type { ReactNode } from "react";
import "./theme-provider.css";

export interface ThemeProviderProps {
  /** Active visual theme. */
  theme: "light" | "dark" | "highContrast";
  /** Active layout density. */
  density: "compact" | "comfortable";
  children?: ReactNode;
}

export function ThemeProvider({ theme, density, children }: ThemeProviderProps) {
  return (
    <div className="atlas-theme-provider" data-theme={theme} data-density={density}>
      {children}
    </div>
  );
}
