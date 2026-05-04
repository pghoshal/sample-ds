export interface TextFieldProps {
  /** Visible field label. */
  label: string;
  /** Input purpose. */
  intent: "search" | "text" | "currency";
  /** Controlled value. */
  value?: string;
  /** Controlled change callback. */
  onChange?: (value: string) => void;
}

export function TextField(_props: TextFieldProps) {
  return null;
}

