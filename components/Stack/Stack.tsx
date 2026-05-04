export interface StackProps {
  /** Spacing token step. */
  gap: "2" | "3" | "4" | "6" | "8";
  /** Layout direction. @default "column" */
  direction?: "row" | "column";
  children?: unknown;
}

export function Stack(_props: StackProps) {
  return null;
}

