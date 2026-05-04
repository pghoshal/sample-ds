export interface AlertProps {
  /** Semantic status tone. */
  tone: "neutral" | "warning" | "danger" | "success";
  /** Short alert title. */
  title: string;
  /** Supporting copy. */
  children?: unknown;
}

export function Alert(_props: AlertProps) {
  return null;
}

