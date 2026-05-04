import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    role: { options: ["dialog", "alertdialog"] }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDialog: Story = {
  args: {
    title: "Edit billing contact",
    role: "dialog",
    children: "Update the finance contact for this account."
  }
};

export const DestructiveConfirmation: Story = {
  args: {
    title: "Suspend account",
    role: "alertdialog",
    children: "This account will lose access until finance restores it."
  }
};

