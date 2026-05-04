export interface CardProps {
  /** Short heading shown at the top of the card. */
  title: string;
  /** Semantic tone for the container. @default "neutral" */
  tone?: "neutral" | "warning" | "danger" | "success";
  /** Card content. */
  children?: unknown;
}

export function Card(_props: CardProps) {
  return null;
}

