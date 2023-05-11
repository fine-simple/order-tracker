import AccordionModify from "../components/AccordionModify";
import type { IAccordionModifyProps } from "../components/AccordionModify";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "UI/AccordionModify",
  component: AccordionModify,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  actions: { argTypesRegex: "^on.*" },
} as Meta<IAccordionModifyProps>;

export const Default: StoryObj<IAccordionModifyProps> = {
  args: {
    title: "Hello World",
    summary: "2.0 L.E.",
    children: "This is the children",
  },
};

export const PrimaryWithList = {
  args: {
    title: "Hello World",
    summary: "This is a summary",
    children: (
      <ul>
        <li>Item 1</li>
      </ul>
    ),
  },
};
