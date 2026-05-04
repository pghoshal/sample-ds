import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    tone: { options: ["neutral", "success", "warning", "danger"] }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HighRisk: Story = {
  args: {
    tone: "danger",
    children: "High risk"
  }
};

