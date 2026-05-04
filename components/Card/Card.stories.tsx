import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    tone: { options: ["neutral", "warning", "danger", "success"] }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    title: "Invoice risk",
    tone: "warning",
    children: "3 overdue invoices"
  }
};

