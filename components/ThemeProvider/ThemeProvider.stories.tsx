import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";

const meta = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  argTypes: {
    theme: { options: ["light", "dark", "highContrast"] },
    density: { options: ["compact", "comfortable"] }
  }
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightComfortable: Story = {
  args: {
    theme: "light",
    density: "comfortable",
    children: "Billing risk review"
  }
};

