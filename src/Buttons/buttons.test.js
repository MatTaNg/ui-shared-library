import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { PrimaryButton, SecondaryButton } from ".";

describe("Primary Button", () => {
  const mockOnClickHandler = jest.fn();
  it("should call the onClick handler on click", () => {
    render(
      <PrimaryButton onClick={mockOnClickHandler}>Primary Button</PrimaryButton>
    );
    userEvent.click(screen.getByText("Primary Button"));
    expect(mockOnClickHandler).toHaveBeenCalledWith(expect.anything());
  });
});

describe("Secondary Button", () => {
  const mockOnClickHandler = jest.fn();
  it("should call the onClick handler on click", () => {
    render(
      <SecondaryButton onClick={mockOnClickHandler}>
        Secondary Button
      </SecondaryButton>
    );
    userEvent.click(screen.getByText("Secondary Button"));
    expect(mockOnClickHandler).toHaveBeenCalledWith(expect.anything());
  });
});
