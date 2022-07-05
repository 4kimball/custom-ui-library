import type { Story } from "@storybook/react";
import type { ButtonProps } from "src/types";

import { Button } from "src/components";

export default {
  component: Button,
  title: "Button",
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  text: "Baisc",
};
