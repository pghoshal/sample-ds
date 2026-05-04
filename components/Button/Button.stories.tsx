import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { options: ["primary", "secondary", "danger"] },
    size: { options: ["sm", "md", "lg"] }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryReview: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Review invoices"
  }
};

export const DangerConfirm: Story = {
  args: {
    variant: "danger",
    size: "md",
    children: "Suspend account"
  },
  play: async () => {
    // Interaction note: confirm action appears only after consequence copy is visible.
  }
};

