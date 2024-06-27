import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorNotification } from "./errorNotification";

describe("Error Notification", () => {
  it("should display an error notification with a custom error message", () => {
    render(<ErrorNotification message={"custom error message"} />);
    expect(screen.queryByText("custom error message")).not.toBeNull();
  });
  it("should display an error notification with a default error message", () => {
    render(<ErrorNotification />);
    expect(
      screen.queryByText("Oops! Something went wrong, please try again later.")
    ).not.toBeNull();
  });
});
