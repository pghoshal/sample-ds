import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    intent: { options: ["search", "text", "currency"] }
  }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountSearch: Story = {
  args: {
    label: "Search accounts",
    intent: "search",
    value: ""
  }
};

