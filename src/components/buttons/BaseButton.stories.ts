import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from "./BaseButton.vue";

const meta: Meta<typeof BaseButton> = {
  title: "UI/BaseButton",
  component: BaseButton,
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  args: {
    label: "Default Button",
  },
};
