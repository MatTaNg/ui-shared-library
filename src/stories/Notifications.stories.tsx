import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ErrorNotification } from "../Notifications/errorNotification";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ErrorNotification> = {
  component: ErrorNotification,
};

export default meta;
type Story = StoryObj<typeof ErrorNotification>;

// The name of this File will be the "folder" in storybook
// The name of this component is what will show up as a "file" within the folder
export const ErrorNotifications: Story = {
  render: () => <ErrorNotification />,
};
