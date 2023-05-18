import { Meta, StoryObj } from "@storybook/react";
import EditItem, { IEditItemProps } from "../components/EditItem";
import { Provider } from "react-redux";
import store from "../ts/store";

export default {
  title: "UI/EditItem",
  component: EditItem,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta<IEditItemProps>;

export const Default: StoryObj<IEditItemProps> = {
  args: {
    onSuccess: () => null,
    onCancel: () => null,
  },
};

export const WithNameAndPrice: StoryObj<IEditItemProps> = {
  args: {
    onSuccess: () => null,
    onCancel: () => null,
    name: "test",
    price: 1.23,
  },
};
