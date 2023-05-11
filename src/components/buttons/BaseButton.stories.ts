import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from "./BaseButton.vue";
import { backgroundColorVariants } from "../../constants/colors";
import { roundedVariants } from "../../constants/shapes";

const meta: Meta<typeof BaseButton> = {
  title: "UI/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    buttonColor: {
      description: "The background color of the button",
      control: { type: "radio" },
      options: Object.keys(backgroundColorVariants),
    },
    rounded: {
      description: "Define the border radius of the button",
      control: { type: "radio" },
      options: Object.keys(roundedVariants),
    }
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {};

export const Red: Story = {
  args: {
    buttonColor: "red-500",
  },
};
