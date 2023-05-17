import { StoryObj } from "@storybook/react";
import AddItem, { IAddItemProps } from "../components/AddItem";

export default {
  title: "UI/AddItem",
  component: AddItem,
  tags: ["autodocs"],
};

export const Default: StoryObj<IAddItemProps> = {
  args: {
    options: [
      ["1", { name: "test", price: 1.23 }],
      ["2", { name: "test2", price: 2.34 }],
    ],
  },
};
