import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    gap: { options: ["2", "3", "4", "6", "8"] },
    direction: { options: ["row", "column"] }
  }
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalSection: Story = {
  args: {
    gap: "6",
    direction: "column",
    children: "Account health, invoice risk, and next actions"
  }
};

