import { Pressable, Text } from "react-native";
import type { PressableProps } from "react-native";

export type AtlasButtonVariant = "primary" | "secondary" | "danger";
export type AtlasButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends PressableProps {
  variant: AtlasButtonVariant;
  size?: AtlasButtonSize;
  children: string;
}

export function Button({ variant, size = "md", children, ...props }: ButtonProps) {
  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      style={({ pressed }) => [
        { opacity: pressed ? 0.88 : 1 },
        styles.base,
        styles[variant],
        styles[size],
      ]}
    >
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
}

const styles = {
  base: { borderRadius: 10, alignItems: "center" as const, justifyContent: "center" as const },
  primary: { backgroundColor: "#0B5FFF" },
  secondary: { backgroundColor: "#EEF2FF" },
  danger: { backgroundColor: "#C5221F" },
  sm: { minHeight: 32, paddingHorizontal: 12 },
  md: { minHeight: 40, paddingHorizontal: 16 },
  lg: { minHeight: 48, paddingHorizontal: 20 },
  label: { color: "#FFFFFF", fontWeight: "700" as const },
};
