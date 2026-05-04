import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

export type AtlasButtonVariant = "primary" | "secondary" | "danger";
export type AtlasButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: AtlasButtonVariant;
  size?: AtlasButtonSize;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size = "md", children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`atlas-button atlas-button--${variant} atlas-button--${size}`}
      data-component="button"
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
