export interface ButtonProps {
  /** Visual intent. Use danger only for destructive account actions. */
  variant: "primary" | "secondary" | "danger";
  /** Control density. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Specific action label. */
  children: string;
  /** Disabled buttons must still explain unavailable actions nearby. */
  disabled?: boolean;
  /** @deprecated Use children for visible labels and aria-label only for icon-only actions. */
  ariaLabel?: string;
}

export function Button(_props: ButtonProps) {
  return null;
}

