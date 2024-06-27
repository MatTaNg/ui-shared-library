import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton, SecondaryButton } from "../Buttons";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const PrimaryButtons: Story = {
  render: () => (
    <>
      <PrimaryButton id={"primaryButton"} onClick={() => alert("clicked!")}>
        Primary Button
      </PrimaryButton>
      <PrimaryButton
        id={"disabledPrimaryButton"}
        isDisabled
        onClick={() => alert("clicked!")}
      >
        Disabled Primary Button
      </PrimaryButton>
    </>
  ),
};
export const SecondaryButtons: Story = {
  render: () => (
    <>
      <SecondaryButton id={"secondaryButton"} onClick={() => alert("clicked!")}>
        Secondary Button
      </SecondaryButton>
      <SecondaryButton
        id={"disabledSecondaryButton"}
        isDisabled
        onClick={() => alert("clicked!")}
      >
        Disabled Secondary Button
      </SecondaryButton>
    </>
  ),
};
