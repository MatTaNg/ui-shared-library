import React from "react";
import "./buttons.scss";
import Button from "@mui/material/Button";

type SecondaryButtonProps = {
  className?: string;
  id: string;
  isDisabled?: boolean;
  onClick: (value: any) => void;
  children: React.ReactNode;
};

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <Button
      variant="contained"
      className={props.className}
      onClick={props.onClick}
      id={props.id ?? props.children?.toString()}
      disabled={props.isDisabled}
    >
      {props.children}
    </Button>
  );
};
