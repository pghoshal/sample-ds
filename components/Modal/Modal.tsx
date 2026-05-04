export interface ModalProps {
  /** Dialog heading. */
  title: string;
  /** ARIA role. Use alertdialog for destructive confirmations. */
  role: "dialog" | "alertdialog";
  /** Modal content. */
  children?: unknown;
}

export function Modal(_props: ModalProps) {
  return null;
}

