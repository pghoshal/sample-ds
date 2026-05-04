import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta = {
  title: "Components/DataTable",
  component: DataTable,
  argTypes: {
    density: { options: ["compact", "comfortable"] }
  }
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvoiceRiskRecords: Story = {
  args: {
    ariaLabel: "Invoice risk records",
    density: "compact",
    sortable: true
  }
};

