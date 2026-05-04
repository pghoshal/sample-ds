import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

const meta = {
  title: "Components/Chart",
  component: Chart,
  argTypes: {
    kind: { options: ["bar", "line", "donut"] }
  }
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RiskTrend: Story = {
  args: {
    kind: "bar",
    summary: "High risk invoices increased this week."
  }
};

