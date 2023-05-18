import type { Meta, StoryObj } from "@storybook/react";
import type { IOrdersEditorProps } from "../components/OrdersEditor";
import OrdersEditor from "../components/OrdersEditor";
import { Provider } from "react-redux";
import store from "../ts/store";

export default {
  title: "UI/OrdersEditor",
  component: OrdersEditor,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta<IOrdersEditorProps>;

export const Default: StoryObj<IOrdersEditorProps> = {
  args: {
    orders: {},
    setOrders: () => null,
  },
};