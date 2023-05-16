import type { Meta, StoryObj } from "@storybook/react";
import AddModify from "../components/AddModify";
import type { IAddModifyProps } from "../components/AddModify";
import { Provider } from "react-redux";
import store from "../ts/store";

export default {
  title: "UI/AddModify",
  component: AddModify,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta<IAddModifyProps>;

export const Default: StoryObj<IAddModifyProps> = {
  args: {
    name: "Tawfik",
  },
};
