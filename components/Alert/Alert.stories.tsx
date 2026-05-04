import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    tone: { options: ["neutral", "warning", "danger", "success"] }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvoiceWarning: Story = {
  args: {
    tone: "warning",
    title: "3 invoices are overdue",
    children: "Review payment history before changing account status."
  }
};

export const DestructiveConsequence: Story = {
  args: {
    tone: "danger",
    title: "Account access will be suspended",
    children: "Users will lose access until finance restores the account."
  }
};

