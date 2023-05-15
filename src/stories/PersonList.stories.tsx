import type { Meta } from "@storybook/react";
import type { FC } from "react";
import PersonList from "../components/PersonList";
import { Provider } from "react-redux";
import store from "../ts/store";

export default {
  title: "UI/AccordionList",
  component: PersonList,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta<FC>;

export const Default = {
  args: {},
};
